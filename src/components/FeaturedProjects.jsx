import { useState } from 'react'
import {
  ExternalLink,
  GitFork,
  ArrowUpRight,
  Sparkles,
  Cpu,
  WifiOff,
  ShieldCheck,
  Gem,
  CreditCard,
  RefreshCw,
  CheckCircle2,
  FileText,
  RotateCcw,
} from 'lucide-react'
import { projectsData } from '../data/projectsData'
import ScrollReveal from './ScrollReveal'
import TechStackMatrix from './TechStackMatrix'

// Visual Mockup Component customized for each flagship project
function ProjectMockup({ type }) {
  // 1. Sahaay (सहाय) — On-Device ISL Bridge
  if (type === 'sahaay') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#111827] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] dark:border-white/20 relative overflow-hidden text-white">
        {/* Chrome header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#88C999]" />
          </div>
          <span className="font-mono text-[10px] text-[#A79CFF] tracking-wider uppercase flex items-center gap-1.5">
            <Cpu size={12} className="text-[#A79CFF]" />
            <span>Snapdragon X Elite // Hexagon NPU</span>
          </span>
        </div>

        {/* Central visual: Air-gapped Edge AI & ISL Recognition */}
        <div className="grid grid-cols-12 gap-3 items-center py-1">
          {/* Left badge: 100% Offline */}
          <div className="col-span-4 bg-white/10 rounded-[6px] p-2.5 border border-white/15 text-center flex flex-col items-center justify-center">
            <WifiOff size={16} className="text-[#A79CFF] mb-1" />
            <span className="font-display font-black text-sm text-[#F9F8F5] leading-tight">100% Offline</span>
            <span className="font-mono text-[8px] text-[#A79CFF] uppercase tracking-wide">Air-Gapped NPU</span>
          </div>

          {/* Right details: Live gesture inference */}
          <div className="col-span-8 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#88C999] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#88C999] animate-pulse" />
                <span>Gesture: 'सहाय' (Support)</span>
              </span>
              <span className="font-mono text-[10px] font-bold text-[#F4B942]">99.4% Conf.</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-[#A79CFF] h-full w-[99.4%]" />
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-[#E5E7EB]/80 pt-0.5">
              <span>Latency: 8.2ms</span>
              <span>Throughput: 45 TOPS</span>
            </div>
          </div>
        </div>

        {/* Bottom status */}
        <div className="flex items-center justify-between font-mono text-[10px] text-[#A79CFF] border-t border-white/10 pt-1.5">
          <span className="flex items-center gap-1">
            <ShieldCheck size={12} className="text-[#88C999]" />
            <span>Qualcomm AI Lab Submission</span>
          </span>
          <span className="text-[#E5E7EB]/70">Edge Python Engine</span>
        </div>
      </div>
    )
  }

  // 2. SoulfulQuartz — Ethereal Gemstone Boutique
  if (type === 'gemstone') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#F9F8F5] dark:bg-[#0E131F] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] dark:border-white/20 relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] dark:bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Chrome header */}
        <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-[#111827]/15 dark:border-white/15">
          <span className="font-mono text-[10px] font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
            <Gem size={13} className="text-[#88C999]" />
            <span>Next.js 15 App Router // Boutique</span>
          </span>
          <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#88C999] border border-[#111827] text-[#111827]">
            Prisma ORM
          </span>
        </div>

        {/* Central visual: Crystal Advisor Quiz preview & state */}
        <div className="relative z-10 grid grid-cols-2 gap-3 items-center py-1">
          {/* Crystal Quiz Card */}
          <div className="bg-white dark:bg-[#161D2E] rounded-[6px] border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] p-2.5">
            <span className="font-mono text-[9px] font-bold text-[#4B5563] dark:text-[#9CA3AF] uppercase">Crystal Advisor Quiz</span>
            <p className="font-display font-extrabold text-xs text-[#111827] dark:text-white mt-0.5">Rose Quartz &bull; Healing</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#88C999]" />
              <span className="font-mono text-[8px] text-[#4B5563] dark:text-[#9CA3AF]">Energy: Calming Resonance</span>
            </div>
          </div>

          {/* Architecture snapshot */}
          <div className="bg-[#111827] text-white rounded-[6px] border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#88C999] p-2.5 font-mono text-[9px] flex flex-col gap-1">
            <span className="text-[#88C999]">// React Context State</span>
            <span className="text-white">cart.addItem(crystal)</span>
            <span className="text-[#A79CFF]">prisma.product.findMany()</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#4B5563] dark:text-[#9CA3AF] bg-white/90 dark:bg-[#161D2E]/90 px-2.5 py-1 rounded border border-[#111827]/20 dark:border-white/10">
          <span className="font-bold text-[#111827] dark:text-white">TypeScript + Express API</span>
          <span className="text-[#88C999] font-bold">100% Fluid UI</span>
        </div>
      </div>
    )
  }

  // 3. RecoverIQ — Razorpay Buildathon
  return (
    <div className="w-full h-44 sm:h-48 bg-[#111827] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] dark:border-white/20 relative overflow-hidden text-white">
      {/* Chrome header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#88C999]" />
        </div>
        <span className="font-mono text-[10px] text-[#F4B942] tracking-wider uppercase flex items-center gap-1.5">
          <CreditCard size={12} />
          <span>Razorpay Buildathon // RecoverIQ</span>
        </span>
      </div>

      {/* Central visual: Payment Recovery Pipeline */}
      <div className="grid grid-cols-12 gap-3 items-center py-1">
        {/* Recovery rate box */}
        <div className="col-span-4 bg-white/10 rounded-[6px] p-2 text-center border border-white/15 flex flex-col justify-center">
          <span className="font-display font-black text-xl text-[#F4B942] leading-tight">89.4%</span>
          <span className="font-mono text-[8px] text-[#E5E7EB] uppercase">Recovered</span>
        </div>

        {/* Pipeline status */}
        <div className="col-span-8 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-white flex items-center gap-1">
              <RefreshCw size={11} className="text-[#F4B942] animate-spin" />
              <span>Retry Pipeline: Webhook 200 OK</span>
            </span>
          </div>
          <div className="flex gap-1.5 items-center">
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#F4B942] text-[#111827] font-bold">
              RBAC: Admin
            </span>
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-[#88C999]">
              Auto-Retry Queued
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#E5E7EB]/70">
            Failed: $1,420.00 &rarr; Recovered: $1,269.48
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[#F4B942] border-t border-white/10 pt-1.5">
        <span>Smart Retries &amp; Event Stream</span>
        <span className="text-white">Full-Stack FinTech</span>
      </div>
    </div>
  )
}

export default function FeaturedProjects({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeTag, setActiveTag] = useState(null)

  const handleResetFilter = () => {
    setActiveFilter('all')
    setActiveTag(null)
  }

  // Filter projects by domain category and active tag
  const filteredProjects = projectsData.filter((project) => {
    // 1. Tag filter
    if (activeTag) {
      const matchTag = project.tech.some(
        (t) =>
          t.toLowerCase() === activeTag.toLowerCase() ||
          t.toLowerCase().includes(activeTag.toLowerCase()) ||
          activeTag.toLowerCase().includes(t.toLowerCase())
      )
      if (!matchTag) return false
    }

    // 2. Domain category filter
    if (activeFilter === 'edge-ai') {
      return project.id === 'sahaay-isl-bridge' || project.category.toLowerCase().includes('edge ai')
    }
    if (activeFilter === 'nextjs') {
      return project.id === 'soulful-quartz' || project.category.toLowerCase().includes('commerce')
    }
    if (activeFilter === 'fintech') {
      return project.id === 'recover-iq' || project.category.toLowerCase().includes('fintech')
    }

    return true
  })

  return (
    <section id="work" className="bg-transparent py-16 sm:py-24 border-t-2 border-[#111827] dark:border-white/10 transition-colors duration-200 scroll-mt-24 sm:scroll-mt-28 section-deferred">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] font-mono text-xs font-bold text-[#111827] dark:text-white mb-3">
                <Sparkles size={14} className="text-[#111827] dark:text-[#A79CFF]" />
                <span>FLAGSHIP REPOSITORIES</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] mt-2 max-w-xl">
                Flagship engineering projects spanning edge AI on Qualcomm NPUs, Next.js 15 e-commerce architecture, and FinTech recovery engines.
              </p>
            </div>

            <a
              href="https://github.com/kuntalmanii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[8px] font-mono text-xs font-bold text-[#111827] dark:text-white bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111827] transition-all self-start sm:self-end"
            >
              <GitFork size={15} />
              <span>github.com/kuntalmanii</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </ScrollReveal>

        {/* ── Interactive Tech Stack Matrix & Architecture Filter ── */}
        <ScrollReveal direction="up" delay={50}>
          <TechStackMatrix
            activeFilter={activeFilter}
            activeTag={activeTag}
            onSelectFilter={(filterId) => setActiveFilter(filterId)}
            onSelectTag={(tag) => setActiveTag(tag)}
            onResetFilter={handleResetFilter}
            filteredCount={filteredProjects.length}
            totalCount={projectsData.length}
          />
        </ScrollReveal>

        {/* Two-column responsive card grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => {
            const isLastOdd = idx === projectsData.length - 1 && projectsData.length % 2 !== 0

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={idx * 30}
                className={isLastOdd ? 'md:col-span-2' : ''}
              >
                <article
                  className="h-full bg-white dark:bg-[#161D2E] rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#111827] dark:hover:shadow-[6px_6px_0px_0px_#A79CFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Preview Mockup Container */}
                    <ProjectMockup type={project.previewType} />

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      
                      {/* Top Row: Category + Status Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-[#4B5563] dark:text-[#9CA3AF] uppercase tracking-wider">
                          {project.category}
                        </span>
                        
                        {/* Status Badge */}
                        <span
                          className={`font-mono text-xs font-bold px-3 py-1 rounded-full border border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] ${
                            project.statusVariant === 'primary'
                              ? 'bg-[#A79CFF] text-[#111827]'
                              : project.statusVariant === 'surface'
                              ? 'bg-[#88C999] text-[#111827]'
                              : 'bg-[#F4B942] text-[#111827]'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] dark:text-white leading-tight mb-2.5">
                        {project.title}
                      </h3>

                      {/* Concise description */}
                      <p className="font-mono text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlights bullet points if expanded card */}
                      {isLastOdd && (
                        <div className="grid sm:grid-cols-3 gap-3 mb-5 p-3 rounded-[6px] bg-[#F9F8F5] dark:bg-[#0E131F] border border-[#E5E7EB] dark:border-white/10">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-1.5 font-mono text-[11px] text-[#111827] dark:text-white">
                              <CheckCircle2 size={13} className="text-[#88C999] mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                        {project.tech.map((techItem) => {
                          const isTagSelected =
                            activeTag &&
                            (techItem.toLowerCase().includes(activeTag.toLowerCase()) ||
                              activeTag.toLowerCase().includes(techItem.toLowerCase()))
                          return (
                            <button
                              key={techItem}
                              type="button"
                              onClick={() => setActiveTag(activeTag === techItem ? null : techItem)}
                              title={`Filter projects by #${techItem}`}
                              className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all cursor-pointer select-none ${
                                isTagSelected
                                  ? 'bg-[#F4B942] text-[#111827] border-[#111827] shadow-[2px_2px_0px_0px_#111827] scale-105'
                                  : 'bg-[#F9F8F5] dark:bg-[#0E131F] border-[#111827] dark:border-white/20 text-[#111827] dark:text-white shadow-[1px_1px_0px_0px_#111827] dark:shadow-[1px_1px_0px_0px_#000000] hover:border-[#A79CFF]'
                              }`}
                            >
                              #{techItem}
                            </button>
                          )
                        })}
                      </div>

                    </div>
                  </div>

                  {/* Card Footer: Case Study button + Direct Link to repository */}
                  <div className="px-6 sm:px-7 py-4 bg-[#F9F8F5] dark:bg-[#0E131F] border-t-2 border-[#111827] dark:border-white/20 flex flex-wrap items-center justify-between gap-3">
                    
                    {/* Interactive Case Study Trigger Button */}
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] font-mono text-xs font-bold text-[#111827] dark:text-white bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#A79CFF] dark:hover:bg-[#A79CFF] hover:text-[#111827] dark:hover:text-[#111827] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <FileText size={13} />
                      <span>Case Study</span>
                      <ArrowUpRight size={12} />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] font-mono text-xs font-bold text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer select-none"
                      >
                        <GitFork size={13} />
                        <span>View Repository</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                </article>
              </ScrollReveal>
            )
          })}
        </div>
        ) : (
          <div className="rounded-xl bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-4 my-6">
            <div className="w-12 h-12 rounded-full bg-[#F4B942]/20 border-2 border-[#111827] dark:border-white/20 flex items-center justify-center text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827]">
              <RotateCcw size={20} />
            </div>
            <h3 className="font-display font-black text-xl text-[#111827] dark:text-white">
              No Flagship Repositories Match "{activeTag || activeFilter}"
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] max-w-md">
              Try selecting another architectural domain or reset the filter to view all flagship repositories.
            </p>
            <button
              type="button"
              onClick={handleResetFilter}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] font-mono text-xs font-bold text-[#111827] bg-[#A79CFF] hover:bg-[#F4B942] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] transition-all cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Reset Filter (View All Projects)</span>
            </button>
          </div>
        )}

        {/* Bottom CTA for full GitHub portfolio */}
        <ScrollReveal direction="up" delay={250}>
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-[8px] bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000]">
              <p className="font-mono text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                Interested in more open-source repositories and experiments?
              </p>
              <a
                href="https://github.com/kuntalmanii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] font-display font-bold text-xs sm:text-sm text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111827] transition-all"
              >
                <GitFork size={15} />
                <span>Explore All on GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
