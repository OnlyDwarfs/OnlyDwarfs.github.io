// DwarfDivasShow.jsx -- DwarfDivas show page (redesign 2026-10-25)
// Show list below drives the countdown, the themed-weekend block and every ticket link,
// so the page rolls forward on its own as nights pass.
// Pricing and per-night ticket links synced to the live Eventbrite series (parent 1997511870777).
const EB = 'https://www.eventbrite.com/e/dwarf-divas-midget-burlesque-show-downtown-las-vegas-21-tickets-';
const AFF = '?aff=Dwarfdivaswebsite';

// Every scheduled night, in order. The countdown and both date lists derive from
// this, so nothing goes stale when a show passes.
const SHOWS = [
  { iso: '2026-10-09T20:00:00-07:00', day: 'Fri', date: 'Oct 9',   id: '1997511907888', opening: true },
  { iso: '2026-10-10T20:00:00-07:00', day: 'Sat', date: 'Oct 10',  id: '1997511908891', opening: true },
  { iso: '2026-10-16T20:00:00-07:00', day: 'Fri', date: 'Oct 16',  id: '1997511911900' },
  { iso: '2026-10-17T20:00:00-07:00', day: 'Sat', date: 'Oct 17',  id: '1997511912903' },
  { iso: '2026-10-23T20:00:00-07:00', day: 'Fri', date: 'Oct 23',  id: '1997511915912' },
  { iso: '2026-10-24T20:00:00-07:00', day: 'Sat', date: 'Oct 24',  id: '1997511916915' },
  { iso: '2026-10-30T20:00:00-07:00', day: 'Fri', date: 'Oct 30',  id: '2001712315420' },
  { iso: '2026-10-31T20:00:00-07:00', day: 'Sat', date: 'Oct 31',  id: '2001712314417' },
  { iso: '2026-11-06T20:00:00-08:00', day: 'Fri', date: 'Nov 6',   id: '2001712323444' },
  { iso: '2026-11-07T20:00:00-08:00', day: 'Sat', date: 'Nov 7',   id: '2001712324447' },
  { iso: '2026-11-13T20:00:00-08:00', day: 'Fri', date: 'Nov 13',  id: '2001712325450' },
  { iso: '2026-11-14T20:00:00-08:00', day: 'Sat', date: 'Nov 14',  id: '2001712326453' },
  { iso: '2026-11-20T20:00:00-08:00', day: 'Fri', date: 'Nov 20',  id: '2001712327456' },
  { iso: '2026-11-21T20:00:00-08:00', day: 'Sat', date: 'Nov 21',  id: '2001712328459' },
  { iso: '2026-11-27T20:00:00-08:00', day: 'Fri', date: 'Nov 27',  id: '2001712329462' },
  { iso: '2026-11-28T20:00:00-08:00', day: 'Sat', date: 'Nov 28',  id: '2001712330465' },
  { iso: '2026-12-04T20:00:00-08:00', day: 'Fri', date: 'Dec 4',   id: '2001712331468' },
  { iso: '2026-12-05T20:00:00-08:00', day: 'Sat', date: 'Dec 5',   id: '2001712332471' },
  { iso: '2026-12-11T20:00:00-08:00', day: 'Fri', date: 'Dec 11',  id: '2001712333474' },
  { iso: '2026-12-12T20:00:00-08:00', day: 'Sat', date: 'Dec 12',  id: '2001712334477' },
].map((s) => ({ ...s, when: new Date(s.iso), url: EB + s.id + AFF }));

// Always point the main ticket button at the next show that hasn't happened yet.
const NEXT_SHOW = SHOWS.find((x) => x.when > new Date()) || SHOWS[SHOWS.length - 1];
const TICKETS_URL = NEXT_SHOW.url;

// Themed weekends. The page features whichever one is next and drops it once its
// Saturday has passed, so nothing goes stale. Add new ones here.
const WEEKENDS = [
  { name: 'Fun Sized', kicker: 'Halloween weekend', img: 'fun-sized', fit: 'poster',
    blurb: 'Our Halloween weekend. Come in costume. Halloween night always goes first.',
    nights: [{ date: 'Oct 30', label: 'Friday' }, { date: 'Oct 31', label: 'Saturday · Halloween' }],
    alt: 'FUN SIZED poster: the Dwarf Divas burst out of candy wrappers, Fri and Sat Oct 30-31 at The Nerd' },
  { name: 'High Rollers', kicker: 'Vegas weekend', img: 'high-rollers', fit: 'square',
    blurb: '5ft & under get in free.',
    nights: [{ date: 'Nov 6', label: 'Friday' }, { date: 'Nov 7', label: 'Saturday' }],
    alt: 'HIGH ROLLERS poster for the Dwarf Divas, Nov 6-7 at The Nerd' },
];

