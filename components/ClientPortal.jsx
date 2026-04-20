// ClientPortal.jsx — client profile creation + booking lookup
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwEo1SmfVmXy8WCopvrbmgh3Rmea-2jVTE4VRxfLoj58PuwW3nsaVEroIZuCNJzmC0Jdw/exec';

const ClientPortal = () => {
  const [view, setView] = React.useState('create'); // 'create' | 'lookup'

  // Create profile state
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', company: '',
    eventTypes: [], hearAbout: '', notes: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [focused, setFocused] = React.useState(null);

  // Lookup state
  const [lookupEmail, setLookupEmail] = React.useState('');
  const [lookupResult, setLookupResult] = React.useState(null);
  const [looking, setLooking] = React.useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const eventOptions = [
    'Bachelor / Bachelorette',
    'Birthday Parties',
    'Corporate Events',
    'Bar / Club Nights',
    'Weddings',
    'Private Parties',
    'DwarfDivas Show',
    'Film / TV / Media',
  ];

  const toggleEvent = (ev) => {
    const curr = form.eventTypes;
    setForm({ ...form, eventTypes: curr.includes(ev) ? curr.filter(x => x !== ev) : [...curr, ev] });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'newClient',
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          eventTypes: form.eventTypes.join(', '),
          hearAbout: form.hearAbout,
          notes: form.notes,
        }),
      });
    } catch (err) {}
    setSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLookup = async (e) => {
    e.preventDefault();
    setLooking(true);
    // Sends a request — Apps Script will email them their booking history
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'lookupClient', email: lookupEmail }),
      });
    } catch (err) {}
    setTimeout(() => {
      setLookupResult({ email: lookupEmail });
      setLooking(false);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="od-intake-success">
        <div className="od-intake-success-card">
          <div className="od-intake-success-mark">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <div className="od-eyebrow">Profile created</div>
          <h1 className="od-intake-success-title">
            You're in the <span className="od-accent-blue">system.</span>
          </h1>
          <p className="od-intake-success-sub">
            Your client profile has been saved. Next time you book, we'll already know who you are. No forms from scratch.
          </p>
          <div className="od-intake-success-meta">
            <div className="od-intake-success-row">
              <span>Name</span>
              <span>{form.name}</span>
            </div>
            <div className="od-intake-success-row">
              <span>Email</span>
              <span>{form.email}</span>
            </div>
            {form.company && (
              <div className="od-intake-success-row">
                <span>Company</span>
                <span>{form.company}</span>
              </div>
            )}
          </div>
          <div className="od-intake-success-actions">
            <a href="index.html" className="od-btn-outline">Back to home</a>
            <a href="intake.html" className="od-btn-primary">Book an event →</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="od-intake" data-screen-label="Client Portal">
      <div className="od-intake-glow" aria-hidden="true" />
      <div className="od-intake-shell">

        {/* ── LEFT PANEL ── */}
        <aside className="od-intake-aside">
          <div className="od-intake-aside-inner">
            <a href="index.html" className="od-intake-back">
              <span className="od-intake-back-arrow">←</span> Back to OnlyDwarfs
            </a>

            <div className="od-eyebrow" style={{ marginTop: 56 }}>Client portal</div>
            <h1 className="od-intake-headline">
              Your account.<br/>
              <span className="od-accent-blue">Your bookings.</span>
            </h1>
            <p className="od-intake-lede">
              Create a profile once. Book faster every time. We'll remember your preferences so you never start from scratch.
            </p>

            <div className="od-intake-pts">
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">01</span>
                <div>
                  <div className="od-intake-pt-t">Faster bookings</div>
                  <div className="od-intake-pt-d">Your info is on file. New event requests take half the time.</div>
                </div>
              </div>
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">02</span>
                <div>
                  <div className="od-intake-pt-t">Booking history</div>
                  <div className="od-intake-pt-d">Look up past events and request performers you loved again.</div>
                </div>
              </div>
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">03</span>
                <div>
                  <div className="od-intake-pt-t">Priority access</div>
                  <div className="od-intake-pt-d">Returning clients get first look at new talent and DwarfDivas dates.</div>
                </div>
              </div>
            </div>

            <div className="od-portal-tabs">
              <button
                className={`od-portal-tab ${view === 'create' ? 'active' : ''}`}
                onClick={() => setView('create')} type="button">
                Create profile
              </button>
              <button
                className={`od-portal-tab ${view === 'lookup' ? 'active' : ''}`}
                onClick={() => setView('lookup')} type="button">
                My bookings
              </button>
            </div>
          </div>
        </aside>

        {/* ── RIGHT CONTENT ── */}
        <main className="od-intake-form-wrap">
          {view === 'create' ? (
            <form className="od-intake-form" onSubmit={handleCreate}>

              <div className="od-intake-group">
                <div className="od-intake-group-head">
                  <span className="od-intake-group-num">01</span>
                  <div>
                    <div className="od-intake-group-title">Your info</div>
                    <div className="od-intake-group-sub">How we reach you and who we're talking to.</div>
                  </div>
                </div>
                <div className="od-intake-fields">
                  <CField label="Full name" required focused={focused === 'name'}>
                    <input type="text" value={form.name} onChange={update('name')}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      placeholder="Jordan Marino" required />
                  </CField>
                  <div className="od-intake-row-2">
                    <CField label="Email" required focused={focused === 'email'}>
                      <input type="email" value={form.email} onChange={update('email')}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                        placeholder="you@company.com" required />
                    </CField>
                    <CField label="Phone" focused={focused === 'phone'}>
                      <input type="tel" value={form.phone} onChange={update('phone')}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                        placeholder="(555) 123-4567" />
                    </CField>
                  </div>
                  <CField label="Company / Group name" focused={focused === 'company'}
                    hint="Optional — for corporate clients and recurring groups.">
                    <input type="text" value={form.company} onChange={update('company')}
                      onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                      placeholder="Acme Corp, The Boys, etc." />
                  </CField>
                </div>
              </div>

              <div className="od-intake-group">
                <div className="od-intake-group-head">
                  <span className="od-intake-group-num">02</span>
                  <div>
                    <div className="od-intake-group-title">Your events</div>
                    <div className="od-intake-group-sub">What kinds of events do you typically book for?</div>
                  </div>
                </div>
                <div className="od-intake-fields">
                  <div>
                    <div className="od-intake-field-label" style={{ marginBottom: 12 }}>
                      <span>Event types</span>
                    </div>
                    <div className="od-gig-grid">
                      {eventOptions.map(ev => (
                        <button key={ev} type="button"
                          className={`od-gig-chip ${form.eventTypes.includes(ev) ? 'active' : ''}`}
                          onClick={() => toggleEvent(ev)}>
                          {ev}
                        </button>
                      ))}
                    </div>
                  </div>
                  <CField label="How did you hear about us?" focused={focused === 'hearAbout'}>
                    <input type="text" value={form.hearAbout} onChange={update('hearAbout')}
                      onFocus={() => setFocused('hearAbout')} onBlur={() => setFocused(null)}
                      placeholder="Instagram, referral, Google, etc." />
                  </CField>
                  <CField label="Anything we should know?" focused={focused === 'notes'}>
                    <textarea rows={3} value={form.notes} onChange={update('notes')}
                      onFocus={() => setFocused('notes')} onBlur={() => setFocused(null)}
                      placeholder="Preferences, recurring events, anything useful upfront." />
                  </CField>
                </div>
              </div>

              <div className="od-intake-submit-row">
                <div className="od-intake-legal">
                  We'll store your profile securely and never share it with third parties.
                </div>
                <button type="submit" className="od-btn-primary od-btn-lg od-intake-submit" disabled={submitting}>
                  {submitting ? 'Saving…' : <React.Fragment>Create my profile <span className="od-btn-arrow">→</span></React.Fragment>}
                </button>
              </div>
            </form>
          ) : (
            <div className="od-intake-form">
              <div className="od-intake-group" style={{ gridTemplateColumns: '1fr' }}>
                <div className="od-intake-group-head" style={{ flexDirection: 'row', alignItems: 'center', gap: 20, position: 'static' }}>
                  <span className="od-intake-group-num">📋</span>
                  <div>
                    <div className="od-intake-group-title">Look up your bookings</div>
                    <div className="od-intake-group-sub">Enter the email you used when booking and we'll send your history.</div>
                  </div>
                </div>

                {lookupResult ? (
                  <div className="od-lookup-result">
                    <div className="od-lookup-icon">✓</div>
                    <div className="od-lookup-title">Check your inbox</div>
                    <div className="od-lookup-sub">
                      We've sent your booking history to <strong>{lookupResult.email}</strong>. If you don't see it in a few minutes, check spam.
                    </div>
                    <button type="button" className="od-btn-outline" style={{ marginTop: 24 }}
                      onClick={() => { setLookupResult(null); setLookupEmail(''); }}>
                      Try a different email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLookup} className="od-intake-fields">
                    <CField label="Email address" required focused={focused === 'lookupEmail'}>
                      <input type="email" value={lookupEmail} onChange={e => setLookupEmail(e.target.value)}
                        onFocus={() => setFocused('lookupEmail')} onBlur={() => setFocused(null)}
                        placeholder="you@company.com" required />
                    </CField>
                    <div className="od-intake-submit-row">
                      <div className="od-intake-legal">
                        We'll email a summary of all bookings associated with this address.
                      </div>
                      <button type="submit" className="od-btn-primary od-btn-lg od-intake-submit" disabled={looking}>
                        {looking ? 'Looking up…' : <React.Fragment>Send my history <span className="od-btn-arrow">→</span></React.Fragment>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

const CField = ({ label, required, focused, hint, children }) => (
  <label className={`od-intake-field ${focused ? 'focused' : ''}`}>
    <div className="od-intake-field-label">
      <span>{label}</span>
      {required && <span className="od-intake-field-req">Required</span>}
    </div>
    {children}
    {hint && <div className="od-intake-field-hint">{hint}</div>}
  </label>
);

window.ClientPortal = ClientPortal;
