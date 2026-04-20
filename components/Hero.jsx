// Hero.jsx — editorial hero with kinetic accent, live status strip, key stats
const Hero = () => {
  const [clock, setClock] = React.useState('');
  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = d.getUTCHours();
      const m = String(d.getUTCMinutes()).padStart(2, '0');
      setClock(`${String(h).padStart(2,'0')}:${m} UTC`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="od-hero-section" data-screen-label="Hero">
      <div className="od-hero-glow" aria-hidden="true" />
      <div className="od-hero-grid-overlay" aria-hidden="true" />

      {/* Main editorial block */}
      <div className="od-hero-content" style={{textAlign:'center',alignItems:'center'}}>
        <h1 className="od-hero-title">
          <span className="od-hero-the">The</span>
          <img
            src="assets/OnlyDwarfsLOGOText.svg"
            alt="OnlyDwarfs"
            className="od-hero-logo-img"
          />
          <span className="od-hero-bottom-text">You'll Ever<br/>Need.</span>
        </h1>

        <div className="od-hero-eyebrow" style={{justifyContent:'center', marginTop:'24px'}}>
          <span className="od-hero-eyebrow-pill">⚡ The #1 dwarf entertainment agency</span>
          <span className="od-hero-eyebrow-meta">Est. 2019 · 500+ bookings</span>
        </div>

        {/* Status strip — moved below title */}
        <div className="od-hero-strip" style={{position:'relative', margin:'20px auto 0', maxWidth:'520px'}}>
          <span className="od-hero-strip-item">
            <span className="od-hero-live-dot" /> Booking agents online
          </span>
          <span className="od-hero-strip-divider" />
          <span className="od-hero-strip-item od-hero-strip-muted">Las Vegas · Worldwide · {clock}</span>
          <span className="od-hero-strip-divider" />
          <span className="od-hero-strip-item od-hero-strip-muted">Quote in &lt; 24&nbsp;hrs</span>
        </div>

        <div className="od-hero-lower" style={{alignItems:'center'}}>
          <p className="od-hero-sub">
            Book world-class dwarf entertainers for any event. Bachelor parties, Vegas
            nightlife, birthdays, corporate &mdash; <strong>we show up and we deliver.</strong>
          </p>

          <div className="od-hero-actions" style={{justifyContent:'center'}}>
            <a href="intake.html" className="od-btn-primary">
              Book a performer <span className="od-btn-arrow">→</span>
            </a>
            <a href="#talent" className="od-btn-outline">See the roster</a>
          </div>

          <div className="od-hero-meta-row" style={{justifyContent:'center'}}>
            <span>From <strong>$600</strong></span>
            <span className="od-hero-meta-sep" />
            <span>No commitment</span>
            <span className="od-hero-meta-sep" />
            <span>We travel anywhere</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="od-hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="od-hero-scroll-line" />
      </div>
    </section>
  );
};

window.Hero = Hero;
