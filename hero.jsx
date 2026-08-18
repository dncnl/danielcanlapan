const { Button, Eyebrow, Orb, Reveal, Icon, SkillMarquee } = window.DncnlDevDesignSystem_cd0d7e;

function Hero({ onNav }) {
  return (
    <React.Fragment>
      <section id="top" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(56px,7vw,104px) var(--page-pad-x) clamp(40px,5vw,72px)' }}>
        <Orb interactive style={{ position: 'absolute', right: '-22%', top: '-46%', opacity: 0.85 }} />
        <div style={{ position: 'relative', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <Eyebrow index="01" style={{ marginBottom: 'var(--space-7)' }}>daniel martin canlapan · b.s. computer science</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontFamily: 'var(--font-hero)', fontWeight: 700, letterSpacing: 'var(--tracking-hero)', lineHeight: 'var(--lh-solid)', fontSize: 'var(--fs-hero)', margin: 0, paddingTop: '0.14em', maxWidth: '15ch', textWrap: 'balance' }}>
              I build software end to end.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ marginTop: 'var(--space-6)', maxWidth: '58ch', fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)', color: 'var(--text-muted)' }}>
              I work across web apps and APIs, machine learning and data, and interfaces — plus the
              documentation that keeps a system legible, from problem to shipped screen.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-7)' }}>
              <Button size="lg" onClick={() => onNav('work')}>See the work</Button>
              <Button size="lg" variant="secondary" onClick={() => onNav('contact')}>Get in touch</Button>
              <Button size="lg" variant="ghost" as="a" href="https://github.com/dncnl" target="_blank" rel="noreferrer">
                github.com/dncnl <Icon name="arrow-up-right" size={15} />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <dl style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(max(190px, (100% - var(--space-6)) / 2), 1fr))',
              gap: 'var(--space-6)', justifyContent: 'center', maxWidth: 640,
              margin: 'clamp(44px,6vw,88px) auto 0', paddingTop: 'var(--space-6)',
              borderTop: 'var(--border-hair) solid var(--border-hairline)',
            }}>
              {[['B.S. Computer Science', 'Angeles University Foundation'], ['DOST-SEI Scholar', 'RA 7687 national scholarship'], ['end-to-end builder', 'web · ML · UI · docs'], ['Based in Pampanga, PH', 'GMT+8']].map(([t, d]) => (
                <div key={t}>
                  <dt style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-lg)' }}>{t}</dt>
                  <dd style={{ margin: '6px 0 0', fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-xs)', letterSpacing: 'var(--tracking-none)', color: 'var(--text-muted)' }}>{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
      <SkillMarquee items={[...window.SKILLS_A, ...window.SKILLS_B]} speed={54} />
    </React.Fragment>
  );
}
Object.assign(window, { Hero });
