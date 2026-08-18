const { Button, Eyebrow, Orb, Reveal, Icon, SkillMarquee } = window.DncnlDevDesignSystem_cd0d7e;

function Hero({ onNav }) {
  return (
    <React.Fragment>
      <section id="top" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(56px,7vw,104px) var(--page-pad-x) clamp(40px,5vw,72px)' }}>
        <Orb interactive style={{ position: 'absolute', right: '-22%', top: '-46%', opacity: 0.85 }} />
        <div style={{ position: 'relative', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <Eyebrow index="01" style={{ marginBottom: 'var(--space-7)' }}>daniel martin canlapan · b.s. computer science · philippines</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontFamily: 'var(--font-hero)', fontWeight: 700, letterSpacing: 'var(--tracking-hero)', lineHeight: 'var(--lh-solid)', fontSize: 'var(--fs-hero)', margin: 0, paddingTop: '0.14em', maxWidth: '15ch', textWrap: 'balance' }}>
              I build software, from problem to shipped screen.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ marginTop: 'var(--space-6)', maxWidth: '58ch', fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)', color: 'var(--text-muted)' }}>
              Software solutions across web, machine learning, and interfaces, backed by documentation that keeps it legible.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-7)' }}>
              <Button size="lg" onClick={() => onNav('work')}>See the work</Button>
              <Button size="lg" variant="secondary" as="a" href="assets/Daniel_Canlapan_Resume.pdf" download>
                CV <Icon name="download" size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <SkillMarquee items={[...window.SKILLS_A, ...window.SKILLS_B]} speed={54} />
    </React.Fragment>
  );
}
Object.assign(window, { Hero });
