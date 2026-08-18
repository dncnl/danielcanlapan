const { Eyebrow, Reveal } = window.DncnlDevDesignSystem_cd0d7e;

function Intro() {
  return (
    <section id="intro" style={{ padding: 'var(--section-y) var(--page-pad-x)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Reveal><Eyebrow index="02">a short version</Eyebrow></Reveal>
        <Reveal delay={60}><div aria-hidden="true" style={{ width: 40, height: 3, background: 'var(--ochre)', margin: 'var(--space-5) 0' }} /></Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontSize: 'var(--fs-3xl)', margin: 0 }}>Hi, I'm Daniel Martin.</h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ marginTop: 'var(--space-5)', maxWidth: '44ch', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
            I turn ambiguous problems into shipped software — the plan, the interface, the API behind it, and the write-up that explains why.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
Object.assign(window, { Intro });
