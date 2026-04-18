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
      <div className="od-showcase-glow" aria-hidden="true" />
      <div className="od-inner">
        <div className="od-showcase-grid">
          <div className="od-showcase-left">
            <div className="od-eyebrow">🎭 Flagship · Live in Las Vegas</div>
            <h2 className="od-showcase-title">
              Dwarf<span className="od-accent-blue">Divas</span>
            </h2>
            <p className="od-showcase-tagline">Our house show. Top performers, one stage, two nights only.</p>
            <p className="od-showcase-desc">
              May 28 &amp; 29 at Deja Vu Showgirls. Comedy, music, attitude. The most
              unique night out in Las Vegas — and the only one you can also book privately.
            </p>
            <div className="od-showcase-ctas">
              <a href="divas.html" className="od-btn-primary">Get tickets →</a>
              <a href="intake.html" className="od-btn-outline">Book the show private</a>
            </div>
          </div>

          <div className="od-showcase-right">
            <div className="od-showcase-ticket">
              <div className="od-showcase-ticket-head">
                <span>Deja Vu Showgirls</span>
                <span className="od-showcase-ticket-date">Thu 28 · Fri 29</span>
              </div>
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
              <div className="od-showcase-meter">
                <div className="od-showcase-meter-label">
                  <span>Tickets remaining</span>
                  <span className="od-showcase-meter-value">62 / 180</span>
                </div>
                <div className="od-showcase-meter-track">
                  <div className="od-showcase-meter-fill" style={{ width: '65%' }} />
                </div>
                <div className="od-showcase-meter-hint">Selling faster than last run.</div>
              </div>
              <div className="od-showcase-rows">
                <div className="od-showcase-row"><span>Doors</span><span>7:30 PM</span></div>
                <div className="od-showcase-row"><span>Showtime</span><span>8:00 PM</span></div>
                <div className="od-showcase-row"><span>Ages</span><span>21+</span></div>
                <div className="od-showcase-row"><span>Dress</span><span>Upscale casual</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Showcase = Showcase;
