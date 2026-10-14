/**
 * src/data/projectsData.js
 *
 * Flagship repositories from github.com/kuntalmanii.
 */

export const projectsData = [
  {
    id: 'sahaay-isl-bridge',
    title: 'Sahaay (सहाय) — On-Device ISL Bridge',
    category: 'Edge AI / NPU Inference',
    status: 'Snapdragon AI Lab ✦',
    statusVariant: 'primary',
    description:
      'Qualcomm Snapdragon AI Lab challenge. 100% offline, air-gapped Indian Sign Language recognition engine running on Snapdragon X Elite Hexagon NPU.',
    highlights: [
      'Zero-cloud latency with 100% air-gapped on-device inference',
      'Accelerated on Qualcomm Snapdragon X Elite Hexagon NPU (45 TOPS)',
      'Real-time Indian Sign Language (ISL) gesture to speech/text translation',
    ],
    tech: ['Qualcomm NPU', 'Python', 'Edge AI', 'ISL'],
    githubUrl: 'https://github.com/kuntalmanii/saahay-HP-',
    liveUrl: 'https://github.com/kuntalmanii/saahay-HP-',
    previewType: 'sahaay',
    accentColor: '#A79CFF', // Primary token
  },
  {
    id: 'soulful-quartz',
    title: 'SoulfulQuartz — Ethereal Gemstone Boutique',
    category: 'E-Commerce / Full-Stack',
    status: 'Next.js 15 App',
    statusVariant: 'surface',
    description:
      'Full-stack Next.js 15 App Router boutique with TypeScript, Express + Prisma backend, React Context state, and interactive Crystal Advisor Quiz.',
    highlights: [
      'Next.js 15 App Router with Server Components & TypeScript',
      'Interactive Crystal Advisor Quiz with dynamic personalization engine',
      'Robust Express + Prisma ORM relational database architecture',
    ],
    tech: ['Next.js 15', 'TypeScript', 'Prisma', 'Express'],
    githubUrl: 'https://github.com/kuntalmanii/Soulfulquartz',
    liveUrl: 'https://github.com/kuntalmanii/Soulfulquartz',
    previewType: 'gemstone',
    accentColor: '#88C999', // Surface token
  },
  {
    id: 'recover-iq',
    title: 'RecoverIQ — Razorpay Buildathon',
    category: 'FinTech / Payment Infra',
    status: 'Razorpay Buildathon ✦',
    statusVariant: 'secondary',
    description:
      'Intelligent payment recovery platform featuring full-stack architecture, Role-Based Access Control (RBAC), and automated retry pipelines.',
    highlights: [
      'Automated smart retry pipelines for failed merchant transactions',
      'Full-stack architecture with enterprise Role-Based Access Control (RBAC)',
      'Real-time Razorpay webhook event streaming & transaction auditing',
    ],
    tech: ['React', 'Express', 'RBAC', 'FinTech'],
    githubUrl: 'https://github.com/kuntalmanii/Razorpay-buildathon',
    liveUrl: 'https://github.com/kuntalmanii/Razorpay-buildathon',
    previewType: 'fintech',
    accentColor: '#F4B942', // Secondary/Accent token
  },
]

export default projectsData
