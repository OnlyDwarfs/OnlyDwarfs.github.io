// DwarfDivasShow.jsx -- DwarfDivas info page
const OPENING_NIGHT  = new Date('2026-05-28T20:00:00-07:00');
const EVENTBRITE_URL = 'https://www.eventbrite.com/e/1984199650568';

const CD = ({ num, lbl }) => (
  <div className="divas-cd-block">
    <span className="divas-cd-num">{num}</span>
    <span className="divas-cd-lbl">{lbl}</span>
  </div>
);

const DwarfDivasShow = () => {
  const [countdown, setCountdown] = React.useState({ d: 0, h: 0, m: 0, s: 0 });

  React.useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, OPENING_NIGHT - new Date());
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
    { n: '01', t: 'The Opening',     d: 'Big band entrance. Full cast on stage. Sets the tone in 90 seconds.' },
    { n: '02', t: 'Solo Cabaret',    d: 'Three signature performers. Burlesque routines you will not see anywhere else in Vegas.' },
    { n: '03', t: 'Comedy Break',    d: 'The MC roasts the front row. Nobody is safe. Do not sit in row one if you are shy.' },
    { n: '04', t: 'The Main Number', d: 'The full cast returns for a 14-minute showstopper. Costumes, pyro, the works.' },
    { n: '05', t: 'Encore',          d: 'Audience-request finale. The band takes bets on which number they have to pull off live.' },
  ];

  const tiers = [
    { name: 'Rail',      price: '$65',  note: 'Standing  -  Main floor  -  21+ bar access' },
    { name: 'Seated',    price: '$95',  note: 'Reserved seat  -  Cocktail service  -  Priority entry' },
    { name: 'Premium',   price: '$145', note: 'Front-row booth  -  Bottle service  -  Meet-and-greet' },
    { name: 'VIP Stage', price: '$295', note: 'Stage-side booth  -  2 bottles  -  Backstage tour  -  Photo with cast' },
  ];

  return (
    <div className="divas">
      {/* HERO */}
      <section className="divas-hero" data-screen-label="Show Hero">
        <div className="divas-hero-noise" aria-hidden="true" />
        <div className="divas-hero-glow" aria-hidden="true" />

        <div className="divas-hero-inner">
          {/* Poster image */}
          <div className="divas-hero-poster">
            <img src="assets/dwarfdivas-hero.jpg" alt="DwarfDivas -- Live at Deja Vu Showgirls, May 28-29" />
          </div>

          <div className="divas-hero-tags">
            <span className="divas-tag">(show) Flagship Show</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Las Vegas Residency</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Opens May 28, 2026</span>
          </div>

          <div className="divas-brand-logo">
            <img src="assets/Dwarfdivalogo.png" alt="DwarfDivas" />
          </div>

          <div className="divas-hero-stars" aria-hidden="true">
            <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
          </div>

          <p className="divas-hero-sub">
            An all-dwarf burlesque &amp; variety show. Five acts. One band. The front row will never recover.{' '}
            <strong>Las Vegas' most unreasonable night out.</strong>
          </p>

          <div className="divas-hero-meta">
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Venue</span>
              <span className="divas-meta-val">Deja Vu Showgirls</span>
              <span className="divas-meta-sub">3247 Sammy Davis Jr. Dr., Las Vegas</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Opening</span>
              <span className="divas-meta-val">May 28-29, 2026</span>
              <span className="divas-meta-sub">Doors 7:30  -  Curtain 8:00</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Residency</span>
              <span className="divas-meta-val">Every Thu &amp; Fri</span>
              <span className="divas-meta-sub">Starting June 4  -  21+ only</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Run Time</span>
              <span className="divas-meta-val">85 minutes</span>
              <span className="divas-meta-sub">No intermission  -  One encore</span>
            </div>
          </div>

          <div className="divas-hero-actions">
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="od-btn-primary od-btn-lg">
              Get tickets from $65 <span className="od-btn-arrow">-></span>
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
            <span className="divas-meta-lbl" style={{opacity:0.8}}>Doors</span>
            <span className="divas-meta-val" style={{fontSize:16}}>May 28  -  7:30 PM PT</span>
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
            '"An instant residency classic." -- Showbiz LV',
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
                Five acts. One band.<br/>
                <span className="od-accent-blue">Zero apologies.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              85 minutes, no intermission. Book the front row if you want to be part of it.
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
                From $65.<br/>
                <span className="od-accent-blue">On Eventbrite.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              May 28 &amp; 29 are the pilot nights. Residency dates open after the run.
              All tickets sold through Eventbrite -- secure checkout, instant mobile delivery.
            </p>
          </div>

          {/* Tier info -- read only */}
          <div className="divas-tier-info-grid">
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

          <div className="divas-tickets-cta">
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="od-btn-primary od-btn-lg">
              Get tickets on Eventbrite <span className="od-btn-arrow">-></span>
            </a>
            <div className="divas-summary-foot">
              Secure checkout  -  Instant mobile tickets  -  21+ ID required at door
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
              <h2 className="divas-sec-title">Deja Vu Showgirls.</h2>
              <p className="divas-venue-desc">
                One of the most storied cabaret venues in Las Vegas. 320-capacity black-box theater,
                full bar, floor seating and premium booths. Five minutes from the Strip, ten minutes
                from Harry Reid International.
              </p>
              <div className="divas-venue-list">
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Address</span>
                  <span className="divas-venue-v">3247 Sammy Davis Jr. Dr., Las Vegas, NV 89109</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Capacity</span>
                  <span className="divas-venue-v">320  -  Standing + seated</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Parking</span>
                  <span className="divas-venue-v">Complimentary valet after 7 PM</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Accessibility</span>
                  <span className="divas-venue-v">Step-free entry  -  ADA seating available</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Ages</span>
                  <span className="divas-venue-v">21+ only  -  Valid photo ID at door</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Dress code</span>
                  <span className="divas-venue-v">Upscale casual  -  No athletic wear</span>
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
                    <div className="divas-map-pin-name">Deja Vu Showgirls</div>
                    <div className="divas-map-pin-addr">3247 Sammy Davis Jr. Dr.</div>
                  </div>
                  <div className="divas-map-pin-pulse" />
                </div>
                <div className="divas-map-attr">Las Vegas  -  Industrial District</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="divas-final" data-screen-label="Final CTA">
        <div className="divas-final-glow" aria-hidden="true"/>
        <div className="divas-inner divas-final-inner">
          <div className="od-eyebrow">Opening night  -  May 28</div>
          <h2 className="divas-final-title">
            Don't be the person<br/>
            who <span className="od-accent-blue">missed it.</span>
          </h2>
          <p className="divas-final-sub">320 seats. Two nights to launch. A year of Vegas talk to follow.</p>
          <div className="divas-final-actions">
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="od-btn-primary od-btn-lg">
              Get tickets now ->
            </a>
            <a href="intake.html" className="od-btn-outline od-btn-lg">Book the show private</a>
          </div>
        </div>
      </section>

    </div>
  );
};

window.DwarfDivasShow = DwarfDivasShow;
