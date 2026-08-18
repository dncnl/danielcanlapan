const { Eyebrow, Card, Tag, Reveal, Icon, TechIcon } = window.DncnlDevDesignSystem_cd0d7e;

function Skills() {
  return (
    <section id="skills" style={{ padding: 'var(--section-y) 0', background: 'var(--surface)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ padding: '0 var(--page-pad-x)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal><Eyebrow index="03" rule>what I do</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Skills</h2>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(max(260px, (100% - var(--space-6)) / 2), 1fr))',
            gap: 'var(--space-6)', justifyContent: 'center', maxWidth: 920, margin: 'var(--space-7) auto 0',
          }}>
            {window.COMPETENCIES.map((c, i) => (
              <Reveal key={c.key} delay={40 * i}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <Icon name={c.icon} size={20} />
                    <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-lg)' }}>{c.key}</span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)', fontSize: 'var(--fs-sm)' }}>{c.body}</p>
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
            .skill-chip:hover{color:var(--ochre);border-color:var(--ochre);transform:translateY(-2px)}
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
