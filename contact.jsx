const { Eyebrow, Icon, Reveal } = window.DncnlDevDesignSystem_cd0d7e;

function CopyEmailRow({ email }) {
  const [copied, setCopied] = React.useState(false);
  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try { await navigator.clipboard.writeText(email); } catch (err) { /* clipboard blocked */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div style={{ display: 'flex', width: '100%', border: 'var(--border-2) solid var(--border)' }}>
      <a href={'mailto:' + email} style={{
        flex: '1 1 auto', minWidth: 0, display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        padding: 'var(--space-4) var(--space-5)', textDecoration: 'none', color: 'var(--text)',
        fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: 'var(--fs-md)',
      }}>
        <Icon name="mail" size={18} style={{ flex: '0 0 auto' }} />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</span>
      </a>
      <button onClick={copy} aria-label={'copy ' + email} style={{
        flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: '0 var(--space-5)', border: 0, borderLeft: 'var(--border-2) solid var(--border)',
        background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)',
        fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
      }}>
        <Icon name={copied ? 'check' : 'copy'} size={14} />{copied ? 'copied' : 'copy'}
      </button>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: 'var(--section-y) var(--page-pad-x)', background: 'var(--surface)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Reveal><Eyebrow index="06" rule>contact</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Contact</h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ marginTop: 'var(--space-5)', maxWidth: '52ch', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
            Internships, project work, collaborations, or just a question about something I've built. I usually reply within a couple of days.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div style={{ marginTop: 'var(--space-7)', maxWidth: 480, width: '100%' }}>
            <CopyEmailRow email="danielcanlapan0402@gmail.com" />
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-6)',
            marginTop: 'var(--space-7)', paddingTop: 'var(--space-6)', borderTop: 'var(--rule)',
            width: '100%', maxWidth: 480, fontSize: 'var(--fs-sm)',
          }}>
            <a href="https://github.com/dncnl" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="github" size={16} />github.com/dncnl</a>
            <a href="https://www.linkedin.com/in/daniel-martin-canlapan-1b2760380" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="linkedin" size={16} />LinkedIn</a>
            <span style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-muted)' }}><Icon name="map-pin" size={16} />Philippines</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
Object.assign(window, { Contact });
