const { Eyebrow, Card, Tag, Reveal, Icon, TechIcon } = window.DncnlDevDesignSystem_cd0d7e;

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" style={{ padding: 'var(--section-y) 0', background: 'linear-gradient(to bottom, var(--bg) 0, var(--surface) var(--space-10))' }}>
      <div style={{ padding: '0 var(--page-pad-x)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal><Eyebrow index="03" rule>what I do</Eyebrow></Reveal>
          <HeaderRise id="skills-heading" style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Skills</HeaderRise>
          <style>{`
            @keyframes iconGlow{0%,100%{opacity:1}50%{opacity:.5}}
            .icon-glow{animation:iconGlow 3.6s ease-in-out infinite}
            @media (prefers-reduced-motion:reduce){.icon-glow{animation:none}}
          `}</style>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-4)', justifyContent: 'center', maxWidth: 1040, margin: 'var(--space-6) auto 0',
          }}>
            {window.COMPETENCIES.map((c, i) => (
              <Reveal key={c.key} delay={40 * i}>
                <Card className="hover-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <Icon name={c.icon} size={15} className="hover-accent icon-glow" style={{ transition: 'var(--transition-ui)', animationDelay: (i * 260) + 'ms' }} />
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-sm)' }}>{c.key}</h3>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)', fontSize: 'var(--fs-xs)' }}>{c.body}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'auto' }}>
                    {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 'var(--space-8)', padding: '0 var(--page-pad-x)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal><Eyebrow rule>languages, libraries & tools</Eyebrow></Reveal>
          <style>{`
            .skill-chip{transition:var(--transition-ui)}
            .skill-chip:hover{color:var(--ochre) !important;border-color:var(--ochre) !important;transform:translateY(-2px)}
          `}</style>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-3)',
            marginTop: 'var(--space-6)',
          }}>
            {[...window.SKILLS_A, ...window.SKILLS_B].map((s, i) => (
              <Reveal key={s.name} delay={16 * i}>
                <span className="skill-chip" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                  padding: '10px var(--space-4)', border: 'var(--border-hair) solid var(--border-hairline)',
                  fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-sm)', color: 'var(--text)',
                }}>
                  <TechIcon slug={s.slug} size={17} />
                  {s.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Skills });
