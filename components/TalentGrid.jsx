// TalentGrid.jsx — live roster fetched from Apps Script
// Talent shows up here after Ryder sets STATUS = 'Active' in the Talent sheet
const TALENT_URL = 'https://script.google.com/macros/s/AKfycbwEo1SmfVmXy8WCopvrbmgh3Rmea-2jVTE4VRxfLoj58PuwW3nsaVEroIZuCNJzmC0Jdw/exec?action=getTalent';

const PLACEHOLDERS = [
  { name: 'The Roster',  spec: 'Performer profiles dropping soon',  tags: ['Vegas', 'Entertainment'], avail: 'Open' },
  { name: 'Comedy Act',  spec: 'Stand-up & improv headliner',       tags: ['Comedy', 'Events'],       avail: 'Open' },
  { name: 'Party MC',    spec: 'Host energy + crowd work',          tags: ['Parties', 'Vegas'],       avail: 'Booked' },
  { name: 'Film Talent', spec: 'SAG-eligible, set-ready',           tags: ['Film', 'TV'],             avail: 'Open' },
  { name: 'Corporate',   spec: 'Brand-safe & audience-trained',     tags: ['Corporate', 'WW'],        avail: 'Open' },
  { name: 'Themed',      spec: 'Character work & costumes',         tags: ['Themed', 'Custom'],       avail: 'Open' },
];

const TalentGrid = () => {
  const [roster, setRoster] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(TALENT_URL)
      .then(r => r.json())
      .then(d => {
        if (d.talent && d.talent.length > 0) {
          setRoster(d.talent.map(t => ({
            name:  t.name,
            spec:  t.performerType || 'Performer',
            tags:  t.gigs ? t.gigs.split(',').map(g => g.trim()).filter(Boolean).slice(0, 3) : [t.location || 'Vegas'],
            avail: 'Open',
            social: t.social || null,
            bio:   t.bio || null,
          })));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cards = roster.length > 0 ? roster : PLACEHOLDERS;
  const isLive = roster.length > 0;

  return (
    <section id="talent" className="od-section" data-screen-label="Talent">
      <div className="od-inner">
        <div className="od-section-head">
          <div>
            <div className="od-eyebrow">The roster</div>
            <h2 className="od-sec-title">Meet the <span className="od-accent-blue">talent.</span></h2>
          </div>
          <p className="od-sec-sub">
            Performers, entertainers, and personalities ready to make your event legendary.
            Every performer is vetted, insured, and trained for the room.
          </p>
        </div>

        <div className="od-talent-grid">
          {cards.map((t, i) => (
            <a key={i}
              href={isLive && t.social ? `https://instagram.com/${t.social.replace('@','')}` : 'roster.html'}
              className="od-talent-card"
              target={isLive && t.social ? '_blank' : undefined}
              rel={isLive && t.social ? 'noopener noreferrer' : undefined}
            >
              <div className="od-talent-photo">
                <svg className="od-talent-placeholder" width="40" height="40" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <div className={`od-talent-avail ${t.avail === 'Booked' ? 'booked' : 'open'}`}>
                  <span className="od-talent-avail-dot" /> {t.avail}
                </div>
                {!isLive && <div className="od-talent-label">Portrait coming soon</div>}
                {isLive && t.social && <div className="od-talent-label">{t.social}</div>}
              </div>
              <div className="od-talent-info">
                <div className="od-talent-name">{t.name}</div>
                <div className="od-talent-spec">{t.spec}</div>
                <div className="od-talent-tags">
                  {t.tags.map(tag => <span key={tag} className="od-talent-tag">{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="od-text-center" style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="roster.html" className="od-btn-primary">View full roster →</a>
          <a href="talent.html" className="od-btn-outline">Apply to join the roster →</a>
        </div>
      </div>
    </section>
  );
};

window.TalentGrid = TalentGrid;
