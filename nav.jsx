const { Button, ThemeToggle, IconButton } = window.DncnlDevDesignSystem_cd0d7e;

function Nav({ theme, setTheme, active, onNav }) {
  const links = [['work', '03'], ['skills', '04'], ['about', '05'], ['contact', '06']];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, background: 'var(--bg)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)',
      padding: '0 var(--page-pad-x)', transition: 'var(--transition-theme)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', height: 76, display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }}
          style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', fontSize: 26, textDecoration: 'none' }}>dncnl.dev</a>
        <nav style={{ display: 'flex', gap: 'var(--space-5)', marginLeft: 'auto' }}>
          {links.map(([id, n]) => (
            <a key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); onNav(id); }}
              style={{
                fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase', textDecoration: 'none',
                color: active === id ? 'var(--text)' : 'var(--text-muted)',
                borderBottom: active === id ? '2px solid var(--ochre)' : '2px solid transparent',
                paddingBottom: 3,
              }}>
              <span style={{ color: 'var(--text-subtle)', marginRight: 8 }}>{n}</span>{id}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <ThemeToggle theme={theme} onChange={setTheme} />
          <IconButton icon="github" label="GitHub — dncnl" size="sm" onClick={() => window.open('https://github.com/dncnl', '_blank')} />
          <Button size="sm" onClick={() => onNav('contact')}>Get in touch</Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Nav });
