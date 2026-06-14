// DwarfDivasShow.jsx -- DwarfDivas info page
// Show facts updated 2026-06-14: The Nerd at Neonopolis, four nights July 1-4 2026,
// 118-seat room, new pricing. Tickets not yet on sale (new Eventbrite event pending).
const FIRST_NIGHT    = new Date('2026-07-01T23:55:00-07:00');
const CAPACITY       = 118;

const CD = ({ num, lbl }) => (
  <div className="divas-cd-block">
    <span className="divas-cd-num">{num}</span>
    <span className="divas-cd-lbl">{lbl}</span>
  </div>
);

const DwarfDivasShow = () => {
  const [countdown, setCountdown] = React.useState({ d: 0, h: 0, m: 0, s: 0 });

  // Live countdown to first night
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

  const tiers = [
    { name: 'Early Bird',      price: '$40',  note: 'Lowest price in the house  -  limited  -  first come, first served' },
    { name: 'General',         price: '$60',  note: 'Your seat to the most talked-about late-night show downtown' },
    { name: 'GA + Photo',      price: '$80',  note: 'General admission  -  plus a post-show photo with the Divas' },
    { name: 'VIP Seating',     price: '$100', note: 'Best seats in the house  -  photos with the cast after the show' },
    { name: 'Stage Experience',price: '$300', note: "You're IN the show  -  an up-close, on-stage moment  -  extremely limited" },
  ];

  return (
    <div className="divas">
      {/* HERO */}
      <section className="divas-hero" data-screen-label="Show Hero">
        <div className="divas-hero-noise" aria-hidden="true" />
        <div className="divas-hero-glow" aria-hidden="true" />

        <div className="divas-hero-inner">
          <div className="divas-hero-poster">
            <img src="assets/dwarfdivas-hero.jpg" alt="DwarfDivas -- Late-night burlesque, The Nerd at Neonopolis, July 1-4 2026" />
          </div>

          <div className="divas-hero-tags">
            <span className="divas-tag">(show) Flagship Show</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Downtown Las Vegas</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">July 1-4, 2026</span>
          </div>

          <div className="divas-brand-logo">
            <img src="assets/Dwarfdivalogo.png" alt="DwarfDivas" />
          </div>

          <div className="divas-hero-stars" aria-hidden="true">
            <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
          </div>

          <p className="divas-hero-sub">
            An all-dwarf, late-night burlesque revue. A powerhouse cast, one stage, 118 seats.{' '}
            <strong>Vegas' most unforgettable night out — July 4th weekend, downtown.</strong>
          </p>

          <div className="divas-hero-meta">
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Venue</span>
              <span className="divas-meta-val">The Nerd at Neonopolis</span>
              <span className="divas-meta-sub">450 Fremont St #250  -  Downtown LV</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Dates</span>
              <span className="divas-meta-val">July 1-4, 2026</span>
              <span className="divas-meta-sub">Wed-Sat  -  Four nights only</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Showtime</span>
              <span className="divas-meta-val">11:55 PM</span>
              <span className="divas-meta-sub">Late-night  -  Pacific (Las Vegas)</span>
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
            <span className="divas-meta-val" style={{fontSize:16}}>July 1  -  11:55 PM PT</span>
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
              One room, 118 seats, after midnight. Book the front row if you want to be part of it.
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
                <span className="od-accent-blue">Four nights only.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              July 1, 2, 3 &amp; 4 — 118 seats a night over July 4th weekend.
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
            Group bundles seat your whole party together — 5&times; General for <strong>$250</strong> ($50/seat)
            or 5&times; VIP for <strong>$400</strong> ($80/seat). Built for bachelorettes, birthdays, and bro-trips.
          </div>

          {/* Tickets-coming-soon placeholder (new Eventbrite event not live yet) */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16,
            overflow: 'hidden',
            marginBottom: 20,
          }}>
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center',
              minHeight: 220, gap: 14, padding: '40px 32px',
            }}>
              <div style={{ fontSize: 32, lineHeight: 1 }} aria-hidden="true">🎟️</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>
                Tickets on sale soon
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 420, lineHeight: 1.6 }}>
                Four nights · July 1–4 · The Nerd at Neonopolis, Downtown Las Vegas.
                Follow along for the on-sale drop — and don't blink, it's 118 seats a night.
              </div>
              <a
                href="https://instagram.com/OnlyDwarfsOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="od-btn-primary"
                style={{ marginTop: 6 }}
              >
                Follow @OnlyDwarfsOfficial <span className="od-btn-arrow">-></span>
              </a>
            </div>
          </div>

          <div className="divas-tickets-cta">
            <div className="divas-summary-foot">
              On-sale date coming soon  -  Instant mobile tickets  -  21+ ID required at door
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
              <h2 className="divas-sec-title">The Nerd at Neonopolis.</h2>
              <p className="divas-venue-desc">
                Downtown Las Vegas, second floor of Neonopolis — right above the Fremont Street Experience.
                An intimate 118-seat room: every seat close to the stage, full bar, and the boldest
                late-night ticket downtown. This is a room, not an arena. Everybody's in it.
              </p>
              <div className="divas-venue-list">
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Address</span>
                  <span className="divas-venue-v">450 Fremont St #250, Las Vegas, NV 89101</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Capacity</span>
                  <span className="divas-venue-v">118 seats  -  one stage, every seat close</span>
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
          <div className="od-eyebrow">Opening night  -  July 1</div>
          <h2 className="divas-final-title">
            Don't be the person<br/>
            who <span className="od-accent-blue">missed it.</span>
          </h2>
          <p className="divas-final-sub">118 seats a night. Four nights only — July 1-4. A holiday weekend Vegas won't shut up about.</p>
          <div className="divas-final-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">
              See ticket tiers ->
            </a>
            <a href="intake.html" className="od-btn-outline od-btn-lg">Book the show private</a>
          </div>
        </div>
      </section>

    </div>
  );
};

window.DwarfDivasShow = DwarfDivasShow;
