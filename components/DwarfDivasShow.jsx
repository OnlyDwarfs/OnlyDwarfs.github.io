// DwarfDivasShow.jsx — Vegas show ticket page
const OPENING_NIGHT = new Date('2026-05-28T20:00:00-07:00');

const DwarfDivasShow = () => {
  const [countdown, setCountdown] = React.useState({ d: 0, h: 0, m: 0, s: 0 });
  const [selectedDate, setSelectedDate] = React.useState(0);
  const [selectedTier, setSelectedTier] = React.useState('premium');
  const [qty, setQty] = React.useState(2);

  React.useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, OPENING_NIGHT - new Date());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const showDates = [
    { label: 'Opening Night', date: 'Thu · May 28', time: '8:00 PM', tag: 'Premiere', status: 'Selling fast', fill: 82 },
    { label: 'Night Two',      date: 'Fri · May 29', time: '8:00 PM', tag: 'Weekend',  status: 'Selling fast', fill: 74 },
    { label: 'Weekly',         date: 'Thu · Jun 4',  time: '8:00 PM', tag: 'Residency', status: 'Open',        fill: 28 },
    { label: 'Weekly',         date: 'Fri · Jun 5',  time: '8:00 PM', tag: 'Residency', status: 'Open',        fill: 32 },
    { label: 'Weekly',         date: 'Thu · Jun 11', time: '8:00 PM', tag: 'Residency', status: 'Open',        fill: 18 },
    { label: 'Weekly',         date: 'Fri · Jun 12', time: '8:00 PM', tag: 'Residency', status: 'Open',        fill: 22 },
  ];

  const tiers = [
    { id: 'rail',    name: 'Rail',      price: 65,  note: 'Standing, main floor',    inc: ['Standing-room', 'Main-floor view', '21+ bar access'] },
    { id: 'seated',  name: 'Seated',    price: 95,  note: 'Reserved booth seating',  inc: ['Reserved seat', 'Cocktail service', 'Priority entry'] },
    { id: 'premium', name: 'Premium',   price: 145, note: 'Front booth + bottle',    inc: ['Front-row booth', 'Bottle service (1)', 'Meet-and-greet', 'Signed poster'] },
    { id: 'vip',     name: 'VIP Stage', price: 295, note: 'Stage-side, hosted',      inc: ['Stage-side booth', 'Bottle service (2)', 'Backstage tour', 'Photo with cast', 'Hosted by MC'] },
  ];

  const selectedTierObj = tiers.find((t) => t.id === selectedTier);
  const subtotal = selectedTierObj.price * qty;
  const fees = Math.round(subtotal * 0.12);
  const total = subtotal + fees;

  const acts = [
    { n: '01', t: 'The Opening', d: 'Big band entrance. Full cast on stage. Sets the tone in 90 seconds.' },
    { n: '02', t: 'Solo Cabaret', d: 'Three signature performers. Burlesque routines you will not see anywhere else in Vegas.' },
    { n: '03', t: 'Comedy Break', d: 'The MC roasts the front row. Nobody is safe. Do not sit in row one if you are shy.' },
    { n: '04', t: 'The Main Number', d: 'The full cast returns for a 14-minute showstopper. Costumes, pyro, the works.' },
    { n: '05', t: 'Encore', d: 'Audience-request finale. The band takes bets on which number they have to pull off live.' },
  ];

  return (
    <div className="divas">
      <nav className="divas-nav">
        <a href="index.html" className="od-nav-logo">Only<span>Dwarfs</span></a>
        <div className="divas-nav-mid">
          <span className="divas-nav-show">DwarfDivas · Live at Deja Vu Showgirls</span>
        </div>
        <a href="#tickets" className="od-nav-cta">
          <span className="od-nav-cta-dot"/> Get tickets
        </a>
      </nav>

      {/* ═══ HERO / POSTER ═══ */}
      <section className="divas-hero" data-screen-label="Show Hero">
        <div className="divas-hero-noise" aria-hidden="true" />
        <div className="divas-hero-glow" aria-hidden="true" />

        <div className="divas-hero-inner">
          <div className="divas-hero-tags">
            <span className="divas-tag">🎭 Flagship Show</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Las Vegas Residency</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Opens May 28, 2026</span>
          </div>

          <h1 className="divas-title" data-screen-label="DwarfDivas Poster">
            <span className="divas-title-top">Dwarf</span>
            <span className="divas-title-bot">Divas</span>
          </h1>

          <div className="divas-hero-stars" aria-hidden="true">
            <span>✦</span><span>✦</span><span>✦</span><span>✦</span><span>✦</span>
          </div>

          <p className="divas-hero-sub">
            An all-dwarf burlesque &amp; variety show. Five acts. One band. The front row will never recover. <strong>Las Vegas' most unreasonable night out.</strong>
          </p>

          <div className="divas-hero-meta">
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Venue</span>
              <span className="divas-meta-val">Deja Vu Showgirls</span>
              <span className="divas-meta-sub">3247 Industrial Rd, Las Vegas</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Opening</span>
              <span className="divas-meta-val">May 28–29, 2026</span>
              <span className="divas-meta-sub">Doors 7:30 · Curtain 8:00</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Residency</span>
              <span className="divas-meta-val">Every Thu &amp; Fri</span>
              <span className="divas-meta-sub">Starting June 4 · 21+ only</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Run Time</span>
              <span className="divas-meta-val">85 minutes</span>
              <span className="divas-meta-sub">No intermission · One encore</span>
            </div>
          </div>

          <div className="divas-hero-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">
              Get tickets from $65 <span className="od-btn-arrow">→</span>
            </a>
            <a href="#showtimes" className="od-btn-outline od-btn-lg">See all showtimes</a>
          </div>
        </div>

        {/* Countdown strip at bottom of hero */}
        <div className="divas-countdown" role="timer" aria-label="Countdown to opening night">
          <div className="divas-countdown-lbl">
            <span className="od-hero-live-dot" />
            Opening night in
          </div>
          <div className="divas-countdown-grid">
            <CD num={countdown.d} lbl="Days" />
            <span className="divas-cd-colon">:</span>
            <CD num={String(countdown.h).padStart(2,'0')} lbl="Hrs" />
            <span className="divas-cd-colon">:</span>
            <CD num={String(countdown.m).padStart(2,'0')} lbl="Min" />
            <span className="divas-cd-colon">:</span>
            <CD num={String(countdown.s).padStart(2,'0')} lbl="Sec" />
          </div>
          <div className="divas-countdown-end">
            <span className="divas-meta-lbl" style={{opacity:0.8}}>Doors</span>
            <span className="divas-meta-val" style={{fontSize:16}}>May 28 · 7:30 PM PT</span>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE CRITIC STRIP ═══ */}
      <div className="divas-critics">
        <div className="divas-critics-track">
          {[
            '"Absolutely unhinged. I have not laughed this hard in a Vegas theater in years." — LV Weekly',
            '"The most unique ticket in town." — Vegas Magazine',
            '"Five acts of perfectly controlled chaos." — The Strip Review',
            '"You will not see this show anywhere else, because nobody else would book it." — Destination Las Vegas',
            '"An instant residency classic." — Showbiz LV',
          ].concat([
            '"Absolutely unhinged. I have not laughed this hard in a Vegas theater in years." — LV Weekly',
            '"The most unique ticket in town." — Vegas Magazine',
            '"Five acts of perfectly controlled chaos." — The Strip Review',
          ]).map((q, i) => (
            <span key={i} className="divas-critic">{q}<span className="divas-critic-star">✦</span></span>
          ))}
        </div>
      </div>

      {/* ═══ THE SHOW ═══ */}
      <section className="divas-section" id="the-show" data-screen-label="The Show">
        <div className="divas-inner">
          <div className="divas-sec-head">
            <div>
              <div className="od-eyebrow">The show</div>
              <h2 className="divas-sec-title">
                Five acts. One band.<br/>
                <span className="od-accent-blue">Zero apologies.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              85 minutes, no intermission. Book the front row if you want to be part of it. Book the back row if you want to tell your friends about it tomorrow.
            </p>
          </div>

          <div className="divas-acts">
            {acts.map((a) => (
              <div key={a.n} className="divas-act">
                <span className="divas-act-num">{a.n}</span>
                <div className="divas-act-body">
                  <div className="divas-act-t">{a.t}</div>
                  <div className="divas-act-d">{a.d}</div>
                </div>
                <div className="divas-act-line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TICKETS ═══ */}
      <section className="divas-section divas-section-dark" id="tickets" data-screen-label="Tickets">
        <div className="divas-inner">
          <div className="divas-sec-head">
            <div>
              <div className="od-eyebrow">Tickets</div>
              <h2 className="divas-sec-title">
                Pick your night.<br/>
                Pick your <span className="od-accent-blue">seat.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              Opening weekend is selling fast. Residency nights (June onwards) have more room, but they always sell out within a week. Don't wait.
            </p>
          </div>

          {/* Showtimes */}
          <div className="divas-showtimes" id="showtimes">
            {showDates.map((s, i) => (
              <button
                key={i}
                className={`divas-showtime ${selectedDate === i ? 'active' : ''}`}
                onClick={() => setSelectedDate(i)}
              >
                <div className="divas-showtime-top">
                  <span className="divas-showtime-tag">{s.tag}</span>
                  <span className={`divas-showtime-status ${s.fill > 70 ? 'hot' : ''}`}>
                    <span className="divas-status-dot" /> {s.status}
                  </span>
                </div>
                <div className="divas-showtime-date">{s.date}</div>
                <div className="divas-showtime-time">{s.time} · {s.label}</div>
                <div className="divas-showtime-meter">
                  <div className="divas-showtime-meter-fill" style={{ width: `${s.fill}%` }} />
                </div>
                <div className="divas-showtime-meter-txt">{s.fill}% sold</div>
              </button>
            ))}
          </div>

          {/* Tier picker + summary */}
          <div className="divas-purchase">
            <div className="divas-tiers">
              <div className="divas-tiers-head">
                <span className="divas-tiers-lbl">Select your experience</span>
                <span className="divas-tiers-sel">{showDates[selectedDate].date} · {showDates[selectedDate].time}</span>
              </div>
              <div className="divas-tiers-grid">
                {tiers.map((t) => (
                  <button
                    key={t.id}
                    className={`divas-tier ${selectedTier === t.id ? 'active' : ''}`}
                    onClick={() => setSelectedTier(t.id)}
                    type="button"
                  >
                    <div className="divas-tier-top">
                      <span className="divas-tier-name">{t.name}</span>
                      <span className="divas-tier-price">${t.price}</span>
                    </div>
                    <div className="divas-tier-note">{t.note}</div>
                    <ul className="divas-tier-inc">
                      {t.inc.map((line) => (
                        <li key={line}>
                          <span className="divas-tier-check">✓</span> {line}
                        </li>
                      ))}
                    </ul>
                    <div className="divas-tier-radio">
                      <span className="divas-tier-radio-inner" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <aside className="divas-summary">
              <div className="divas-summary-head">
                <span className="divas-summary-lbl">Your order</span>
                <span className="divas-summary-live"><span className="od-hero-live-dot"/>LIVE</span>
              </div>
              <div className="divas-summary-date">
                {showDates[selectedDate].date}
                <span>{showDates[selectedDate].time} · Deja Vu Showgirls</span>
              </div>
              <div className="divas-summary-divider" />
              <div className="divas-summary-tier">
                <div>
                  <div className="divas-summary-tier-name">{selectedTierObj.name}</div>
                  <div className="divas-summary-tier-note">{selectedTierObj.note}</div>
                </div>
                <div className="divas-summary-qty">
                  <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
                  <span>{qty}</span>
                  <button type="button" onClick={() => setQty(Math.min(8, qty + 1))} aria-label="Increase">+</button>
                </div>
              </div>
              <div className="divas-summary-divider" />
              <div className="divas-summary-lines">
                <div className="divas-summary-line">
                  <span>{qty} × {selectedTierObj.name}</span>
                  <span>${subtotal}</span>
                </div>
                <div className="divas-summary-line muted">
                  <span>Fees &amp; tax</span>
                  <span>${fees}</span>
                </div>
              </div>
              <div className="divas-summary-total">
                <span>Total</span>
                <span className="divas-summary-total-num">${total}</span>
              </div>
              <a href="https://www.eventbrite.com/e/1984199650568" target="_blank" rel="noopener noreferrer" className="od-btn-primary divas-summary-cta">
                Get tickets on Eventbrite <span className="od-btn-arrow">→</span>
              </a>
              <div className="divas-summary-foot">
                Secure checkout · Instant mobile tickets · 21+ ID required at door
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══ VENUE ═══ */}
      <section className="divas-section" id="venue" data-screen-label="Venue">
        <div className="divas-inner">
          <div className="divas-venue">
            <div className="divas-venue-left">
              <div className="od-eyebrow">The venue</div>
              <h2 className="divas-sec-title">Deja Vu Showgirls.</h2>
              <p className="divas-venue-desc">
                One of the most storied cabaret venues in Las Vegas. 320-capacity black-box theater, full bar, floor seating and premium booths. Five minutes from the Strip, ten minutes from Harry Reid International.
              </p>
              <div className="divas-venue-list">
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Address</span>
                  <span className="divas-venue-v">3247 Industrial Rd, Las Vegas, NV 89109</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Capacity</span>
                  <span className="divas-venue-v">320 · Standing + seated</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Parking</span>
                  <span className="divas-venue-v">Complimentary valet after 7 PM</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Accessibility</span>
                  <span className="divas-venue-v">Step-free entry · ADA seating available</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Ages</span>
                  <span className="divas-venue-v">21+ only · Valid photo ID at door</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Dress code</span>
                  <span className="divas-venue-v">Upscale casual · No athletic wear</span>
                </div>
              </div>
            </div>
            <div className="divas-venue-right">
              <div className="divas-map" aria-hidden="true">
                <div className="divas-map-grid" />
                <div className="divas-map-streets">
                  <div className="divas-map-street h" style={{ top: '28%' }} />
                  <div className="divas-map-street h" style={{ top: '62%' }} />
                  <div className="divas-map-street v" style={{ left: '38%' }} />
                  <div className="divas-map-street v" style={{ left: '72%' }} />
                </div>
                <div className="divas-map-pin">
                  <div className="divas-map-pin-dot" />
                  <div className="divas-map-pin-label">
                    <div className="divas-map-pin-name">Deja Vu Showgirls</div>
                    <div className="divas-map-pin-addr">3247 Industrial Rd</div>
                  </div>
                  <div className="divas-map-pin-pulse" />
                </div>
                <div className="divas-map-attr">Las Vegas · Industrial District</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL STRIP ═══ */}
      <section className="divas-final" data-screen-label="Final CTA">
        <div className="divas-final-glow" aria-hidden="true"/>
        <div className="divas-inner divas-final-inner">
          <div className="od-eyebrow">Opening night · May 28</div>
          <h2 className="divas-final-title">
            Don't be the person<br/>
            who <span className="od-accent-blue">missed it.</span>
          </h2>
          <p className="divas-final-sub">
            320 seats. Two nights to launch. A year of Vegas talk to follow.
          </p>
          <div className="divas-final-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">Get tickets now →</a>
            <a href="intake.html" className="od-btn-outline od-btn-lg">Book the show private</a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="divas-footer">
        <div className="divas-inner divas-footer-inner">
          <div className="od-footer-logo">
            <a href="index.html">Only<span>Dwarfs</span></a>
          </div>
          <div className="divas-footer-links">
            <a href="index.html">Home</a>
            <a href="intake.html">Book a performer</a>
            <a href="#tickets">DwarfDivas tickets</a>
            <a href="#venue">Venue info</a>
          </div>
          <div className="divas-footer-copy">© 2026 OnlyDwarfs Entertainment LLC · Las Vegas, NV</div>
        </div>
      </footer>
    </div>
  );
};

const CD = ({ num, lbl }) => (
  <div className="divas-cd-block">
    <span className="divas-cd-num">{num}</span>
    <span className="divas-cd-lbl">{lbl}</span>
  </div>
);

window.DwarfDivasShow = DwarfDivasShow;