const CAST = [
  { img: 'cast-christy', alt: 'Meet Christy McGinity, 3 foot 11, your host' },
  { img: 'cast-chika',   alt: 'Meet Chika Chikana, 2 foot 10' },
  { img: 'cast-firefly', alt: 'Meet Lil Miss Firefly, 3 foot 0' },
  { img: 'cast-moni',    alt: 'Meet Mini Moni, 4 foot 7' },
  { img: 'cast-viki',    alt: 'Meet Miss Viki, 3 foot 9' },
];

const GALLERY = [
  { img: 'ringmaster', cap: 'The ringmaster runs the night', alt: 'The ringmaster host on stage with the cast' },
  { img: 'showgirl',   cap: 'Showgirls, feathers and sequins', alt: 'A showgirl in a feathered headdress on the red-curtain stage' },
  { img: 'pirates',    cap: 'Pirate night', alt: 'Two performers in pirate costumes' },
  { img: 'front-row',  cap: 'The front row is part of the act', alt: 'A performer working the crowd in the front row' },
];

const Pic = ({ name, alt, className, eager }) => (
  <picture>
    <source srcSet={`assets/divas/${name}.webp`} type="image/webp" />
    <img src={`assets/divas/${name}.jpg`} alt={alt} className={className}
      loading={eager ? 'eager' : 'lazy'} decoding="async" {...(eager ? { fetchpriority: "high" } : {})} />
  </picture>
);

const showFor = (date) => SHOWS.find((s) => s.date === date);
const pad = (n) => String(n).padStart(2, '0');

