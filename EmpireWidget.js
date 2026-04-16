// ═══════════════════════════════════════════
//  EMPIRE COMMAND CENTER — Scriptable Widget
//  onlydwarfs.github.io/data.json
// ═══════════════════════════════════════════

const DATA_URL = "https://onlydwarfs.github.io/data.json"

// ── COLORS ───────────────────────────────
const C = {
  bg:       new Color("#0D0D1A"),
  bgCard:   new Color("#161628"),
  gold:     new Color("#C9A84C"),
  purple:   new Color("#7B2FBE"),
  blue:     new Color("#1A5276"),
  white:    new Color("#FFFFFF"),
  dim:      new Color("#888888"),
  red:      new Color("#E74C3C"),
  green:    new Color("#27AE60"),
}

// ── FETCH DATA ────────────────────────────
async function fetchData() {
  try {
    const req = new Request(DATA_URL)
    req.timeoutInterval = 8
    return await req.loadJSON()
  } catch(e) {
    return { tickets: "—", show_date: "2026-05-28", show_name: "DwarfDivas @ Deja Vu Vegas", updated: "offline" }
  }
}

// ── COUNTDOWN ────────────────────────────
function daysUntil(dateStr) {
  const now  = new Date()
  const show = new Date(dateStr + "T00:00:00")
  const diff = show - now
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

// ── ADD TEXT HELPER ───────────────────────
function addText(parent, text, opts = {}) {
  const t = parent.addText(text)
  t.font        = opts.mono  ? Font.regularMonospacedSystemFont(opts.size || 12)
                             : (opts.bold ? Font.boldSystemFont(opts.size || 12) : Font.regularSystemFont(opts.size || 12))
  t.textColor   = opts.color || C.white
  t.minimumScaleFactor = opts.scale || 0.7
  t.lineLimit   = opts.lines || 1
  return t
}

// ── DIVIDER ───────────────────────────────
function addDivider(stack, color = C.bgCard) {
  const d = stack.addStack()
  d.size = new Size(-1, 1)
  d.backgroundColor = color
}

// ═══════════════════════════════════════════
//  SMALL WIDGET  (2×2)
// ═══════════════════════════════════════════
function buildSmall(widget, data) {
  const days = daysUntil(data.show_date)
  widget.setPadding(14, 14, 14, 14)

  // Header
  addText(widget, "EMPIRE", { bold: true, size: 10, color: C.gold })
  widget.addSpacer(2)

  // Big countdown
  addText(widget, String(days), { bold: true, size: 52, color: days <= 14 ? C.red : C.white })
  addText(widget, "days to show", { size: 11, color: C.dim })
  widget.addSpacer(6)

  // Ticket count
  const row = widget.addStack()
  row.layoutHorizontally()
  row.centerAlignContent()
  addText(row, "🎟 ", { size: 12 })
  addText(row, String(data.tickets), { bold: true, size: 18, color: C.purple })
  row.addSpacer(4)
  addText(row, "sold", { size: 11, color: C.dim })

  widget.addSpacer(6)
  addText(widget, `↻ ${data.updated}`, { size: 9, color: C.dim })
}

// ═══════════════════════════════════════════
//  MEDIUM WIDGET  (4×2)
// ═══════════════════════════════════════════
function buildMedium(widget, data) {
  const days = daysUntil(data.show_date)
  widget.setPadding(14, 16, 14, 16)

  // Top row: brand + updated
  const topRow = widget.addStack()
  topRow.layoutHorizontally()
  addText(topRow, "EMPIRE COMMAND CENTER", { bold: true, size: 10, color: C.gold })
  topRow.addSpacer()
  addText(topRow, `↻ ${data.updated}`, { size: 9, color: C.dim })

  widget.addSpacer(10)

  // Main stats row
  const stats = widget.addStack()
  stats.layoutHorizontally()
  stats.spacing = 0

  // Countdown block
  const cdBlock = stats.addStack()
  cdBlock.layoutVertically()
  cdBlock.backgroundColor = C.bgCard
  cdBlock.cornerRadius = 8
  cdBlock.setPadding(8, 12, 8, 12)
  addText(cdBlock, String(days), { bold: true, size: 40, color: days <= 14 ? C.red : C.white })
  addText(cdBlock, "DAYS TO SHOW", { bold: true, size: 8, color: C.dim })

  stats.addSpacer(10)

  // Right column
  const rightCol = stats.addStack()
  rightCol.layoutVertically()
  rightCol.spacing = 6

  // Ticket stat
  const tickBlock = rightCol.addStack()
  tickBlock.layoutVertically()
  tickBlock.backgroundColor = C.bgCard
  tickBlock.cornerRadius = 8
  tickBlock.setPadding(6, 10, 6, 10)
  addText(tickBlock, String(data.tickets), { bold: true, size: 22, color: C.purple })
  addText(tickBlock, "TICKETS SOLD", { bold: true, size: 8, color: C.dim })

  rightCol.addSpacer(0)

  // Show name
  const showBlock = rightCol.addStack()
  showBlock.backgroundColor = C.bgCard
  showBlock.cornerRadius = 8
  showBlock.setPadding(6, 10, 6, 10)
  addText(showBlock, data.show_name, { size: 10, color: C.dim, lines: 2, scale: 0.8 })
}

// ═══════════════════════════════════════════
//  LARGE WIDGET  (4×4)
// ═══════════════════════════════════════════
function buildLarge(widget, data) {
  const days = daysUntil(data.show_date)
  widget.setPadding(16, 16, 16, 16)

  // Header
  const header = widget.addStack()
  header.layoutHorizontally()
  header.centerAlignContent()
  addText(header, "⚡ EMPIRE COMMAND CENTER", { bold: true, size: 12, color: C.gold })
  header.addSpacer()
  addText(header, `↻ ${data.updated}`, { size: 9, color: C.dim })

  widget.addSpacer(12)

  // Stats row
  const statsRow = widget.addStack()
  statsRow.layoutHorizontally()
  statsRow.spacing = 8

  // Countdown
  const cd = statsRow.addStack()
  cd.layoutVertically()
  cd.backgroundColor = C.bgCard
  cd.cornerRadius = 10
  cd.setPadding(10, 14, 10, 14)
  cd.size = new Size(0, 80)
  addText(cd, String(days), { bold: true, size: 44, color: days <= 14 ? C.red : C.white })
  addText(cd, "days to show", { size: 9, color: C.dim })

  // Tickets
  const tk = statsRow.addStack()
  tk.layoutVertically()
  tk.backgroundColor = C.bgCard
  tk.cornerRadius = 10
  tk.setPadding(10, 14, 10, 14)
  tk.size = new Size(0, 80)
  addText(tk, "🎟", { size: 18 })
  tk.addSpacer(2)
  addText(tk, String(data.tickets), { bold: true, size: 28, color: C.purple })
  addText(tk, "tickets sold", { size: 9, color: C.dim })

  widget.addSpacer(12)

  // MR. ONLYDWARFS section
  addText(widget, "⚡  MR. ONLYDWARFS", { bold: true, size: 10, color: C.blue })
  widget.addSpacer(4)

  const odTasks = [
    "Follow up on new leads",
    "Send quotes for pending gigs",
    "Check talent availability"
  ]
  for (const task of odTasks) {
    const row = widget.addStack()
    row.layoutHorizontally()
    row.centerAlignContent()
    row.spacing = 6
    addText(row, "›", { bold: true, size: 12, color: C.blue })
    addText(row, task, { size: 11, color: C.white, lines: 1 })
    widget.addSpacer(2)
  }

  widget.addSpacer(10)

  // MS. DWARFDIVAS section
  addText(widget, "🎭  MS. DWARFDIVAS", { bold: true, size: 10, color: C.purple })
  widget.addSpacer(4)

  const ddTasks = [
    "Push ticket sales — " + days + " days out",
    "Confirm performer lineup",
    "Venue coordination"
  ]
  for (const task of ddTasks) {
    const row = widget.addStack()
    row.layoutHorizontally()
    row.centerAlignContent()
    row.spacing = 6
    addText(row, "›", { bold: true, size: 12, color: C.purple })
    addText(row, task, { size: 11, color: C.white, lines: 1 })
    widget.addSpacer(2)
  }
}

// ═══════════════════════════════════════════
//  MAIN
// ═══════════════════════════════════════════
const data = await fetchData()
const widget = new ListWidget()
widget.backgroundColor = C.bg
widget.url = "https://onlydwarfs.github.io"

const size = config.widgetFamily

if (size === "small") {
  buildSmall(widget, data)
} else if (size === "large") {
  buildLarge(widget, data)
} else {
  buildMedium(widget, data)  // default / medium
}

if (config.runsInWidget) {
  Script.setWidget(widget)
} else {
  // Preview in app — show medium
  buildMedium(widget, data)
  widget.presentMedium()
}

Script.complete()
