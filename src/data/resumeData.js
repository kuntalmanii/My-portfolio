/**
 * src/data/resumeData.js
 *
 * Professional ATS-optimized resume dataset for Manish Kuntal.
 * Includes structured data for the interactive modal and plaintext generation for ATS systems.
 */

export const resumeData = {
  personal: {
    name: 'Manish Kuntal',
    title: 'Product Developer & Full-Stack / Edge AI Engineer',
    location: 'Jaipur, Rajasthan, India',
    email: 'kuntalmani12@gmail.com',
    github: 'https://github.com/kuntalmanii',
    githubDisplay: 'github.com/kuntalmanii',
    linkedin: 'https://linkedin.com/in/manish-kuntal',
    linkedinDisplay: 'linkedin.com/in/manish-kuntal',
    portfolio: 'https://kuntalmanii.github.io/My-portfolio/',
    portfolioDisplay: 'kuntalmanii.github.io/My-portfolio',
    availability: 'Open to Full-Time Engineering Roles & Strategic Contracts',
  },

  summary:
    'Product-minded Full-Stack Software Engineer and Edge AI specialist with deep expertise in modern React/Next.js ecosystem, TypeScript, and high-performance system architecture. Proven track record deploying 100% air-gapped on-device neural networks on Qualcomm Snapdragon X Elite Hexagon NPUs (8.2ms latency), architecting full-stack Next.js 15 boutiques with Prisma ORM, and engineering automated fintech payment recovery meshes with Razorpay. Dedicated to atomic design systems, sub-second web performance, and zero-compromise developer craft.',

  competencies: [
    {
      domain: 'Frontend Engineering',
      skills: [
        'React 19 / 18',
        'Next.js 15 (App Router, Server Actions)',
        'TypeScript (Strict)',
        'Tailwind CSS',
        'Design Systems & Tokens',
        'Vite',
        'Canvas & Web Audio APIs',
        'WCAG 2.1 AA Accessibility',
      ],
    },
    {
      domain: 'Backend & Systems',
      skills: [
        'Node.js & Express.js',
        'PostgreSQL',
        'Prisma ORM',
        'RESTful API Architecture',
        'Webhook Event Meshes',
        'HMAC Security & WebAuthn',
        'Docker',
        'Vercel Deployment',
      ],
    },
    {
      domain: 'Edge AI & Acceleration',
      skills: [
        'Qualcomm Hexagon NPU (QNN)',
        'Snapdragon X Elite Architecture',
        'ONNX Runtime (DirectML / CPU / HTA)',
        'MediaPipe Landmark Pipeline',
        'INT8 / FP16 Model Quantization',
        'Python 3.11',
      ],
    },
    {
      domain: 'Practices & Standards',
      skills: [
        'Atomic Design Architecture',
        'Git & CI/CD Pipelines',
        'Performance Profiling (CWV / Lighthouse)',
        'Clean Code & Agile Delivery',
        'End-to-End Testing',
      ],
    },
  ],

  flagshipProjects: [
    {
      name: 'Sahaay (सहाय) — On-Device ISL Translation Bridge',
      subtitle: 'Qualcomm Snapdragon AI Lab Challenge',
      repoUrl: 'https://github.com/kuntalmanii/saahay-HP-',
      role: 'Lead AI & Edge Systems Architect',
      period: '2024',
      badge: 'Snapdragon AI Lab Finalist',
      highlights: [
        'Engineered an air-gapped, zero-cloud Indian Sign Language (ISL) gesture translation engine running dedicated on Qualcomm Snapdragon X Elite Hexagon NPU (45 TOPS).',
        'Quantized temporal graph neural networks (INT8) and compiled QNN context binaries to achieve sub-10ms (8.2ms average) continuous inference with zero CPU thermal throttling.',
        'Extracted 21 3D hand landmarks and 33 pose landmarks per frame at 60 FPS using an optimized MediaPipe pipeline feeding a ring-buffered temporal classifier.',
        'Guaranteed complete data privacy with 100% air-gapped execution, preventing biometric video streams from ever traversing external networks.',
      ],
    },
    {
      name: 'SoulfulQuartz — Ethereal Gemstone Boutique',
      subtitle: 'Full-Stack Modern E-Commerce Platform',
      repoUrl: 'https://github.com/kuntalmanii/Soulfulquartz',
      role: 'Full-Stack Architect & Frontend Lead',
      period: '2024',
      badge: 'Production Grade Full-Stack',
      highlights: [
        'Architected a production-ready e-commerce platform using Next.js 15 App Router, TypeScript, Tailwind CSS, Express backend, and Prisma ORM with PostgreSQL.',
        'Engineered an interactive Crystal Advisor quiz and custom tokenized design system scoring 99+ on Google Lighthouse with zero Cumulative Layout Shift (CLS).',
        'Implemented resilient state management using React Context, secure JWT authentication with session persistence, and transactional order checkout pipelines.',
        'Constructed reusable atomic UI primitives with strict keyboard navigation and responsive breakpoints tested across ultra-wide and mobile devices.',
      ],
    },
    {
      name: 'RecoverIQ — Intelligent Payment Recovery Platform',
      subtitle: 'Razorpay Buildathon Hackathon',
      repoUrl: 'https://github.com/kuntalmanii/Razorpay-buildathon',
      role: 'Full-Stack & Payment Infrastructure Engineer',
      period: '2024',
      badge: 'Razorpay Buildathon Showcase',
      highlights: [
        'Developed an automated revenue recovery and intelligent dunning system integrated with Razorpay API and HMAC-SHA256 signature verification.',
        'Designed an asynchronous event mesh processing failed recurring payment webhooks, triggering scheduled exponential-backoff retries and customized recovery prompts.',
        'Achieved a 38.4% recovery rate on failed transactions across test subscription cohorts, minimizing involuntary customer churn.',
        'Built an interactive metrics dashboard featuring real-time churn telemetry, revenue salvaging diagnostics, and instant webhook dispatch simulators.',
      ],
    },
  ],

  experience: [
    {
      title: 'Product Developer & Full-Stack Engineer',
      organization: 'Independent & Open Source Engagements',
      period: '2023 – Present',
      location: 'Remote / Jaipur, India',
      description:
        'Architecting modern web applications, design systems, and edge machine learning systems. Building high-performance software with React, Next.js, TypeScript, and hardware-accelerated AI.',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'Engineering University',
      period: 'Graduating 2025',
      location: 'India',
      focus: 'Distributed Systems, High-Performance Computing, Data Structures, Web Engineering',
    },
  ],

  honors: [
    'Qualcomm Snapdragon AI Lab Challenge — Selected Project for Sahaay On-Device ISL Bridge',
    'Razorpay Buildathon — Featured Intelligent Payment Recovery Solution (RecoverIQ)',
    '100% Open-Source Contributor across Edge AI, React Ecosystem & WebAuthn Security Prototypes',
  ],
}

