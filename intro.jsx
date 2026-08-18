const { Eyebrow, Quote, Reveal } = window.DncnlDevDesignSystem_cd0d7e;

function Intro() {
  return (
    <section id="intro" style={{ padding: 'var(--section-y) var(--page-pad-x)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Reveal><Eyebrow index="02">a short version</Eyebrow></Reveal>
        <Reveal delay={60}><div aria-hidden="true" style={{ width: 40, height: 3, background: 'var(--ochre)', margin: 'var(--space-5) 0' }} /></Reveal>
        <Reveal delay={100}>
          <Quote size="lg" style={{ maxWidth: '34ch', alignItems: 'center', textAlign: 'center' }}>
            I'd rather be the person who checked than the person who assumed.
          </Quote>
        </Reveal>
      </div>
    </section>
  );
}
Object.assign(window, { Intro });
