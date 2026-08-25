const { Button, Eyebrow, Orb, Reveal, Icon, SkillMarquee } = window.DncnlDevDesignSystem_cd0d7e;

function Hero({ onNav }) {
  const orbRef = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = null;
    const apply = () => {
      raf = null;
      if (orbRef.current) orbRef.current.style.transform = `translateY(${Math.min(window.scrollY * 0.12, 60)}px)`;
    };
    const onScroll = () => { if (raf == null) raf = window.requestAnimationFrame(apply); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <React.Fragment>
      <section id="top" aria-label="Introduction" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(56px,7vw,104px) var(--page-pad-x) clamp(40px,5vw,72px)' }}>
        <div ref={orbRef} style={{ position: 'absolute', right: '-22%', top: '-46%', willChange: 'transform' }}>
          <Orb interactive style={{ opacity: 0.85 }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <Eyebrow index="01" style={{ marginBottom: 'var(--space-7)' }}>daniel martin canlapan · b.s. computer science · philippines</Eyebrow>
          </Reveal>
          <SplitReveal as="h1" text="I build software, from problem to shipped screen." delay={60} stagger={34}
            style={{ fontFamily: 'var(--font-hero)', fontWeight: 700, letterSpacing: 'var(--tracking-hero)', lineHeight: 'var(--lh-solid)', fontSize: 'var(--fs-hero)', margin: 0, paddingTop: '0.14em', maxWidth: '15ch', textWrap: 'balance' }} />
          <Reveal delay={120}>
            <p style={{ marginTop: 'var(--space-6)', maxWidth: '58ch', fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)', color: 'var(--text-muted)' }}>
              Most recently: Kalinga, an AI care companion for migrant caregivers, built for the Presidential Hackathon's international track.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-7)' }}>
              <Magnetic>
                <Button size="lg" onClick={() => onNav('work')}>See the work</Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="secondary" as="a" href="assets/Daniel_Canlapan_Resume.pdf" download>
                  CV <Icon name="download" size={15} />
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
      <SkillMarquee items={[...window.SKILLS_A, ...window.SKILLS_B]} speed={54} />
    </React.Fragment>
  );
}
Object.assign(window, { Hero });
