const { Eyebrow, Card, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

const GITHUB_USERNAME = 'dncnl';

function StatTile({ label, value }) {
  return (
    <Card variant="hairline" className="hover-card" style={{ height: '100%', textAlign: 'center', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-2)' }}>
      <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: 'var(--fs-2xl)' }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>
    </Card>
  );
}

const CELL = 11;
const GAP = 3;
const LEVEL_BG = [
  'var(--border-hairline)',
  'color-mix(in srgb, var(--ochre) 30%, var(--surface))',
  'color-mix(in srgb, var(--ochre) 55%, var(--surface))',
  'color-mix(in srgb, var(--ochre) 80%, var(--surface))',
  'var(--ochre)',
];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function ContributionGrid({ days }) {
  if (!days || !days.length) return null;
  const startPad = new Date(days[0].date + 'T00:00:00').getDay();
  const cells = [...Array(startPad).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const monthLabels = weeks.map((week, i) => {
    const first = week.find(Boolean);
    if (!first) return null;
    const date = new Date(first.date + 'T00:00:00');
    if (date.getDate() > 7) return null;
    const prev = weeks[i - 1] && weeks[i - 1].find(Boolean);
    if (prev && new Date(prev.date + 'T00:00:00').getMonth() === date.getMonth()) return null;
    return date.toLocaleDateString('en-US', { month: 'short' });
  });

  const labelStyle = { fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)', whiteSpace: 'nowrap' };

  return (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <div style={{ display: 'grid', gridTemplateRows: `14px repeat(7, ${CELL}px)`, gap: GAP }}>
        <div />
        {DAY_LABELS.map((l, i) => <div key={i} style={{ ...labelStyle, height: CELL, lineHeight: CELL + 'px' }}>{l}</div>)}
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: `repeat(${weeks.length}, ${CELL}px)`,
        gridTemplateRows: `14px repeat(7, ${CELL}px)`, gap: GAP,
      }}>
        {weeks.map((_, wi) => (
          monthLabels[wi] && (
            <div key={'m' + wi} style={{ ...labelStyle, gridColumn: wi + 1, gridRow: 1 }}>{monthLabels[wi]}</div>
          )
        ))}
        {weeks.map((week, wi) => week.map((day, di) => (
          <div key={wi + '-' + di}
            title={day ? `${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}` : undefined}
            style={{ gridColumn: wi + 1, gridRow: di + 2, width: CELL, height: CELL, borderRadius: 2, background: day ? LEVEL_BG[day.level] : 'transparent' }} />
        )))}
      </div>
    </div>
  );
}

function ContributionLegend() {
  const labelStyle = { fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)', justifyContent: 'flex-end' }}>
      <span style={labelStyle}>Less</span>
      {LEVEL_BG.map((bg, i) => (
        <div key={i} style={{ width: CELL, height: CELL, borderRadius: 2, background: bg }} />
      ))}
      <span style={labelStyle}>More</span>
    </div>
  );
}

function GitHubActivity() {
  const [profile, setProfile] = React.useState(null);
  const [contributions, setContributions] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [profileRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`),
        ]);
        if (!profileRes.ok || !contribRes.ok) throw new Error('request failed');
        const [profileData, contribData] = await Promise.all([profileRes.json(), contribRes.json()]);
        if (cancelled) return;
        setProfile(profileData);
        setContributions(contribData);
      } catch (err) {
        if (!cancelled) setError(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const loading = !error && (!profile || !contributions);
  const totalLastYear = contributions?.total?.lastYear ?? (Array.isArray(contributions?.contributions)
    ? contributions.contributions.reduce((sum, d) => sum + d.count, 0)
    : 0);

  return (
    <section id="github" aria-labelledby="github-heading" style={{ padding: 'var(--section-y) var(--page-pad-x)', background: 'linear-gradient(to bottom, var(--bg) 0, var(--surface) var(--space-10))' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="05" rule>github</Eyebrow></Reveal>
        <HeaderRise id="github-heading" style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>GitHub activity</HeaderRise>

        {error && (
          <Reveal delay={80}>
            <p style={{ marginTop: 'var(--space-6)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)' }}>
              Couldn't load live GitHub data right now.
            </p>
            <Button variant="secondary" as="a" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" aria-label="View profile on GitHub, opens in a new tab" style={{ marginTop: 'var(--space-4)' }}>
              View profile on GitHub <Icon name="arrow-up-right" size={15} />
            </Button>
          </Reveal>
        )}

        {loading && (
          <div aria-hidden="true" style={{ marginTop: 'var(--space-7)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-5)', maxWidth: 720, margin: '0 auto',
            }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ height: 104, borderRadius: 'var(--radius-1)', background: 'var(--surface-sunken)' }} />
              ))}
            </div>
            <div style={{ height: 220, maxWidth: 920, margin: 'var(--space-6) auto 0', borderRadius: 'var(--radius-1)', background: 'var(--surface-sunken)' }} />
            <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Loading activity…</p>
          </div>
        )}

        {!error && !loading && (
          <React.Fragment>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-5)', maxWidth: 720, margin: 'var(--space-7) auto 0',
            }}>
              <Reveal><StatTile label="Public repos" value={profile.public_repos} /></Reveal>
              <Reveal delay={60}><StatTile label="Followers" value={profile.followers} /></Reveal>
              <Reveal delay={120}><StatTile label="Contributions (past year)" value={totalLastYear} /></Reveal>
            </div>

            <Reveal delay={160}>
              <Card variant="hairline" className="hover-card" style={{ maxWidth: 920, margin: 'var(--space-6) auto 0' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-4)' }}>
                  {totalLastYear} contributions in the last 12 months
                </div>
                <div style={{ overflowX: 'auto', paddingBottom: 2 }}>
                  <ContributionGrid days={contributions.contributions} />
                </div>
                <ContributionLegend />
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                <Button variant="secondary" as="a" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" aria-label="View full profile, opens in a new tab">
                  View full profile <Icon name="arrow-up-right" size={15} />
                </Button>
              </div>
            </Reveal>
          </React.Fragment>
        )}
      </div>
    </section>
  );
}
Object.assign(window, { GitHubActivity });
