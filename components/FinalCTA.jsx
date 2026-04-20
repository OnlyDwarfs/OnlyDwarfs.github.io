// FinalCTA.jsx — huge closer
const FinalCTA = () => (
  <section className="od-final-cta" data-screen-label="Final CTA">
    <div className="od-final-cta-glow" aria-hidden="true" />
    <div className="od-inner od-text-center">
      <div className="od-eyebrow" style={{ marginBottom: 24 }}>Ready when you are</div>
      <h2 className="od-final-title">
        Book the only<br/>
        <span className="od-accent-blue">dwarfs worth paying for.</span>
      </h2>
      <p className="od-final-sub">
        Quote in 24 hours. No commitment. Real humans, real talent, real show.
      </p>
      <div className="od-final-actions">
        <a href="intake.html" className="od-btn-primary od-btn-lg">
          Request a quote →
        </a>
        <a href="mailto:bookings@onlydwarfs.com" className="od-btn-outline od-btn-lg">
          Email the team
        </a>
      </div>
      <div className="od-final-meta">
        <span>bookings@onlydwarfs.com</span>
        <span className="od-final-meta-dot" />
        <span>@onlydwarfs</span>
        <span className="od-final-meta-dot" />
        <span>+1&nbsp;(702)&nbsp;872-2970</span>
      </div>
    </div>
  </section>
);

window.FinalCTA = FinalCTA;
