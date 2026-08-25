const { IconButton, Icon } = window.DncnlDevDesignSystem_cd0d7e;

function Footer() {
  return (
    <footer style={{ padding: 'var(--space-8) var(--page-pad-x) var(--space-7)', background: 'linear-gradient(to bottom, var(--surface), var(--bg) 96px)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', fontSize: 'var(--fs-2xl)' }}>dncnl.dev</div>
          <div style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Daniel Martin G. Canlapan · Philippines</div>
          <a href="mailto:danielcanlapan0402@gmail.com" style={{ display: 'inline-flex', gap: 8, alignItems: 'center', marginTop: 12, fontSize: 'var(--fs-sm)' }}>
            <Icon name="mail" size={15} />danielcanlapan0402@gmail.com
          </a>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <IconButton icon="github" label="GitHub" size="sm" variant="ghost" onClick={() => window.open('https://github.com/dncnl', '_blank')} />
          <IconButton icon="linkedin" label="LinkedIn" size="sm" variant="ghost" onClick={() => window.open('https://www.linkedin.com/in/daniel-martin-canlapan-1b2760380', '_blank', 'noopener,noreferrer')} />
          <IconButton icon="mail" label="Email" size="sm" variant="ghost" onClick={() => { window.location.href = 'mailto:danielcanlapan0402@gmail.com'; }} />
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
