import { useState } from 'react'
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const DOMAIN_FILTERS = [
  { id: 'all', label: 'All Architecture', icon: Layers },
  { id: 'edge-ai', label: 'Edge AI / NPU', icon: Cpu, match: ['Qualcomm NPU', 'Edge AI', 'ONNX Runtime', 'Python', 'ISL'] },
  { id: 'nextjs', label: 'Next.js 15 / Full-Stack', icon: Layers, match: ['Next.js 15', 'TypeScript', 'Prisma', 'Express', 'PostgreSQL'] },
  { id: 'fintech', label: 'FinTech / Payments', icon: ShieldCheck, match: ['FinTech', 'Razorpay API', 'RBAC', 'Express'] },
]

const ALL_TECH_TAGS = [
  'Qualcomm NPU',
  'Next.js 15',
  'TypeScript',
  'Prisma ORM',
  'Razorpay API',
  'Python',
  'Edge AI',
  'RBAC',
  'ONNX Runtime',
  'PostgreSQL',
  'Tailwind CSS',
]

const ARCHITECTURE_DOMAINS = [
  {
    id: 'edge-ai-domain',
    title: 'Edge AI & Hardware Acceleration',
    subtitle: 'Air-Gapped Real-Time Local Inference',
    accentToken: '#A79CFF',
    icon: Cpu,
    skills: [
      { name: 'Qualcomm NPU', activeIn: 'sahaay-isl-bridge' },
      { name: 'Qualcomm AI Engine (QNN)', activeIn: 'sahaay-isl-bridge' },
      { name: 'ONNX Runtime', activeIn: 'sahaay-isl-bridge' },
      { name: 'INT8 Quantization', activeIn: 'sahaay-isl-bridge' },
      { name: 'MediaPipe Vision', activeIn: 'sahaay-isl-bridge' },
      { name: 'Python 3.11', activeIn: 'sahaay-isl-bridge' },
    ],
    metrics: [
      { label: 'Inference Latency', value: '8.2 ms' },
      { label: 'Throughput', value: '45 TOPS' },
      { label: 'Cloud Roundtrips', value: '0 Bytes' },
    ],
    flagshipRepo: {
      name: 'Sahaay (सहाय) ISL Bridge',
      tag: 'Qualcomm AI Lab Challenge',
      url: 'https://github.com/kuntalmanii/saahay-HP-',
    },
  },
  {
    id: 'fullstack-domain',
    title: 'Next.js 15 & Full-Stack Systems',
    subtitle: 'Type-Safe Modular E-Commerce Architecture',
    accentToken: '#88C999',
    icon: Layers,
    skills: [
      { name: 'Next.js 15 App Router', activeIn: 'soulful-quartz' },
      { name: 'React 19 Server Components', activeIn: 'soulful-quartz' },
      { name: 'TypeScript', activeIn: 'soulful-quartz' },
      { name: 'Prisma ORM', activeIn: 'soulful-quartz' },
      { name: 'PostgreSQL Relational DB', activeIn: 'soulful-quartz' },
      { name: 'Express Micro-API', activeIn: 'soulful-quartz' },
    ],
    metrics: [
      { label: 'Page Transitions', value: '< 400 ms' },
      { label: 'Type Coverage', value: '100% Strict' },
      { label: 'Lighthouse Score', value: '98 / 100' },
    ],
    flagshipRepo: {
      name: 'SoulfulQuartz Boutique',
      tag: 'Next.js 15 + Prisma',
      url: 'https://github.com/kuntalmanii/Soulfulquartz',
    },
  },
  {
    id: 'fintech-domain',
    title: 'FinTech, Payments & Security',
    subtitle: 'Cryptographic Integrity & High-Throughput Ingestion',
    accentToken: '#F4B942',
    icon: ShieldCheck,
    skills: [
      { name: 'Razorpay API & Webhooks', activeIn: 'recover-iq' },
      { name: 'HMAC-SHA256 Verification', activeIn: 'recover-iq' },
      { name: 'Role-Based Access (RBAC)', activeIn: 'recover-iq' },
      { name: 'Smart Retry Algorithms', activeIn: 'recover-iq' },
      { name: 'WebAuthn / Passkeys', activeIn: 'webauthn-passkeys' },
      { name: 'Event Streams', activeIn: 'recover-iq' },
    ],
    metrics: [
      { label: 'Payment Salvage', value: '89.4%' },
      { label: 'Webhook Ingestion', value: '< 25 ms' },
      { label: 'Failure Interception', value: 'Real-Time' },
    ],
    flagshipRepo: {
      name: 'RecoverIQ Recovery Engine',
      tag: 'Razorpay Buildathon Winner',
      url: 'https://github.com/kuntalmanii/Razorpay-buildathon',
    },
  },
  {
    id: 'frontend-domain',
    title: 'Interface Craft, Motion & Audio',
    subtitle: 'Sub-Second Builds & Multi-Sensory Micro-Interactions',
    accentToken: '#111827',
    icon: Zap,
    skills: [
      { name: 'Tailwind CSS v4 Tokens', activeIn: 'all' },
      { name: 'Retro Neo-Brutalist Design', activeIn: 'all' },
      { name: 'Web Audio API Synth', activeIn: 'voice-notes' },
      { name: 'Cumulative Layout Shift', activeIn: 'all' },
      { name: 'Canvas Particle Physics', activeIn: 'all' },
      { name: 'WCAG 2.1 AA A11y', activeIn: 'all' },
    ],
    metrics: [
      { label: 'Animation Frame Rate', value: '60 FPS' },
      { label: 'Layout Shift (CLS)', value: '0.00' },
      { label: 'Build Time', value: '< 1.5 s' },
    ],
    flagshipRepo: {
      name: 'Portfolio System & Labs',
      tag: 'Open-Source Portfolio',
      url: 'https://github.com/kuntalmanii/My-portfolio',
    },
  },
]