/**
 * Helper to generate ATS-friendly plain text format
 */
export function generateAtsPlainText() {
  const p = resumeData.personal
  const lines = []

  lines.push(`${p.name.toUpperCase()}`)
  lines.push(`${p.title}`)
  lines.push(`${p.location} | ${p.email} | ${p.portfolioDisplay}`)
  lines.push(`GitHub: ${p.githubDisplay} | LinkedIn: ${p.linkedinDisplay}`)
  lines.push('')
  lines.push('======================================================================')
  lines.push('EXECUTIVE SUMMARY')
  lines.push('======================================================================')
  lines.push(resumeData.summary)
  lines.push('')
  lines.push('======================================================================')
  lines.push('TECHNICAL COMPETENCIES')
  lines.push('======================================================================')

  resumeData.competencies.forEach((c) => {
    lines.push(`* ${c.domain}: ${c.skills.join(', ')}`)
  })

  lines.push('')
  lines.push('======================================================================')
  lines.push('FLAGSHIP ENGINEERING PROJECTS & HACKATHONS')
  lines.push('======================================================================')

  resumeData.flagshipProjects.forEach((proj) => {
    lines.push(`${proj.name} | ${proj.role}`)
    lines.push(`Details: ${proj.subtitle} (${proj.period}) - ${proj.repoUrl}`)
    proj.highlights.forEach((h) => {
      lines.push(`  - ${h}`)
    })
    lines.push('')
  })

  lines.push('======================================================================')
  lines.push('EDUCATION')
  lines.push('======================================================================')
  resumeData.education.forEach((edu) => {
    lines.push(`${edu.degree}`)
    lines.push(`${edu.institution} | ${edu.location} (${edu.period})`)
    lines.push(`Focus: ${edu.focus}`)
    lines.push('')
  })

  lines.push('======================================================================')
  lines.push('HONORS & RECOGNITIONS')
  lines.push('======================================================================')
  resumeData.honors.forEach((h) => {
    lines.push(`* ${h}`)
  })

  return lines.join('\n')
}
