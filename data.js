// Content sourced from Daniel Martin G. Canlapan's CV (assets/Daniel_Canlapan_Resume.pdf).
const SKILLS_A = [
  { name: 'Python', slug: 'python' }, { name: 'Java', slug: 'openjdk' },
  { name: 'JavaScript', slug: 'javascript' }, { name: 'C#' },
  { name: 'C++', slug: 'cplusplus' }, { name: 'Dart', slug: 'dart' },
  { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'Supabase', slug: 'supabase' },
  { name: 'Node.js', slug: 'nodedotjs' }, { name: 'Express', slug: 'express' },
];
const SKILLS_B = [
  { name: 'scikit-learn', slug: 'scikitlearn' }, { name: 'pandas', slug: 'pandas' },
  { name: 'NumPy', slug: 'numpy' }, { name: 'Seaborn' }, { name: 'Flutter', slug: 'flutter' },
  { name: 'Tkinter' }, { name: 'Figma', slug: 'figma' }, { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' }, { name: 'VS Code' }, { name: 'Claude Code', slug: 'claude' },
];
const COMPETENCIES = [
  { key: 'full-stack web development', icon: 'server',
    body: 'Responsive web applications and secure RESTful APIs with Node.js and Express, vanilla JavaScript on the front, PostgreSQL and Supabase behind.',
    tags: ['node.js', 'express', 'javascript', 'postgresql', 'supabase'] },
  { key: 'machine learning & data analysis', icon: 'line-chart',
    body: 'Developing, training and evaluating predictive models: preprocessing, feature engineering and visualisation in Python.',
    tags: ['python', 'scikit-learn', 'pandas', 'numpy', 'seaborn'] },
  { key: 'software & UI development', icon: 'layout',
    body: 'Standalone desktop applications and graphical interfaces with Tkinter and CustomTkinter; UI design, prototyping and mockups in Figma.',
    tags: ['tkinter', 'customtkinter', 'figma'] },
  { key: 'technical documentation', icon: 'file-text',
    body: 'Structured system documentation, architectural overviews and literature reviews for complex software projects.',
    tags: ['architecture docs', 'literature review'] },
];
const PROJECTS = [
  { client: 'Presidential Hackathon · International Track', year: '2026',
    title: 'Kalinga: an AI care companion for migrant caregivers',
    metric: 'Frontend developer & planning contributor',
    summary: 'Scoped the problem and MVP, then designed and built the multi-screen Flutter app: onboarding, patient profiles, daily check-ins, medication tracking and emergency help, multilingual and offline-first.',
    tags: ['flutter', 'dart', 'ui/ux', 'figma'], href: 'https://github.com/dncnl/kalinga',
    image: 'assets/projects/kalinga/kalinga-cover.png',
    submission: {
      note: 'Built as an application / initial submission for the',
      label: 'Presidential Hackathon — International Track',
      href: 'https://presidential-hackathon.taiwan.gov.tw/en/international-track/',
    } },
  { client: 'Enactus Philippines National Competition 2026 · Early-Stage Project Track', year: '2026',
    title: 'Kain: a budget-to-meal-plan PWA for food-insecure Filipino families',
    metric: 'Frontend & backend contributor',
    summary: 'Enter a food budget and household size; Kain runs every combination of local recipes through a bounded-knapsack solver to return the single most nutritious plan that fits — with an exact shopping list and a chart of daily nutrition coverage. Fully client-side and offline-capable: no server, no network needed after first load.',
    tags: ['javascript', 'pwa', 'tailwind css', 'chart.js'], href: 'https://kain-enactus.vercel.app',
    image: 'assets/projects/kain/kain-cover.png',
    submission: {
      note: 'Built for the Enactus Philippines National Competition 2026 — Early-Stage Project Track · code on',
      label: 'GitHub',
      href: 'https://github.com/dncnl/kain-enactus-2026',
    } },
];
const CERTIFICATIONS = [
  { title: 'Introduction to Data Science', issuer: 'Cisco',
    badge: 'assets/credentials/cisco-intro-to-data-science.png',
    credentialId: '95acc8ae-eb98-4e9d-9779-076f3c5820db',
    href: 'https://www.credly.com/badges/95acc8ae-eb98-4e9d-9779-076f3c5820db/public_url' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco',
    badge: 'assets/credentials/cisco-intro-to-cybersecurity.png',
    issued: '5/4/2026', credentialId: 'c81fc21d-45e7-48a7-818b-af6fe0832e6b',
    href: 'https://www.credly.com/badges/c81fc21d-45e7-48a7-818b-af6fe0832e6b/public_url' },
];
Object.assign(window, { SKILLS_A, SKILLS_B, COMPETENCIES, PROJECTS, CERTIFICATIONS });
