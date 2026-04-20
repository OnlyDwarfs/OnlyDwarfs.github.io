// Showcase.jsx — DwarfDivas editorial block with countdown, ticket meter
const Showcase = () => {
  const showDate = new Date('2026-05-28T20:00:00-07:00');
  const [countdown, setCountdown] = React.useState({ d: 0, h: 0, m: 0 });
  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, showDate - now);
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      setCountdown({ d, h, m });
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="showcase" className="od-showcase" data-screen-label="Showcase">
        <div className="od-showcase-split">

          {/* LEFT — content */}
          <div className="od-showcase-left">
            <div className="od-showcase-eyebrow">🎭 Flagship · Live in Las Vegas</div>
            <img src="assets/Dwarfdivalogo.png" alt="DwarfDivas" className="od-showcase-logo" />
            <p className="od-showcase-tagline">Our house show. Top performers, one stage, two nights only.</p>

            <div className="od-showcase-countdown">
              <div className="od-cd-block">
                <span className="od-cd-num">{countdown.d}</span>
                <span className="od-cd-lbl">Days</span>
              </div>
              <div className="od-cd-sep" />
              <div className="od-cd-block">
                <span className="od-cd-num">{String(countdown.h).padStart(2, '0')}</span>
                <span className="od-cd-lbl">Hours</span>
              </div>
              <div className="od-cd-sep" />
              <div className="od-cd-block">
                <span className="od-cd-num">{String(countdown.m).padStart(2, '0')}</span>
                <span className="od-cd-lbl">Min</span>
              </div>
            </div>

            <div className="od-showcase-strip">
              <div className="od-showcase-strip-item"><span className="od-showcase-strip-lbl">Venue</span><span>Deja Vu Showgirls</span></div>
              <div className="od-showcase-strip-divider" />
              <div className="od-showcase-strip-item"><span className="od-showcase-strip-lbl">Dates</span><span>May 28 &amp; 29</span></div>
              <div className="od-showcase-strip-divider" />
              <div className="od-showcase-strip-item"><span className="od-showcase-strip-lbl">Doors</span><span>7:30 PM</span></div>
              <div className="od-showcase-strip-divider" />
              <div className="od-showcase-strip-item"><span className="od-showcase-strip-lbl">Ages</span><span>21+</span></div>
            </div>

            <div className="od-showcase-ctas">
              <a href="divas.html" className="od-btn-primary od-showcase-cta-big" style={{background:'#E8197A', boxShadow:'0 0 32px rgba(232,25,122,0.55)'}}>Get tickets →</a>
              <a href="intake.html" className="od-btn-outline od-showcase-cta-big">Book private</a>
            </div>
          </div>

          {/* RIGHT — framed banner */}
          <div className="od-showcase-frame">
            <img src="assets/dwarfdivas-hero.jpg" alt="DwarfDivas show" className="od-showcase-banner-img" />
          </div>

        </div>
    </section>
  );
};

window.Showcase = Showcase;
