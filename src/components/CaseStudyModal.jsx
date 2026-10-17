import { useState, useEffect } from 'react'
import {
  X,
  GitFork,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Sparkles,
  BarChart3,
  FileCode,
} from 'lucide-react'

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'architecture' | 'features'

  // Handle escape key & lock background scroll
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const cs = project.caseStudy || {}

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 sm:py-8 bg-[#111827]/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#151C2C] text-[#111827] dark:text-[#F9F8F5] rounded-[8px] border-2 border-[#111827] dark:border-[#384358] shadow-[8px_8px_0px_0px_#111827] dark:shadow-[8px_8px_0px_0px_#000000] flex flex-col overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b-2 border-[#111827] dark:border-[#384358] bg-[#F9F8F5] dark:bg-[#0E131F] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-[6px] border-2 border-[#111827] dark:border-white/30 flex items-center justify-center font-display font-black text-lg text-[#111827]"
              style={{ backgroundColor: project.accentColor }}
            >
              ✦
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#4B5563] dark:text-[#9CA3AF]">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-[#1E2638] border border-[#111827] dark:border-white/20 text-[#111827] dark:text-white">
                  {project.status}
                </span>
              </div>
              <h2
                id="case-study-title"
                className="font-display font-black text-xl sm:text-2xl text-[#111827] dark:text-white tracking-tight"
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Close button with ESC indicator */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-white dark:bg-[#1E2638] border-2 border-[#111827] dark:border-white/30 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#F4B942] dark:hover:bg-[#F4B942] hover:text-[#111827] transition-all cursor-pointer"
          >
            <span className="hidden sm:inline font-mono text-xs font-bold">ESC</span>
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-5 sm:px-6 pt-3 pb-2 border-b border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#151C2C]">
          {[
            { id: 'overview', label: 'Overview & Problem', icon: Sparkles },
            { id: 'architecture', label: 'Technical Architecture', icon: Layers },
            { id: 'features', label: 'Key Innovations & Metrics', icon: BarChart3 },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 font-mono text-xs font-bold px-3 py-2 rounded-[6px] transition-all cursor-pointer ${
                activeTab === id
                  ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] shadow-[2px_2px_0px_0px_#F4B942]'
                  : 'text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:bg-[#F9F8F5] dark:hover:bg-[#1E2638]'
              }`}
            >
              <Icon size={14} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Subtitle / Tagline Banner */}
          {cs.tagline && (
            <div className="p-3.5 rounded-[6px] bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 font-mono text-xs font-bold text-[#111827] dark:text-[#A79CFF] flex items-center gap-2">
              <span className="text-base">✦</span>
              <span>{cs.tagline}</span>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Problem Section */}
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-base text-[#111827] dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span>The Engineering Problem</span>
                </h3>
                <div className="p-4 rounded-[8px] bg-red-500/5 border border-red-500/20 font-mono text-xs sm:text-sm text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
                  {cs.problem}
                </div>
              </div>

              {/* Solution Section */}
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-base text-[#111827] dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#88C999]" />
                  <span>The Architectural Solution</span>
                </h3>
                <div className="p-4 rounded-[8px] bg-[#88C999]/10 border border-[#88C999]/30 font-mono text-xs sm:text-sm text-[#111827] dark:text-white leading-relaxed">
                  {cs.solution}
                </div>
              </div>

              {/* Metrics Grid */}
              {cs.metrics && (
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-base text-[#111827] dark:text-white">
                    Verified Outcomes &amp; Benchmarks
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cs.metrics.map(({ label, value }) => (
                      <div
                        key={label}
                        className="p-3.5 rounded-[6px] bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 text-center"
                      >
                        <span className="block font-display font-black text-xl sm:text-2xl text-[#111827] dark:text-[#F4B942]">
                          {value}
                        </span>
                        <span className="block font-mono text-[10px] text-[#4B5563] dark:text-[#9CA3AF] mt-0.5 uppercase tracking-wider">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-base text-[#111827] dark:text-white flex items-center gap-2">
                  <Layers size={16} className="text-[#A79CFF]" />
                  <span>Pipeline Execution Breakdown</span>
                </h3>
                <div className="space-y-2.5">
                  {cs.architecture?.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-[6px] bg-[#F9F8F5] dark:bg-[#0E131F] border border-[#111827]/30 dark:border-white/15 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold w-6 h-6 rounded-full bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="font-mono text-xs sm:text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Breakdown */}
              {cs.stackBreakdown && (
                <div className="space-y-3 pt-2">
                  <h3 className="font-display font-extrabold text-base text-[#111827] dark:text-white flex items-center gap-2">
                    <FileCode size={16} className="text-[#F4B942]" />
                    <span>Technical Stack by Layer</span>
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {Object.entries(cs.stackBreakdown).map(([category, items]) => (
                      <div
                        key={category}
                        className="p-3.5 rounded-[6px] bg-white dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
                      >
                        <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A79CFF] dark:text-[#A79CFF] mb-2">
                          {category}
                        </h4>
                        <ul className="space-y-1">
                          {items.map((it) => (
                            <li key={it} className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                              <span className="text-[#88C999]">&bull;</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid sm:grid-cols-2 gap-3.5">
                {cs.keyFeatures?.map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-[6px] bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 size={16} className="text-[#88C999]" />
                        <h4 className="font-display font-bold text-sm text-[#111827] dark:text-white">
                          {f.title}
                        </h4>
                      </div>
                      <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t-2 border-[#111827] dark:border-[#384358] bg-[#F9F8F5] dark:bg-[#0E131F] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF]">
              Repository:
            </span>
            <span className="font-mono text-xs font-bold text-[#111827] dark:text-white truncate max-w-[200px] sm:max-w-xs">
              {project.githubUrl.replace('https://github.com/', '')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-[6px] font-mono text-xs font-bold text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] font-mono text-xs font-bold text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer"
            >
              <GitFork size={14} />
              <span>Explore Code on GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
