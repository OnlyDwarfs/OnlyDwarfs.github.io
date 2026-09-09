// DwarfDivasShow.jsx -- DwarfDivas info page
// Show facts updated 2026-09-09: The Nerd, Downtown Las Vegas. Opening weekend Sept 25-27 2026,
// then every Friday and Saturday. 8:00 PM show, doors 7:30.
// Pricing and per-night ticket links synced to the live Eventbrite series (parent 1997511870777).
const EB = 'https://www.eventbrite.com/e/dwarf-divas-midget-burlesque-show-downtown-las-vegas-21-tickets-';
const AFF = '?aff=Dwarfdivaswebsite';

// Every scheduled night, in order. The countdown and both date lists derive from
// this, so nothing goes stale when a show passes.
const SHOWS = [
  { iso: '2026-09-25T20:00:00-07:00', day: 'Fri', date: 'Sept 25', id: '2000246670637', opening: true },
  { iso: '2026-09-26T20:00:00-07:00', day: 'Sat', date: 'Sept 26', id: '2000246657598', opening: true },
  { iso: '2026-09-27T20:00:00-07:00', day: 'Sun', date: 'Sept 27', id: '2000246659604', opening: true },
  { iso: '2026-10-09T20:00:00-07:00', day: 'Fri', date: 'Oct 9',   id: '1997511907888' },
  { iso: '2026-10-10T20:00:00-07:00', day: 'Sat', date: 'Oct 10',  id: '1997511908891' },
  { iso: '2026-10-16T20:00:00-07:00', day: 'Fri', date: 'Oct 16',  id: '1997511911900' },
  { iso: '2026-10-17T20:00:00-07:00', day: 'Sat', date: 'Oct 17',  id: '1997511912903' },
  { iso: '2026-10-23T20:00:00-07:00', day: 'Fri', date: 'Oct 23',  id: '1997511915912' },
  { iso: '2026-10-24T20:00:00-07:00', day: 'Sat', date: 'Oct 24',  id: '1997511916915' },
].map((s) => ({ ...s, when: new Date(s.iso), url: EB + s.id + AFF }));

const TICKETS_URL = SHOWS[0].url;

const CD = ({ num, lbl }) => (
  <div className="divas-cd-block">
    <span className="divas-cd-num">{num}</span>
    <span className="divas-cd-lbl">{lbl}</span>
  </div>
);

