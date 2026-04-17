// ── OnlyDwarfs CRM — Google Apps Script Backend ──────────────────
// Deploy as: Web App → Execute as: Me → Who has access: Anyone
// ─────────────────────────────────────────────────────────────────

const SHEET_ID = '1SbchSzeThe_PTSju7WQyPe8_0d54xaCfpnCVWZIwBV0';
const SHEET_NAME = 'Sheet1';

// Column indices (0-based)
const COL = {
  LEAD_ID:      0,   // A
  NAME:         1,   // B
  EMAIL:        2,   // C
  PHONE:        3,   // D
  EVENT_TYPE:   4,   // E
  EVENT_DATE:   5,   // F
  LOCATION:     6,   // G
  HEADCOUNT:    7,   // H
  DETAILS:      8,   // I
  SOURCE:       9,   // J
  SUBMITTED_AT: 10,  // K
  STAGE:        11,  // L
  NOTES:        12,  // M
  LAST_UPDATED: 13   // N
};

function getSheet() {
  return SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.action === 'newLead') {
      return handleNewLead(data);
    }
    if (data.action === 'updateLead') {
      return handleUpdateLead(data);
    }

    return out({ success: false, error: 'Unknown action: ' + data.action });
  } catch(err) {
    return out({ success: false, error: err.toString() });
  }
}

function handleNewLead(data) {
  const sheet = getSheet();
  const now   = new Date().toISOString();
  const id    = 'OD-' + Date.now();

  sheet.appendRow([
    id,                            // Lead ID
    data.name        || '',        // Name
    data.email       || '',        // Email
    data.phone       || '',        // Phone
    data.eventType   || '',        // Event Type
    data.eventDate   || '',        // Event Date
    data.location    || '',        // Location
    data.headcount   || '',        // Headcount
    data.details     || '',        // Details
    data.source      || 'Website', // Source
    now,                           // Submitted At
    'New',                         // Stage (default)
    '',                            // Notes
    now                            // Last Updated
  ]);

  // Optional: send email notification to Ryder
  sendNotificationEmail(id, data);

  return out({ success: true, id });
}

function handleUpdateLead(data) {
  const sheet = getSheet();
  const rows  = sheet.getDataRange().getValues();
  const now   = new Date().toISOString();

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][COL.LEAD_ID] === data.leadId) {
      const row = i + 1; // Sheets is 1-indexed
      if (data.stage !== undefined && data.stage !== null) {
        sheet.getRange(row, COL.STAGE + 1).setValue(data.stage);
      }
      if (data.notes !== undefined && data.notes !== null) {
        sheet.getRange(row, COL.NOTES + 1).setValue(data.notes);
      }
      sheet.getRange(row, COL.LAST_UPDATED + 1).setValue(now);
      return out({ success: true });
    }
  }

  return out({ success: false, error: 'Lead not found: ' + data.leadId });
}

// ── OPTIONAL: Email notification on new lead ──────────────────────
function sendNotificationEmail(leadId, data) {
  try {
    const subject = `🔔 New Lead: ${data.name || 'Unknown'} — ${data.eventType || 'Event'}`;
    const body = `New booking inquiry received!\n\n` +
      `Lead ID: ${leadId}\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Event Type: ${data.eventType}\n` +
      `Event Date: ${data.eventDate}\n` +
      `Location: ${data.location}\n` +
      `Headcount: ${data.headcount}\n` +
      `Details: ${data.details}\n\n` +
      `View CRM: https://onlydwarfs.github.io/crm.html`;

    GmailApp.sendEmail('ryderwarbrick@onlydwarfs.com', subject, body);
  } catch(e) {
    // Non-fatal — log but don't fail the response
    console.log('Email notification failed: ' + e);
  }
}

// ── RESPONSE HELPER ───────────────────────────────────────────────
function out(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.TEXT);
}

// ── TEST FUNCTION (run manually in Apps Script editor to verify) ──
function testNewLead() {
  const fakePost = {
    postData: {
      contents: JSON.stringify({
        action:    'newLead',
        name:      'Test User',
        email:     'test@example.com',
        phone:     '(555) 555-0000',
        eventType: 'Birthday Party',
        eventDate: 'Jun 15, 2026',
        location:  'Las Vegas, NV',
        headcount: '50',
        details:   'Testing the CRM integration.',
        source:    'Website'
      })
    }
  };
  const result = doPost(fakePost);
  Logger.log(result.getContent());
}
