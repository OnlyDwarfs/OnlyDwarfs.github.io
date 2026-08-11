// DwarfDivasShow.jsx -- DwarfDivas info page
// Show facts updated 2026-08-08: The Nerd, Downtown Las Vegas. Three nights, Sept 4-6 2026.
// Moved from a late-night 11:55 PM slot to a 8:00 PM prime-time show (doors 7:30).
// Pricing synced to the live Eventbrite listing (event 1997511870777).
const FIRST_NIGHT = new Date('2026-09-04T20:00:00-07:00');
const TICKETS_URL = 'https://www.eventbrite.com/e/dwarf-divas-midget-burlesque-show-downtown-las-vegas-21-tickets-1997511870777?aff=Dwarfdivaswebsite';

const CD = ({ num, lbl }) => (
  <div className="divas-cd-block">
    <span className="divas-cd-num">{num}</span>
    <span className="divas-cd-lbl">{lbl}</span>
  </div>
);

const DwarfDivasShow = () => {
  const [countdown, setCountdown] = React.useState({ d: 0, h: 0, m: 0, s: 0 });

  // Live countdown to opening night
  React.useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, FIRST_NIGHT - new Date());
      setCountdown({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const acts = [
    { n: '01', t: 'The Opening',     d: 'The full cast hits the stage. Sets the tone in the first 90 seconds.' },
    { n: '02', t: 'Solo Cabaret',    d: 'Signature performers, one at a time. Burlesque routines you will not see anywhere else in Vegas.' },
    { n: '03', t: 'Comedy Break',    d: 'The MC works the room and the front row. Nobody is safe. Do not sit up front if you are shy.' },
    { n: '04', t: 'The Main Number', d: 'The full cast returns for the showstopper. Costumes, choreography, the works.' },
    { n: '05', t: 'Encore',          d: 'Audience-request finale. You help pick how the night ends.' },
  ];

  // Synced to the live Eventbrite listing 2026-08-08
  const tiers = [
    { name: 'Early Bird GA',    price: '$40',  note: 'Lowest price in the house  -  limited  -  first come, first served' },
    { name: 'General Admission',price: '$50',  note: 'Your seat to the boldest show downtown' },
    { name: 'VIP Seating',      price: '$70',  note: 'Best seats in the house  -  closest to the stage' },
    { name: 'Stage Experience', price: '$150', note: "You're IN the show  -  an up-close, on-stage moment  -  extremely limited" },
    { name: 'VIP Booth',        price: '$700', note: 'Your own booth for the night  -  built for a group that wants the best view in the room' },
  ];

  // Three nights, one Eventbrite listing (pick the date at checkout)
  const dates = [
    { day: 'Fri', date: 'Sept 4', url: TICKETS_URL },
    { day: 'Sat', date: 'Sept 5', url: TICKETS_URL },
    { day: 'Sun', date: 'Sept 6', url: TICKETS_URL },
  ];

  return (
    <div className="divas">
      {/* HERO */}
      <section className="divas-hero" data-screen-label="Show Hero">
        <div className="divas-hero-noise" aria-hidden="true" />
        <div className="divas-hero-glow" aria-hidden="true" />

        <div className="divas-hero-inner">
          <div className="divas-hero-poster">
            <img src="assets/dwarfdivas-hero.jpg" alt="DwarfDivas -- Burlesque at The Nerd, Downtown Las Vegas, September 4-6 2026" />
          </div>

          <div className="divas-hero-tags">
            <span className="divas-tag">(show) Flagship Show</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Downtown Las Vegas</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Sept 4-6, 2026</span>
          </div>

          <div className="divas-brand-logo">
            <img src="assets/Dwarfdivalogo.png" alt="DwarfDivas" />
          </div>

          <div className="divas-hero-stars" aria-hidden="true">
            <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
          </div>

          <p className="divas-hero-sub">
            An all-dwarf burlesque revue. A powerhouse cast, one stage, our own room.{' '}
            <strong>Vegas' most unforgettable night out — three nights only, downtown.</strong>
          </p>

          <div className="divas-hero-meta">
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Venue</span>
              <span className="divas-meta-val">The Nerd</span>
              <span className="divas-meta-sub">450 Fremont St #250  -  Downtown LV</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Dates</span>
              <span className="divas-meta-val">Sept 4-6, 2026</span>
              <span className="divas-meta-sub">Fri-Sun  -  Three nights only</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Showtime</span>
              <span className="divas-meta-val">8:00 PM</span>
              <span className="divas-meta-sub">Doors 7:30 PM  -  Pacific (Las Vegas)</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Ages</span>
              <span className="divas-meta-val">21+ only</span>
              <span className="divas-meta-sub">Valid photo ID required</span>
            </div>
          </div>

          <div className="divas-hero-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">
              Tickets from $40 <span className="od-btn-arrow">-></span>
            </a>
            <a href="#the-show" className="od-btn-outline od-btn-lg">About the show</a>
          </div>
        </div>

        {/* Countdown */}
        <div className="divas-countdown" role="timer" aria-label="Countdown to opening night">
          <div className="divas-countdown-lbl">
            <span className="od-hero-live-dot" /> Opening night in
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
            <span className="divas-meta-lbl" style={{opacity:0.8}}>First night</span>
            <span className="divas-meta-val" style={{fontSize:16}}>Sept 4  -  8:00 PM PT</span>
          </div>
        </div>
      </section>

      {/* CRITICS STRIP */}
      <div className="divas-critics">
        <div className="divas-critics-track">
          {[
            '"Absolutely unhinged. I have not laughed this hard in a Vegas theater in years." -- LV Weekly',
            '"The most unique ticket in town." -- Vegas Magazine',
            '"Five acts of perfectly controlled chaos." -- The Strip Review',
            '"You will not see this show anywhere else, because nobody else would book it." -- Destination Las Vegas',
            '"An instant downtown classic." -- Showbiz LV',
            '"Absolutely unhinged. I have not laughed this hard in a Vegas theater in years." -- LV Weekly',
            '"The most unique ticket in town." -- Vegas Magazine',
            '"Five acts of perfectly controlled chaos." -- The Strip Review',
          ].map((q, i) => (
            <span key={i} className="divas-critic">{q}<span className="divas-critic-star">*</span></span>
          ))}
        </div>
      </div>

      {/* THE SHOW */}
      <section className="divas-section" id="the-show" data-screen-label="The Show">
        <div className="divas-inner">
          <div className="divas-sec-head">
            <div>
              <div className="od-eyebrow">The show</div>
              <h2 className="divas-sec-title">
                Five divas. One stage.<br/>
                <span className="od-accent-blue">Zero apologies.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              One room, one stage, every seat close to it. Book the front row if you want to be part of it.
              Book the back row if you want to tell your friends about it tomorrow.
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

      {/* TICKETS */}
      <section className="divas-section divas-section-dark" id="tickets" data-screen-label="Tickets">
        <div className="divas-inner">
          <div className="divas-sec-head">
            <div>
              <div className="od-eyebrow">Tickets</div>
              <h2 className="divas-sec-title">
                From $40.<br/>
                <span className="od-accent-blue">Three nights only.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              September 4, 5 &amp; 6 — Friday, Saturday and Sunday at The Nerd.
              When it's gone, it's gone.
            </p>
          </div>

          {/* Tier info cards */}
          <div className="divas-tier-info-grid" style={{ marginBottom: 24 }}>
            {tiers.map((t) => (
              <div key={t.name} className="divas-tier-info-card">
                <div className="divas-tier-info-top">
                  <span className="divas-tier-name">{t.name}</span>
                  <span className="divas-tier-price">{t.price}</span>
                </div>
                <div className="divas-tier-note">{t.note}</div>
              </div>
            ))}
          </div>

          {/* Group bundles note */}
          <div style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 32,
            lineHeight: 1.6,
          }}>
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Bringing a crew?</strong>{' '}
            Group bundles seat your whole party together — 5&times; General Admission for <strong>$200</strong> ($40/seat)
            or the 5&times; VIP bundle for <strong>$300</strong> ($60/seat). Built for bachelorettes, birthdays, and bro-trips.
          </div>

          {/* Pick your night — live Eventbrite listing */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16,
            padding: '28px 24px',
            marginBottom: 20,
          }}>
            <div style={{
              fontSize: 13, fontWeight: 800, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
              marginBottom: 18, textAlign: 'center',
            }}>
              Pick your night — secure checkout on Eventbrite
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: 12,
            }}>
              {dates.map((d) => (
                <a
                  key={d.date}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="od-btn-primary"
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 3,
                    padding: '16px 12px', textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700, opacity: 0.85 }}>{d.day}</span>
                  <span style={{ fontSize: 19, fontWeight: 900, lineHeight: 1.1 }}>{d.date}</span>
                  <span style={{ fontSize: 12, fontWeight: 700 }}>Get tickets -></span>
                </a>
              ))}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 16 }}>
              All three shows 8:00 PM · Doors 7:30 PM · The Nerd, Downtown Las Vegas · 21+ · ID required
            </div>
          </div>

          <div className="divas-tickets-cta">
            <div className="divas-summary-foot">
              Secure checkout via Eventbrite  -  Instant mobile tickets  -  21+ ID required at door
            </div>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="divas-section" id="venue" data-screen-label="Venue">
        <div className="divas-inner">
          <div className="divas-venue">
            <div className="divas-venue-left">
              <div className="od-eyebrow">The venue</div>
              <h2 className="divas-sec-title">The Nerd, Downtown Las Vegas.</h2>
              <p className="divas-venue-desc">
                Downtown Las Vegas, second floor of Neonopolis — right above the Fremont Street Experience.
                Our own room and our own stage: every seat close to the action, full bar, and the boldest
                ticket downtown. This is a room, not an arena. Everybody's in it.
              </p>
              <div className="divas-venue-list">
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Address</span>
                  <span className="divas-venue-v">450 Fremont St #250, Las Vegas, NV 89101</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">The room</span>
                  <span className="divas-venue-v">Our own stage  -  every seat close to it</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Getting there</span>
                  <span className="divas-venue-v">Neonopolis parking garage  -  rideshare recommended</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Ages</span>
                  <span className="divas-venue-v">21+ only  -  Valid photo ID at door</span>
                </div>
              </div>
            </div>
            <div className="divas-venue-right">
              <div className="divas-map" aria-hidden="true">
                <div className="divas-map-grid" />
                <div className="divas-map-streets">
                  <div className="divas-map-street h" style={{top:'28%'}} />
                  <div className="divas-map-street h" style={{top:'62%'}} />
                  <div className="divas-map-street v" style={{left:'38%'}} />
                  <div className="divas-map-street v" style={{left:'72%'}} />
                </div>
                <div className="divas-map-pin">
                  <div className="divas-map-pin-dot" />
                  <div className="divas-map-pin-label">
                    <div className="divas-map-pin-name">The Nerd at Neonopolis</div>
                    <div className="divas-map-pin-addr">450 Fremont St #250</div>
                  </div>
                  <div className="divas-map-pin-pulse" />
                </div>
                <div className="divas-map-attr">Downtown Las Vegas  -  Fremont St</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="divas-final" data-screen-label="Final CTA">
        <div className="divas-final-glow" aria-hidden="true"/>
        <div className="divas-inner divas-final-inner">
          <div className="od-eyebrow">Opening night  -  Sept 4</div>
          <h2 className="divas-final-title">
            Don't be the person<br/>
            who <span className="od-accent-blue">missed it.</span>
          </h2>
          <p className="divas-final-sub">Three nights only — September 4, 5 &amp; 6. A weekend Vegas won't shut up about.</p>
          <div className="divas-final-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">
              Get tickets ->
            </a>
            <a href="intake.html" className="od-btn-outline od-btn-lg">Book the show private</a>
          </div>
        </div>
      </section>

    </div>
  );
};

window.DwarfDivasShow = DwarfDivasShow;
