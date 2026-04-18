// ServicesGrid.jsx — editorial numbered services with oversized type
const ServicesGrid = () => {
  const services = [
    { n: '01', icon: '🎉', name: 'Bachelor & Bachelorette', desc: "The party nobody forgets. Dwarf performers that bring the energy, the chaos, and the stories everyone's still telling months later.", tags: ['Vegas', 'Worldwide', 'All night'] },
    { n: '02', icon: '🎂', name: 'Birthdays & Milestones',  desc: 'Make the birthday person feel like royalty. Custom entrances, roasts, performances — whatever the moment calls for.', tags: ['Custom', 'Roast', 'Private'] },
    { n: '03', icon: '🏢', name: 'Corporate & Brand',       desc: 'Branded performances, product launches, trade shows — entertainment that gets people talking long after the event.', tags: ['Pro', 'Insured', 'On-brand'] },
    { n: '04', icon: '🎰', name: 'Vegas Nightlife',          desc: 'Clubs, pool parties, bar crawls, VIP bottle service — we know the scene and we always show up ready.', tags: ['Clubs', 'Pool', 'VIP'] },
    { n: '05', icon: '🎬', name: 'Film, TV & Commercial',    desc: 'Experienced performers for TV, film, commercials, and branded content. Professional on set, every single time.', tags: ['SAG', 'Talent', 'Crew-friendly'] },
    { n: '06', icon: '🎭', name: 'Custom & Weird',           desc: 'Themed parties, private events, promotions, one-of-a-kind experiences. If you can dream it up, we can book it.', tags: ['Themed', 'Bespoke', 'Unusual'] },
  ];
  return (
    <section id="services" className="od-section" data-screen-label="Services">
      <div className="od-inner">
        <div className="od-section-head">
          <div>
            <div className="od-eyebrow">What we do</div>
            <h2 className="od-sec-title">Every event.<br/><span className="od-accent-blue">Any vibe.</span></h2>
          </div>
          <p className="od-sec-sub">
            From Vegas pool parties to Fortune&nbsp;500 events — if you need unforgettable
            entertainment, we have the talent for it. Six categories, infinite variations.
          </p>
        </div>

        <div className="od-svc-grid">
          {services.map((s) => (
            <a href="../intake/index.html" key={s.n} className="od-svc-card">
              <div className="od-svc-top">
                <span className="od-svc-num">{s.n}</span>
                <span className="od-svc-icon">{s.icon}</span>
              </div>
              <div className="od-svc-body">
                <div className="od-svc-name">{s.name}</div>
                <div className="od-svc-desc">{s.desc}</div>
              </div>
              <div className="od-svc-foot">
                {s.tags.map((t) => <span key={t} className="od-svc-tag">{t}</span>)}
                <span className="od-svc-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

window.ServicesGrid = ServicesGrid;