const DwarfDivasShow = () => {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const future = SHOWS.filter((x) => x.when > now);
  const next = future[0] || null;
  const diff = next ? Math.max(0, next.when - now) : 0;
  const cd = {
    d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000),
  };

  const liveWeekends = WEEKENDS.filter((w) => {
    const last = showFor(w.nights[w.nights.length - 1].date);
    return last && last.when > now;
  });
  const wk = liveWeekends[0];
  const wkNext = liveWeekends[1];

  const tiers = [
    { name: 'General Admission', price: '$40',  note: 'Your seat at the loudest show downtown.' },
    { name: 'VIP Seating',       price: '$70',  note: 'Closest seats to the stage. Expect to be part of the show.', hot: true },
    { name: 'VIP Booth',         price: '$500', note: 'Your own booth for the night, for the group that wants the best view.' },
  ];

  return (
    <div className="dd">
      {/* HERO */}
      <section className="dd-hero" aria-label="Dwarf Divas">
        <div className="dd-hero-img">
          <Pic name="hero" eager className="dd-parallax"
            alt="A Dwarf Divas performer in pink sequins and a feathered headdress blowing a kiss, framed by showgirls' legs, beside the Dwarf Divas marquee logo" />
        </div>
        <div className="dd-hero-card">
          <span className="dd-kicker dd-kicker-dark">Live in downtown Vegas</span>
          <span className="dd-hero-card-title">Fridays &amp; Saturdays</span>
          <span className="dd-hero-card-meta">8 PM · The Nerd Bar · Fremont St</span>
          <a className="dd-pill dd-pill-pink" href="#tickets">Get tickets</a>
        </div>
        <div className="dd-hero-fade" aria-hidden="true" />
      </section>

      {/* ABOUT + REEL */}
      <section className="dd-about dd-wrap" aria-label="About the show">
        <div className="dd-about-copy dd-hero-out">
          <span className="dd-kicker">Comedy burlesque · Downtown Las Vegas</span>
          <h1 className="dd-h1">The only all-dwarf burlesque show in Vegas.</h1>
          <p className="dd-gold">Fridays &amp; Saturdays · The Nerd Bar · Fremont Street</p>
          <p className="dd-lede">Showgirls, a ringmaster host, pirate night and a front row that ends up in the act. 21+, two shows every weekend.</p>
          <div className="dd-cta-row">
            <a className="dd-pill" href="#tickets">Get tickets</a>
            <div className="dd-next">
              <span className="dd-label">{next ? 'Next show in' : 'Next show'}</span>
              {next ? (
                <span className="dd-countdown" aria-hidden="true">
                  {cd.d}<small>d</small> {pad(cd.h)}<small>h</small> {pad(cd.m)}<small>m</small> {pad(cd.s)}<small>s</small>
                </span>
              ) : <span className="dd-countdown">Dates soon</span>}
              <span className="od-sr-only">{next ? `Next show ${next.day} ${next.date} at 8:00 PM Pacific.` : 'Dates for the next run are announced soon.'}</span>
              {next && <span className="dd-next-date">{next.day} {next.date} · 8:00 PM</span>}
            </div>
          </div>
          <div className="dd-chips">
            <span>Doors 7 PM · Show 8 PM</span><span>From $40</span><span>21+ · photo ID</span>
          </div>
        </div>
        <div className="dd-reel dd-rv-r">
          <div className="dd-bulbs" aria-hidden="true" />
          <div className="dd-reel-frame">
            <video src="assets/divas/reel.mp4" poster="assets/divas/reel-poster.jpg" autoPlay muted loop playsInline
              preload="metadata" aria-label="Clips from a Dwarf Divas show at The Nerd Bar" />
          </div>
          <div className="dd-bulbs" aria-hidden="true" />
        </div>
      </section>

      <div className="dd-bulbs" aria-hidden="true" />

      {/* THEMED WEEKEND */}
      {wk && (
        <section className="dd-weekend dd-wrap" aria-labelledby="dd-wk-title">
          <div className={`dd-weekend-art dd-rv-l dd-fit-${wk.fit}`}>
            <Pic name={wk.img} alt={wk.alt} className="dd-lift" />
          </div>
          <div className="dd-weekend-copy dd-rv">
            <span className="dd-kicker dd-kicker-lg">{wk.kicker}</span>
            <h2 id="dd-wk-title" className="dd-h2 dd-h2-xl">{wk.name}</h2>
            <p className="dd-gold">{wk.nights.map((n) => { const s = showFor(n.date); return s ? `${s.day} ${n.date}` : n.date; }).join(' & ')} · 8 PM</p>
            <p className="dd-lede">{wk.blurb}</p>
            <div className="dd-nights">
              {wk.nights.map((n) => {
                const s = showFor(n.date);
                return (
                  <a key={n.date} className="dd-night dd-lift" href={s ? s.url : '#tickets'} target="_blank" rel="noopener noreferrer">
                    <span className="dd-night-lbl">{n.label}</span>
                    <span className="dd-night-date">{n.date}</span>
                    <span className="dd-night-cta">Get tickets →</span>
                  </a>
                );
              })}
            </div>
            {wkNext && (
              <a className="dd-teaser dd-lift" href={showFor(wkNext.nights[0].date) ? showFor(wkNext.nights[0].date).url : '#tickets'} target="_blank" rel="noopener noreferrer">
                <Pic name={wkNext.img} alt="" />
                <span className="dd-teaser-copy">
                  <span className="dd-label">Next themed weekend</span>
                  <span className="dd-teaser-title">{wkNext.name} · {wkNext.nights.map((n) => n.date).join('–').replace(/–(\w+) /, '–')}</span>
                  <span className="dd-teaser-sub">{wkNext.blurb}</span>
                </span>
              </a>
            )}
          </div>
        </section>
      )}

      {/* CAST */}
      <section className="dd-band" id="cast" aria-labelledby="dd-cast-title">
        <div className="dd-wrap dd-stack">
          <div className="dd-head dd-rv">
            <h2 id="dd-cast-title" className="dd-h2">Meet the Divas</h2>
            <p className="dd-muted">Hosted by Christy McGinity</p>
          </div>
          <div className="dd-cast dd-stagger">
            {CAST.map((c) => <Pic key={c.img} name={c.img} alt={c.alt} className="dd-lift" />)}
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section className="dd-tickets" id="tickets" aria-labelledby="dd-tk-title">
        <div className="dd-wrap dd-stack">
          <div className="dd-head dd-rv">
            <h2 id="dd-tk-title" className="dd-h2">Tickets from $40</h2>
            <p className="dd-muted">Secure checkout on Eventbrite · mobile tickets</p>
          </div>
          <div className="dd-tiers dd-stagger">
            {tiers.map((t) => (
              <div key={t.name} className={`dd-tier dd-lift${t.hot ? ' dd-tier-hot' : ''}`}>
                <div className="dd-tier-top"><span className="dd-tier-name">{t.name}</span><span className="dd-tier-price">{t.price}</span></div>
                <p className="dd-muted">{t.note}</p>
              </div>
            ))}
          </div>
          <p className="dd-crew dd-rv"><strong>Bringing a crew?</strong> <span className="dd-muted">5 general admission for $150, or 5 VIP for $300. Built for bachelorettes, birthdays and bro-trips.</span></p>
          <div className="dd-rv">
            <span className="dd-label">Pick your night</span>
            <div className="dd-dates">
              {future.map((s) => (
                <a key={s.iso} className="dd-date" href={s.url} target="_blank" rel="noopener noreferrer">{s.day} {s.date}</a>
              ))}
              {future.length === 0 && <span className="dd-muted">New dates announced soon.</span>}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="dd-wrap dd-stack dd-gallery-sec" id="show" aria-labelledby="dd-show-title">
        <h2 id="dd-show-title" className="dd-h2 dd-rv">What you're in for</h2>
        <div className="dd-gallery">
          {GALLERY.map((g) => (
            <figure key={g.img} className="dd-rv">
              <div className="dd-zoomwrap"><Pic name={g.img} alt={g.alt} className="dd-zoom" /></div>
              <figcaption>{g.cap}</figcaption>
            </figure>
          ))}
        </div>
        <figure className="dd-rv dd-wide">
          <div className="dd-zoomwrap"><Pic name="after-show" alt="The Divas in feathered headdresses posing with guests after the show" className="dd-zoom" /></div>
          <figcaption>Stick around after. The Divas take photos.</figcaption>
        </figure>
      </section>

      {/* VENUE */}
      <section className="dd-band" id="venue" aria-labelledby="dd-venue-title">
        <div className="dd-wrap dd-venue">
          <div className="dd-venue-copy dd-rv-l">
            <img src="assets/divas/nerd-logo.png" alt="The Nerd" className="dd-nerd" loading="lazy" />
            <h2 id="dd-venue-title" className="dd-h2">Upstairs at The Nerd Bar</h2>
            <p className="dd-gold">450 Fremont St #250 · Neonopolis · Downtown Las Vegas</p>
            <div className="dd-venue-grid">
              <div><span className="dd-label">Getting there</span><p>Inside Neonopolis on Fremont. Take the escalator up; park in the Neonopolis garage or rideshare.</p></div>
              <div><span className="dd-label">Before the show</span><p>Bowling, arcade and skee-ball in the same venue</p></div>
              <div><span className="dd-label">Ages</span><p>21+ only, valid photo ID at the door</p></div>
              <div><span className="dd-label">Times</span><p>Doors 7 PM · show 8 PM, Fridays &amp; Saturdays</p></div>
            </div>
          </div>
          <div className="dd-venue-pics dd-rv-r">
            <div className="dd-zoomwrap dd-span2"><Pic name="neonopolis" alt="Inside Neonopolis, the escalator up to The Nerd" className="dd-zoom" /></div>
            <div className="dd-zoomwrap"><Pic name="lanes" alt="The bowling lanes at The Nerd" className="dd-zoom" /></div>
            <div className="dd-zoomwrap"><Pic name="arcade" alt="Neon arcade machines at The Nerd" className="dd-zoom" /></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dd-burst" aria-labelledby="dd-cta-title">
        <div className="dd-burst-inner dd-rv">
          <h2 id="dd-cta-title" className="dd-burst-title">See it before your friends do</h2>
          <p className="dd-gold dd-gold-lg">Fridays &amp; Saturdays</p>
          <a className="dd-pill dd-pill-lg" href="#tickets">Get tickets</a>
          <p className="dd-burst-meta">Doors 7PM · Show 8PM · The Nerd · Fremont Street</p>
          <p className="dd-burst-private">Want the Divas at your event? <a href="intake.html">Book a private show</a></p>
        </div>
      </section>
    </div>
  );
};

window.DwarfDivasShow = DwarfDivasShow;
