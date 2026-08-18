const { Eyebrow, Card, Tag, Reveal, Icon, TechIcon, SkillMarquee } = window.DncnlDevDesignSystem_cd0d7e;

function Skills() {
  return (
    <section id="skills" style={{ padding: 'var(--section-y) 0', background: 'var(--surface)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ padding: '0 var(--page-pad-x)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal><Eyebrow index="04" rule>what I do</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 style={{ fontSize: 'var(--fs-3xl)', maxWidth: '26ch', margin: 'var(--space-5) 0 0' }}>Four competencies, one person to brief.</h2>
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
      <div style={{ marginTop: 'var(--space-8)' }}>
        <div style={{ padding: '0 var(--page-pad-x) var(--space-4)', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Eyebrow>languages, libraries & tools</Eyebrow>
        </div>
        <SkillMarquee items={[...window.SKILLS_A, ...window.SKILLS_B]} speed={72} />
      </div>
    </section>
  );
}
Object.assign(window, { Skills });