const DwarfDivasShow = () => {
  const [countdown, setCountdown] = React.useState({ d: 0, h: 0, m: 0, s: 0 });
  const [next, setNext] = React.useState(() => SHOWS.find((x) => x.when > new Date()) || null);

  // Counts down to the next scheduled night; rolls forward on its own as shows pass.
  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const upcomingShow = SHOWS.find((x) => x.when > now) || null;
      setNext(upcomingShow);
      const diff = upcomingShow ? Math.max(0, upcomingShow.when - now) : 0;
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

  // Synced to the live Eventbrite listing 2026-09-09
  const tiers = [
    { name: 'General Admission',price: '$40',  note: 'Your seat to the boldest show downtown' },
    { name: 'VIP Seating',      price: '$70',  note: 'Best seats in the house, closest to the stage' },
    { name: 'Stage Experience', price: '$90',  note: "You are in the show. An up-close, on-stage moment \u2014 extremely limited" },
    { name: 'VIP Booth',        price: '$700', note: 'Your own booth for the night, for a group that wants the best view in the room' },
  ];

  const now = new Date();
  const dates = SHOWS.filter((x) => x.opening && x.when > now);
  const upcoming = SHOWS.filter((x) => !x.opening && x.when > now);

  return (
    <div className="divas">
      {/* HERO */}
      <section className="divas-hero" data-screen-label="Show Hero">
        <div className="divas-hero-noise" aria-hidden="true" />
        <div className="divas-hero-glow" aria-hidden="true" />

        <div className="divas-hero-poster">
          <picture>
            <source srcSet="assets/dwarfdivas-hero-2026.webp" type="image/webp" />
            <img
              src="assets/dwarfdivas-hero-2026.jpg"
              alt="A Dwarf Divas performer in a pink sequinned costume and feathered headdress blowing a kiss, framed by showgirls, beside the Dwarf Divas Midget Burlesque marquee logo"
              width="2160" height="1080"
              fetchPriority="high" decoding="async"
            />
          </picture>
        </div>

        <div className="divas-hero-inner">
          <div className="divas-hero-tags">
            <span className="divas-tag">Flagship show</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Downtown Las Vegas</span>
            <span className="divas-tag-sep" />
            <span className="divas-tag-m">Fridays &amp; Saturdays</span>
          </div>

          <h1 className="divas-h1">
            The only all-dwarf burlesque revue in Las&nbsp;Vegas.
          </h1>

          <div className="divas-hero-meta">
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Venue</span>
              <span className="divas-meta-val">The Nerd</span>
              <span className="divas-meta-sub">450 Fremont St #250 · Downtown LV</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Dates</span>
              <span className="divas-meta-val">Sept 25-27, 2026</span>
              <span className="divas-meta-sub">Opening weekend · then every Fri &amp; Sat</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Showtime</span>
              <span className="divas-meta-val">8:00 PM</span>
              <span className="divas-meta-sub">Doors 7:30 PM · Pacific time</span>
            </div>
            <div className="divas-hero-meta-col">
              <span className="divas-meta-lbl">Ages</span>
              <span className="divas-meta-val">21+ only</span>
              <span className="divas-meta-sub">Valid photo ID required</span>
            </div>
          </div>

          <div className="divas-hero-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">
              Tickets from $40 <span className="od-btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#venue" className="od-btn-outline od-btn-lg">The venue</a>
          </div>
        </div>

        {/* Countdown */}
        <div className="divas-countdown">
          <p className="od-sr-only">
            {next ? `Next show ${next.day} ${next.date} at 8:00 PM Pacific.` : 'Dates for the next run are announced soon.'}
          </p>
          <div className="divas-countdown-lbl" aria-hidden="true">
            <span className="od-hero-live-dot" /> {next && next.opening ? 'Opening night in' : 'Next show in'}
          </div>
          <div className="divas-countdown-grid" aria-hidden="true">
            <CD num={countdown.d} lbl="Days" />
            <span className="divas-cd-colon">:</span>
            <CD num={String(countdown.h).padStart(2,'0')} lbl="Hrs" />
            <span className="divas-cd-colon">:</span>
            <CD num={String(countdown.m).padStart(2,'0')} lbl="Min" />
            <span className="divas-cd-colon">:</span>
            <CD num={String(countdown.s).padStart(2,'0')} lbl="Sec" />
          </div>
          <div className="divas-countdown-end" aria-hidden="true">
            <span className="divas-meta-lbl">{next && next.opening ? 'First night' : 'Next night'}</span>
            <span className="divas-meta-val divas-countdown-endval">
              {next ? `${next.date} · 8:00 PM PT` : 'Dates soon'}
            </span>
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
                <span className="od-accent-blue">Every Fri &amp; Sat.</span>
              </h2>
            </div>
            <p className="divas-sec-sub">
              Opening weekend September 25, 26 &amp; 27, then every Friday and Saturday at The Nerd.
              118 seats. When a night's gone, it's gone.
            </p>
          </div>

          <div className="divas-tier-info-grid">
            {tiers.map((t) => (
              <div key={t.name} className="divas-tier-info-card">
                <div className="divas-tier-info-top">
                  <span className="divas-tier-name">{t.name}</span>
                  <span className="divas-tier-price">{t.price}</span>
                </div>
                <p className="divas-tier-note">{t.note}</p>
              </div>
            ))}
          </div>

          <p className="divas-group-note">
            <strong>Bringing a crew?</strong>{' '}
            Group bundles seat your whole party together &mdash; 5&times; General Admission for <strong>$175</strong> ($35 a seat)
            or the 5&times; VIP bundle for <strong>$300</strong> ($60 a seat). Built for bachelorettes, birthdays and bro-trips.
          </p>

          <div className="divas-picker">
            <h3 className="divas-picker-lbl">Opening weekend &mdash; secure checkout on Eventbrite</h3>
            <div className="divas-picker-grid">
              {dates.map((d) => (
                <a
                  key={d.date}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="od-btn-primary divas-picker-btn"
                >
                  <span className="divas-picker-day">{d.day}</span>
                  <span className="divas-picker-date">{d.date}</span>
                  <span className="divas-picker-cta">
                    Get tickets<span aria-hidden="true"> →</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="divas-picker-foot">
              Every show 8:00 PM · doors 7:30 PM · The Nerd, Downtown Las Vegas · 21+ · ID required
              <br />
              Secure checkout on Eventbrite · instant mobile tickets
            </p>

            {upcoming.length > 0 && (
              <div className="divas-upcoming">
                <h3 className="divas-picker-lbl">Coming up &mdash; every Friday &amp; Saturday</h3>
                <div className="divas-upcoming-row">
                  {upcoming.map((u) => (
                    <a
                      key={u.date}
                      href={u.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="od-btn-outline divas-upcoming-btn"
                    >
                      {u.day} {u.date}
                    </a>
                  ))}
                </div>
              </div>
            )}
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
              <div className="divas-venue-list">
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Address</span>
                  <span className="divas-venue-v">450 Fremont St #250, Las Vegas, NV 89101</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">The room</span>
                  <span className="divas-venue-v">Our own stage · every seat close to it</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Getting there</span>
                  <span className="divas-venue-v">Neonopolis parking garage · rideshare recommended</span>
                </div>
                <div className="divas-venue-row">
                  <span className="divas-venue-k">Ages</span>
                  <span className="divas-venue-v">21+ only · valid photo ID at door</span>
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
                <div className="divas-map-attr">Downtown Las Vegas · Fremont St</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="divas-final" data-screen-label="Final CTA">
        <div className="divas-final-glow" aria-hidden="true"/>
        <div className="divas-inner divas-final-inner">
          <div className="od-eyebrow">Opening night · Sept 25</div>
          <h2 className="divas-final-title">
            Don't be the person<br/>
            who <span className="od-accent-blue">missed it.</span>
          </h2>
          <p className="divas-final-sub">Opening weekend September 25, 26 &amp; 27, then every Friday and Saturday. A room Vegas won't shut up about.</p>
          <div className="divas-final-actions">
            <a href="#tickets" className="od-btn-primary od-btn-lg">
              Get tickets <span className="od-btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="intake.html" className="od-btn-outline od-btn-lg">Book the show private</a>
          </div>
        </div>
      </section>

    </div>
  );
};

window.DwarfDivasShow = DwarfDivasShow;
