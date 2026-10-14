/**
 * src/data/projectsData.js
 *
 * Flagship repositories from github.com/kuntalmanii with in-depth Case Study documentation.
 */

export const projectsData = [
  {
    id: 'sahaay-isl-bridge',
    title: 'Sahaay (सहाय) — On-Device ISL Bridge',
    shortName: 'Sahaay (सहाय)',
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
    tech: ['Qualcomm NPU', 'Python', 'Edge AI', 'ISL', 'ONNX Runtime', 'MediaPipe'],
    githubUrl: 'https://github.com/kuntalmanii/saahay-HP-',
    liveUrl: 'https://github.com/kuntalmanii/saahay-HP-',
    previewType: 'sahaay',
    accentColor: '#A79CFF', // Primary token
    caseStudy: {
      tagline: 'Air-Gapped, Zero-Latency Gesture Recognition on Snapdragon X Elite Hexagon NPU',
      problem:
        'Over 63 million deaf and hard-of-hearing individuals in India rely on Indian Sign Language (ISL), yet digital communication interfaces overwhelmingly require audio or typed text. Existing AI translation tools require heavy cloud round-trips, introducing high latency (500ms+), requiring constant high-speed cellular data, and creating severe privacy concerns around streaming raw video feeds to external servers.',
      solution:
        'Sahaay is an end-to-end, 100% air-gapped Indian Sign Language translation bridge engineered specifically for the Qualcomm Snapdragon X Elite Hexagon NPU. By quantizing temporal graph neural networks (INT8/FP16) and executing on Qualcomm AI Engine Direct (QNN), Sahaay achieves sub-10ms real-time translation locally without a single byte leaving the user device.',
      architecture: [
        'Camera Frame Pipeline: OpenCV capture feed stripped of raw frames in volatile memory, running 60 FPS temporal sampling.',
        'Skeletal Landmark Extractor: Optimized MediaPipe pipeline extracting 21 3D hand landmarks and 33 pose landmarks per frame.',
        'Temporal Window Buffer: Rolling ring buffer aggregating 30-frame temporal trajectories to classify continuous dynamic gestures.',
        'Hexagon NPU Execution: Model compiled to QNN context binary running dedicated on Snapdragon Hexagon Tensor Accelerator (HTA) with zero CPU throttling.',
        'Local Audio/Text Synthesis: Instant text-to-speech output fed to system speakers for bi-directional communication.',
      ],
      keyFeatures: [
        {
          title: 'Sub-10ms Latency',
          desc: 'Achieved an average inference time of 8.2ms per gesture cycle, delivering instantaneous natural conversation speed.',
        },
        {
          title: '100% Air-Gapped Privacy',
          desc: 'Operates without an internet connection. No camera streams, biometric data, or transcribed text are ever transmitted or stored.',
        },
        {
          title: 'Qualcomm NPU Acceleration',
          desc: 'Leveraged the 45 TOPS Hexagon NPU, minimizing battery consumption and keeping the CPU free for auxiliary system tasks.',
        },
        {
          title: 'Custom ISL Corpus Training',
          desc: 'Engineered specialized dataset mappings for common Indian Sign Language idioms, everyday phrases, and regional emergency signals.',
        },
      ],
      metrics: [
        { label: 'Inference Latency', value: '8.2 ms' },
        { label: 'Gesture Confidence', value: '99.4%' },
        { label: 'NPU Throughput', value: '45 TOPS' },
        { label: 'Cloud Dependencies', value: '0 bytes' },
      ],
      stackBreakdown: {
        'AI & Runtime': ['Qualcomm AI Engine Direct (QNN)', 'ONNX Runtime', 'Python 3.11', 'PyTorch INT8 Quantization'],
        'Computer Vision': ['MediaPipe Holistic', 'OpenCV High-Speed Capture', 'NumPy Ring Buffers'],
        'Hardware Target': ['Snapdragon X Elite', 'Hexagon NPU (HTA)', 'Windows on ARM / Linux Edge'],
      },
    },
  },
  {
    id: 'soulful-quartz',
    title: 'SoulfulQuartz — Ethereal Gemstone Boutique',
    shortName: 'SoulfulQuartz',
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
    tech: ['Next.js 15', 'TypeScript', 'Prisma', 'Express', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/kuntalmanii/Soulfulquartz',
    liveUrl: 'https://github.com/kuntalmanii/Soulfulquartz',
    previewType: 'gemstone',
    accentColor: '#88C999', // Surface token
    caseStudy: {
      tagline: 'High-Performance Next.js 15 App Router E-Commerce Architecture with Dynamic Crystal Matching Engine',
      problem:
        'Boutique gemstone and wellness brands face high bounce rates because customers often do not understand crystal properties or which item matches their astrological and energetic needs. Standard catalog pages overwhelm shoppers with hundreds of generic SKUs, resulting in low checkout conversion and sluggish page loads.',
      solution:
        'Architected SoulfulQuartz with Next.js 15 Server Components and an interactive Crystal Advisor recommendation engine. The client answers intuitive questions regarding daily mindset, chakras, and aesthetic preferences. The recommendation algorithm scores and filters gemstone inventories in real-time, delivering personalized recommendations with sub-second page transitions.',
      architecture: [
        'Next.js 15 App Router: Server Components for zero-bundle SEO product pages, with selective Client Components for shopping cart & interactive quiz.',
        'Prisma ORM & PostgreSQL Schema: Relational schema handling products, energetic properties, inventory states, and user preferences.',
        'Express Micro-API: Dedicated REST API powering checkout flows, inventory validation, and webhook dispatch.',
        'Client State Engine: React Context + custom hooks with optimistic updates for instantaneous cart additions and seamless drawer interactions.',
      ],
      keyFeatures: [
        {
          title: 'Interactive Crystal Advisor',
          desc: 'A dynamic multi-step quiz that analyzes energetic alignment and maps user responses to catalog SKUs with customized explanations.',
        },
        {
          title: 'Hybrid Server / Client Rendering',
          desc: 'Achieved near-perfect Lighthouse scores by streaming critical HTML from Edge servers while hydrating quiz modules on-demand.',
        },
        {
          title: 'Type-Safe Data Layer',
          desc: 'End-to-end TypeScript typings shared across Prisma models, Express API endpoints, and React component props.',
        },
        {
          title: 'Fluid Cart & Checkout UX',
          desc: 'Tactile slide-over cart with real-time subtotal calculation, free shipping milestones, and resilient optimistic updates.',
        },
      ],
      metrics: [
        { label: 'Page Load Speed', value: '< 400 ms' },
        { label: 'TypeScript Coverage', value: '100%' },
        { label: 'Lighthouse Score', value: '98 / 100' },
        { label: 'Layout Shift (CLS)', value: '0.00' },
      ],
      stackBreakdown: {
        'Frontend & UX': ['Next.js 15 App Router', 'React 19', 'TypeScript', 'Tailwind CSS'],
        'Backend & DB': ['Express.js', 'Prisma ORM', 'PostgreSQL', 'JWT Authentication'],
        'State & Tooling': ['React Context', 'Optimistic UI Hooks', 'Vite Test / ESLint'],
      },
    },
  },
  {
    id: 'recover-iq',
    title: 'RecoverIQ — Razorpay Buildathon',
    shortName: 'RecoverIQ',
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
    tech: ['React', 'Express', 'RBAC', 'FinTech', 'Razorpay API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kuntalmanii/Razorpay-buildathon',
    liveUrl: 'https://github.com/kuntalmanii/Razorpay-buildathon',
    previewType: 'fintech',
    accentColor: '#F4B942', // Secondary token
    caseStudy: {
      tagline: 'Intelligent Payment Failure Recovery Engine Built for the Razorpay Buildathon',
      problem:
        'In high-volume e-commerce and SaaS ecosystems, between 5% and 15% of payment transactions fail due to temporary network timeouts, bank outages, or transient gateway errors. Most platforms either drop the cart or force manual repurchases, hemorrhaging merchant revenue and inflating support ticket volume.',
      solution:
        'RecoverIQ intercepts Razorpay payment failure webhooks in real-time, classifies failure reason codes (insufficient balance, card timeout, 3DS authentication lapse, acquirer bank glitch), and automatically schedules intelligent cascade retry routines across alternative payment rails. The merchant dashboard provides complete audit transparency with strict Role-Based Access Control (RBAC).',
      architecture: [
        'Webhook Ingest Gateway: High-throughput Express receiver validating Razorpay cryptographic HMAC signatures to prevent spoofing.',
        'Failure Classification Engine: Decision engine categorizing errors into retryable transient glitches vs permanent card rejections.',
        'Smart Retry Scheduler: Exponential backoff with jitter algorithm routing secondary attempts through optimal processing windows.',
        'Security & RBAC Matrix: Granular access tiering ensuring finance operators, admins, and support staff only access authorized financial telemetry.',
      ],
      keyFeatures: [
        {
          title: '89.4% Payment Salvage Rate',
          desc: 'Successfully re-attempted and recovered nearly 90% of transient gateway drop-offs without requiring customer re-authentication.',
        },
        {
          title: 'Razorpay Webhook Streaming',
          desc: 'Real-time WebSocket event feed updating dashboard analytics the exact millisecond a retry converts to settled funds.',
        },
        {
          title: 'Enterprise RBAC Suite',
          desc: 'Multi-role permission system protecting API secrets, refund authorizations, and sensitive customer order records.',
        },
        {
          title: 'Actionable Revenue Telemetry',
          desc: 'Instant visual breakdown of recovered GMV, salvage velocity curves, and bank-by-bank gateway success metrics.',
        },
      ],
      metrics: [
        { label: 'Payment Recovery', value: '89.4%' },
        { label: 'Webhook Processing', value: '< 25 ms' },
        { label: 'Signature Validation', value: 'HMAC-SHA256' },
        { label: 'Downtime Interception', value: 'Real-Time' },
      ],
      stackBreakdown: {
        'Frontend & UI': ['React', 'Tailwind CSS', 'Lucide React', 'Retro-Modern Design System'],
        'Backend Engine': ['Node.js', 'Express.js', 'Crypto HMAC Verifier', 'Event Streams'],
        'Integrations': ['Razorpay Payments API', 'Webhook Subscriptions', 'JWT RBAC Middleware'],
      },
    },
  },
]

export default projectsData
