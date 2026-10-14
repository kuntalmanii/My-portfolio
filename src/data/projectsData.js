/**
 * src/data/projectsData.js
 *
 * Core projects data sourced from github.com/kuntalmanii.
 */

export const projectsData = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer & Builder',
    category: 'AI / Full-Stack',
    status: 'Featured ✦',
    statusVariant: 'primary',
    description:
      'Real-time ATS parsing, theme generation, client-side AI analysis, and structured feedback powered by Google Gemini API.',
    highlights: [
      'Real-time ATS keyword parsing & scoring',
      'Dynamic resume theme generator with export capabilities',
      'Client-side Google Gemini API integration for intelligent resume optimization',
    ],
    tech: ['React', 'Tailwind', 'Google Gemini API', 'Node.js'],
    githubUrl: 'https://github.com/kuntalmanii/Ai-resume-builder-',
    liveUrl: 'https://github.com/kuntalmanii/Ai-resume-builder-',
    previewType: 'resume',
    accentColor: '#A79CFF',
  },
  {
    id: 'geo-accommodation-pg-finder',
    title: 'Geo-Accommodation PG Finder',
    category: 'Spatial / Web App',
    status: 'Open Source',
    statusVariant: 'secondary',
    description:
      'Nearby PG accommodation search engine using open-source mapping, interactive distance radius calculation, and real-time listing filters.',
    highlights: [
      'Interactive Leaflet API map pins with custom popup cards',
      'Proximity-based search by college or workplace radius',
      'Node.js & Express REST endpoints for accommodation data',
    ],
    tech: ['Leaflet API', 'JavaScript', 'Express', 'Node.js'],
    githubUrl: 'https://github.com/kuntalmanii',
    liveUrl: 'https://github.com/kuntalmanii',
    previewType: 'map',
    accentColor: '#F4B942',
  },
  {
    id: 'pw-ioi-website-redesign',
    title: 'PW IOI Website Redesign',
    category: 'Design Engineering',
    status: 'Case Study',
    statusVariant: 'surface',
    description:
      'Full frontend redesign with 60 FPS animations, fluid typography, modern micro-interactions, and high-fidelity mobile responsiveness.',
    highlights: [
      'Butter-smooth 60 FPS transitions via Framer Motion & GSAP',
      'Decoupled TypeScript component architecture on Next.js',
      'Mobile-first responsive layouts with hard drop shadow accents',
    ],
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'GSAP'],
    githubUrl: 'https://github.com/kuntalmanii',
    liveUrl: 'https://github.com/kuntalmanii',
    previewType: 'redesign',
    accentColor: '#88C999',
  },
]

export default projectsData
