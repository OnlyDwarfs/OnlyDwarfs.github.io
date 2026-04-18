// StepsRow.jsx — horizontal process timeline with connecting line
const StepsRow = () => {
  const steps = [
    { n: '01', t: 'Tell us the vibe', d: 'Fill out a 2-minute form — event, date, city, headcount, expectations. The weirder the better.', time: '2 min' },
    { n: '02', t: 'We cast the talent', d: 'Your booking agent replies with a hand-picked short list + custom quote. No bots. Real humans.', time: '< 24 hrs' },
    { n: '03', t: 'We handle the rest', d: 'Contracts, travel, riders, coordination. You just show up and enjoy the show.', time: 'Showtime' },
  ];
  return (
    <section id="process" className="od-section od-section-dark" data-screen-label="Process">
      <div className="od-inner">
        <div className="od-section-head">
          <div>
            <div className="od-eyebrow">The process</div>
            <h2 className="od-sec-title">Three steps.<br/>Then you're <span className="od-accent-blue">booked.</span></h2>
          </div>
          <p className="od-sec-sub">
            We keep it simple because we've done this five hundred times. Our agents have
            booked every kind of event you can imagine and most that you can't.
          </p>
        </div>

        <div className="od-timeline">
          <div className="od-timeline-line" aria-hidden="true" />
          {steps.map((s) => (
            <div key={s.n} className="od-timeline-step">
              <div className="od-timeline-marker">
                <span className="od-timeline-num">{s.n}</span>
              </div>
              <div className="od-timeline-body">
                <div className="od-timeline-time">{s.time}</div>
                <div className="od-timeline-title">{s.t}</div>
                <div className="od-timeline-desc">{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="od-text-center" style={{marginTop:'2.5rem'}}>
          <a href="intake.html" className="od-btn-primary">
            Start the process <span className="od-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

window.StepsRow = StepsRow;