// Content sourced from Daniel Martin G. Canlapan's resume (assets/resume.docx).
const SKILLS_A = [
  { name: 'Python', slug: 'python' }, { name: 'Java', slug: 'openjdk' },
  { name: 'JavaScript', slug: 'javascript' }, { name: 'C#', slug: 'csharp' },
  { name: 'C++', slug: 'cplusplus' }, { name: 'Dart', slug: 'dart' },
  { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Express', slug: 'express' },
];
const SKILLS_B = [
  { name: 'scikit-learn', slug: 'scikitlearn' }, { name: 'pandas', slug: 'pandas' },
  { name: 'NumPy', slug: 'numpy' }, { name: 'Seaborn' }, { name: 'Flutter', slug: 'flutter' },
  { name: 'Tkinter' }, { name: 'Figma', slug: 'figma' }, { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' }, { name: 'VS Code' }, { name: 'Claude Code', slug: 'claude' },
];
const COMPETENCIES = [
  { key: 'full-stack web development', icon: 'server',
    body: 'Responsive web applications and secure RESTful APIs with Node.js and Express, vanilla JavaScript on the front, PostgreSQL behind.',
    tags: ['node.js', 'express', 'javascript', 'postgresql'] },
  { key: 'machine learning & data analysis', icon: 'line-chart',
    body: 'Developing, training and evaluating predictive models — preprocessing, feature engineering and visualisation in Python.',
    tags: ['python', 'scikit-learn', 'pandas', 'numpy', 'seaborn'] },
  { key: 'software & UI development', icon: 'layout',
    body: 'Standalone desktop applications and graphical interfaces with Tkinter and CustomTkinter; UI design, prototyping and mockups in Figma.',
    tags: ['tkinter', 'customtkinter', 'figma'] },
  { key: 'technical documentation', icon: 'file-text',
    body: 'Structured system documentation, architectural overviews and literature reviews for complex software projects.',
    tags: ['architecture docs', 'literature review'] },
];
const PROJECTS = [
  { client: 'Presidential Hackathon · International Track', year: '2025',
    title: 'Kalinga — AI care companion for migrant caregivers',
    metric: 'Frontend developer & planning contributor',
    summary: 'Scoped the problem and MVP, then designed and built the multi-screen Flutter app: onboarding, patient profiles, daily check-ins, medication tracking and emergency help — multilingual and offline-first.',
    tags: ['flutter', 'dart', 'ui/ux', 'figma'], href: 'https://github.com/dncnl/kalinga' },
];
Object.assign(window, { SKILLS_A, SKILLS_B, COMPETENCIES, PROJECTS });
