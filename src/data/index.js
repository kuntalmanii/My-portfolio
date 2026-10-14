/**
 * src/data/index.js
 *
 * Central data layer for the portfolio.
 * As the project grows, split into separate files:
 *   - projects.js
 *   - skills.js
 *   - experience.js
 *   - socials.js
 *
 * All values can be overridden by environment variables (VITE_* prefix).
 */

export const meta = {
  name:      'Your Name',
  role:      'Full-Stack Developer',
  tagline:   'Building things people love to use.',
  email:     import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@portfolio.dev',
  github:    'https://github.com/yourusername',
  linkedin:  'https://linkedin.com/in/yourusername',
  resumeUrl: '/resume.pdf',
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tooling & Cloud',
    items: ['Vite', 'Docker', 'GitHub Actions', 'Vercel'],
  },
]

export const projects = [
  {
    id:          'alpha',
    title:       'Project Alpha',
    description: 'A full-stack SaaS platform with real-time collaboration and AI-assisted workflows.',
    tags:        ['React', 'Node.js', 'WebSockets'],
    liveUrl:     '#',
    repoUrl:     '#',
    featured:    true,
    color:       'bg-primary',
  },
  {
    id:          'beta',
    title:       'Project Beta',
    description: 'Open-source component library with a retro-modern design system and full a11y support.',
    tags:        ['TypeScript', 'Storybook', 'Radix UI'],
    liveUrl:     '#',
    repoUrl:     '#',
    featured:    true,
    color:       'bg-secondary',
  },
  {
    id:          'gamma',
    title:       'Project Gamma',
    description: 'CLI tool that scaffolds opinionated project structures with one command.',
    tags:        ['Node.js', 'Commander.js', 'Inquirer'],
    liveUrl:     '#',
    repoUrl:     '#',
    featured:    false,
    color:       'bg-surface',
  },
]

export const experience = [
  {
    company:    'Acme Corp',
    role:       'Senior Frontend Engineer',
    period:     '2022 – Present',
    highlights: [
      'Led migration from CRA to Vite, reducing cold-start by 80%.',
      'Designed and shipped the company\'s internal design system.',
      'Mentored 3 junior engineers.',
    ],
  },
]
