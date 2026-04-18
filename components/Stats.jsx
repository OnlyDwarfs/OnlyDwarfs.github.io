// Stats.jsx — editorial stats with oversized numbers + micro-copy
const Stats = () => {
  const stats = [
    { num: '500+',      lbl: 'Bookings shipped',  sub: 'since 2019' },
    { num: '24hr',      lbl: 'Quote turnaround',  sub: 'usually faster' },
    { num: '100%',      lbl: 'Show rate',         sub: 'on-time, every time' },
    { num: '∞',         lbl: 'Cities served',     sub: 'we travel for the right gig' },
  ];
  return (
    <section className="od-stats-section" data-screen-label="Stats">
      <div className="od-inner">
        <div className="od-stats-grid">
          {stats.map((s) => (
            <div key={s.lbl} className="od-stat-card">
              <span className="od-stat-num">{s.num}</span>
              <div className="od-stat-meta">
                <span className="od-stat-lbl">{s.lbl}</span>
                <span className="od-stat-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Stats = Stats;
