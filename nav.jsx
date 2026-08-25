const { Button, ThemeToggle, IconButton } = window.DncnlDevDesignSystem_cd0d7e;

function Nav({ theme, setTheme, active, onNav }) {
  const links = [['work', '02'], ['skills', '03'], ['certifications', '04'], ['github', '05'], ['about', '06'], ['contact', '07']];
  const linkRefs = React.useRef({});
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, opacity: 0 });
  React.useLayoutEffect(() => {
    const place = () => {
      const el = linkRefs.current[active];
      setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth, opacity: 1 } : (s) => ({ ...s, opacity: 0 }));
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [active]);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, background: 'var(--bg)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)',
      padding: '0 var(--page-pad-x)', transition: 'var(--transition-theme)',
    }}>
      <style>{`
        .nav-links{scrollbar-width:none;position:relative}
        .nav-links::-webkit-scrollbar{display:none}
        .nav-indicator{transition:left var(--dur-3) var(--ease-mech),width var(--dur-3) var(--ease-mech),opacity var(--dur-2) var(--ease-out)}
        @media (prefers-reduced-motion:reduce){.nav-indicator{transition:opacity var(--dur-2) var(--ease-out)}}
        .nav-link{color:var(--text-muted)}
        .nav-link:hover{color:var(--text)}
        @media (max-width:640px){
          .nav-row{height:64px !important;gap:var(--space-4) !important}
          .nav-links{gap:var(--space-4) !important}
          .nav-extra{display:none !important}
        }
      `}</style>
      <div className="nav-row" style={{ maxWidth: 'var(--max-w)', margin: '0 auto', height: 76, display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }}
          style={{ flex: '0 0 auto', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', fontSize: 26, textDecoration: 'none' }}>dncnl.dev</a>
        <nav className="nav-links" style={{ display: 'flex', gap: 'var(--space-5)', marginLeft: 'auto', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {links.map(([id, n]) => (
            <a key={id} ref={(el) => { linkRefs.current[id] = el; }} href={'#' + id} onClick={(e) => { e.preventDefault(); onNav(id); }}
              className="nav-link"
              style={{
                flex: '0 0 auto',
                fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase', textDecoration: 'none',
                color: active === id ? 'var(--text)' : undefined,
                borderBottom: '2px solid transparent',
                paddingBottom: 3,
                transition: 'var(--transition-ui)',
              }}>
              <span style={{ color: 'var(--text-subtle)', marginRight: 8 }}>{n}</span>{id}
            </a>
          ))}
          <span className="nav-indicator" aria-hidden="true" style={{
            position: 'absolute', bottom: 0, height: 2, background: 'var(--ochre)',
            left: indicator.left, width: indicator.width, opacity: indicator.opacity,
          }} />
        </nav>
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <ThemeToggle theme={theme} onChange={setTheme} />
          <div className="nav-extra" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <IconButton icon="github" label="GitHub" size="sm" onClick={() => window.open('https://github.com/dncnl', '_blank')} />
            <Button size="sm" variant="secondary" as="a" href="assets/Daniel_Canlapan_Resume.pdf" download>CV</Button>
            <Magnetic strength={0.25}>
              <Button size="sm" onClick={() => onNav('contact')}>Get in touch</Button>
            </Magnetic>
          </div>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Nav });