export default function TechStackMatrix({
  activeFilter = 'all',
  activeTag = null,
  onSelectFilter,
  onSelectTag,
  onResetFilter,
  filteredCount = 3,
  totalCount = 3,
}) {
  const [isMatrixExpanded, setIsMatrixExpanded] = useState(false)

  const isFiltered = activeFilter !== 'all' || activeTag !== null

  return (
    <div className="w-full flex flex-col gap-5 mb-10">
      
      {/* ── Top Bar: Domain Filter Pills + "Explore Architecture Matrix" Button ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 sm:p-2.5 rounded-xl bg-white/80 dark:bg-[#161D2E]/80 backdrop-blur-md border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000]">
        
        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {DOMAIN_FILTERS.map(({ id, label, icon: Icon }) => {
            const isActive = activeFilter === id && !activeTag
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onSelectFilter(id)
                  if (activeTag) onSelectTag(null)
                }}
                className={`font-mono text-xs font-bold px-3 py-1.5 rounded-[8px] border-2 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] border-[#111827] shadow-[2px_2px_0px_0px_#F4B942]'
                    : 'bg-white dark:bg-[#0E131F] text-[#4B5563] dark:text-[#9CA3AF] border-transparent hover:border-[#111827] dark:hover:border-white/20 hover:text-[#111827] dark:hover:text-white'
                }`}
              >
                <Icon size={13} className={isActive ? 'text-[#F4B942] dark:text-[#111827]' : ''} />
                <span>{label}</span>
              </button>
            )
          })}
        </div>

        {/* Competency Matrix Drawer Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMatrixExpanded(!isMatrixExpanded)}
          className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-[8px] border-2 border-[#111827] dark:border-white/20 transition-all flex items-center gap-2 shrink-0 cursor-pointer select-none self-start sm:self-auto ${
            isMatrixExpanded
              ? 'bg-[#A79CFF] text-[#111827] shadow-[2px_2px_0px_0px_#111827]'
              : 'bg-[#F9F8F5] dark:bg-[#0E131F] text-[#111827] dark:text-white hover:bg-[#88C999] hover:text-[#111827] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]'
          }`}
        >
          <SlidersHorizontal size={13} />
          <span>{isMatrixExpanded ? 'Hide Architecture Matrix' : 'Tech Competency Matrix'}</span>
          {isMatrixExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

      </div>

      {/* ── Quick Tech Chips (Interactive Filter Cloud) ── */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 px-1">
        <span className="font-mono text-[11px] font-bold text-[#4B5563] dark:text-[#9CA3AF] uppercase tracking-wider mr-1 flex items-center gap-1">
          <Sparkles size={11} className="text-[#A79CFF]" />
          <span>Filter by tech:</span>
        </span>

        {ALL_TECH_TAGS.map((tag) => {
          const isSelected = activeTag === tag
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag(isSelected ? null : tag)}
              className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all cursor-pointer select-none ${
                isSelected
                  ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] border-[#111827] shadow-[2px_2px_0px_0px_#F4B942]'
                  : 'bg-white/90 dark:bg-[#161D2E]/90 text-[#4B5563] dark:text-[#9CA3AF] border-[#E5E7EB] dark:border-white/15 hover:border-[#111827] dark:hover:border-white/40 hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              #{tag}
            </button>
          )
        })}

        {/* Clear active filter indicator */}
        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilter}
            className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F4B942] text-[#111827] border border-[#111827] shadow-[1px_1px_0px_0px_#111827] hover:bg-[#F4B942]/90 flex items-center gap-1 cursor-pointer transition-all ml-1"
          >
            <X size={12} />
            <span>Reset ({filteredCount}/{totalCount})</span>
          </button>
        )}
      </div>

      {/* ── Expandable Architectural Competency Matrix Grid ── */}
      {isMatrixExpanded && (
        <div className="rounded-2xl bg-white/95 dark:bg-[#161D2E]/95 backdrop-blur-xl border-2 border-[#111827] dark:border-white/20 shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-8 animate-fade-in flex flex-col gap-6">
          
          {/* Matrix Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#111827]/10 dark:border-white/10 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#88C999]/20 border border-[#88C999] text-[#111827] dark:text-[#88C999] font-mono text-[10px] font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#88C999] animate-pulse" />
                <span>SYSTEM ARCHITECTURE &amp; PRODUCTION MATRICES</span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#111827] dark:text-white tracking-tight">
                Engineering Competency Breakdown
              </h3>
            </div>
            
            <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] max-w-sm sm:text-right">
              Click any skill chip below to immediately filter and highlight the projects demonstrating that architecture.
            </p>
          </div>

          {/* 4 Architectural Domain Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ARCHITECTURE_DOMAINS.map((domain) => {
              const Icon = domain.icon
              return (
                <div
                  key={domain.id}
                  className="rounded-xl bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 p-5 sm:p-6 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] flex flex-col justify-between gap-5 group hover:border-[#A79CFF] transition-all"
                >
                  <div className="flex flex-col gap-4">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-[8px] border-2 border-[#111827] dark:border-white/20 flex items-center justify-center text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
                          style={{ backgroundColor: domain.accentToken }}
                        >
                          <Icon size={18} className="text-[#111827]" />
                        </div>
                        <div>
                          <h4 className="font-display font-black text-base sm:text-lg text-[#111827] dark:text-white leading-tight">
                            {domain.title}
                          </h4>
                          <span className="font-mono text-[11px] text-[#4B5563] dark:text-[#9CA3AF]">
                            {domain.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Tags Cloud */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {domain.skills.map((skill) => {
                        const isMatchingTag = activeTag === skill.name
                        return (
                          <button
                            key={skill.name}
                            type="button"
                            onClick={() => onSelectTag(isMatchingTag ? null : skill.name)}
                            className={`font-mono text-[10px] font-bold px-2 py-1 rounded-[6px] border transition-all cursor-pointer ${
                              isMatchingTag
                                ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] border-[#111827]'
                                : 'bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white border-[#E5E7EB] dark:border-white/10 hover:border-[#111827]'
                            }`}
                          >
                            {skill.name}
                          </button>
                        )
                      })}
                    </div>

                    {/* Production Benchmark Metrics */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-[8px] bg-white dark:bg-[#161D2E] border border-[#E5E7EB] dark:border-white/10">
                      {domain.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#4B5563] dark:text-[#9CA3AF]">
                            {metric.label}
                          </span>
                          <span className="font-mono text-xs font-black text-[#111827] dark:text-white">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Flagship Repo Link Footer */}
                  <div className="pt-3 border-t border-[#E5E7EB] dark:border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                      <span>Flagship:</span>
                      <strong className="text-[#111827] dark:text-white">{domain.flagshipRepo.name}</strong>
                    </span>
                    <a
                      href={domain.flagshipRepo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] font-bold text-[#A79CFF] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Repo</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      )}

    </div>
  )
}
