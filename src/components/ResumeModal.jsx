import { useState, useEffect } from 'react'
import {
  X,
  Printer,
  Copy,
  Check,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  MapPin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Terminal,
} from 'lucide-react'
import { resumeData, generateAtsPlainText } from '../data/resumeData'

function GithubIcon({ size = 12, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function LinkedinIcon({ size = 12, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74V9.93H5.07v8.57h2.78z" />
    </svg>
  )
}

export default function ResumeModal({ isOpen, onClose, onOpenTerminal }) {
  const [activeView, setActiveView] = useState('sheet') // 'sheet' | 'raw'
  const [copiedAts, setCopiedAts] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopyAts = async () => {
    try {
      const atsText = generateAtsPlainText()
      await navigator.clipboard.writeText(atsText)
      setCopiedAts(true)
      setTimeout(() => setCopiedAts(false), 2000)
    } catch (err) {
      console.error('Failed to copy ATS text:', err)
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.personal.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 1800)
    } catch (err) {
      console.error(err)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadTxt = () => {
    const atsText = generateAtsPlainText()
    const blob = new Blob([atsText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `Manish_Kuntal_Resume_ATS.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const p = resumeData.personal

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Background click dismiss */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Resume Modal Container */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[12px] border-2 sm:border-[3px] border-[#111827] dark:border-white/20 bg-[#F9F8F5] dark:bg-[#0E131F] shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#000000] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Retro-Brutalist Toolbar */}
        <header className="px-4 sm:px-6 py-3.5 bg-white dark:bg-[#161D2E] border-b-2 border-[#111827] dark:border-white/15 flex flex-wrap items-center justify-between gap-3 shrink-0 print:hidden">
          {/* Title & Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[6px] bg-[#A79CFF] border-2 border-[#111827] flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#111827]">
              <FileText size={16} className="text-[#111827]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2
                  id="resume-modal-title"
                  className="font-display font-black text-sm sm:text-base text-[#111827] dark:text-white"
                >
                  Manish Kuntal — Resume
                </h2>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#88C999] text-[#111827] border border-[#111827]">
                  ATS Ready
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#4B5563] dark:text-[#9CA3AF] hidden sm:block">
                Recruiter &amp; Engineering Manager Brief
              </p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-0.5 rounded-[6px] bg-[#F9F8F5] dark:bg-black/30 border border-[#111827]/30 dark:border-white/20">
            <button
              type="button"
              onClick={() => setActiveView('sheet')}
              className={`px-2.5 py-1 rounded-[4px] font-mono text-xs font-bold transition-all ${
                activeView === 'sheet'
                  ? 'bg-[#111827] text-white dark:bg-white dark:text-[#111827] shadow-[1px_1px_0px_0px_#111827]'
                  : 'text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              Formatted View
            </button>
            <button
              type="button"
              onClick={() => setActiveView('raw')}
              className={`px-2.5 py-1 rounded-[4px] font-mono text-xs font-bold transition-all flex items-center gap-1 ${
                activeView === 'raw'
                  ? 'bg-[#111827] text-white dark:bg-white dark:text-[#111827] shadow-[1px_1px_0px_0px_#111827]'
                  : 'text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              <span>Plaintext ATS</span>
            </button>
          </div>

          {/* Action Buttons Cluster */}
          <div className="flex items-center gap-2">
            {/* Copy for ATS */}
            <button
              type="button"
              onClick={handleCopyAts}
              title="Copy clean plaintext for applicant tracking systems & job forms"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-mono text-xs font-bold bg-[#A79CFF] hover:bg-[#F4B942] text-[#111827] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              {copiedAts ? (
                <>
                  <Check size={13} className="text-[#111827]" />
                  <span>Copied ATS!</span>
                </>
              ) : (
                <>
                  <Copy size={13} className="text-[#111827]" />
                  <span className="hidden sm:inline">Copy for ATS</span>
                  <span className="sm:hidden">Copy</span>
                </>
              )}
            </button>

            {/* Print / Save PDF */}
            <button
              type="button"
              onClick={handlePrint}
              title="Print or Save as Clean PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-mono text-xs font-bold bg-white dark:bg-[#161D2E] hover:bg-[#88C999] hover:text-[#111827] dark:hover:bg-[#88C999] dark:hover:text-[#111827] text-[#111827] dark:text-white border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-[6px] text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar">
          {activeView === 'sheet' ? (
            /* ── VIEW 1: FORMATTED INTERACTIVE RESUME SHEET ── */
            <article
              id="printable-resume-container"
              className="w-full bg-white dark:bg-[#161D2E] rounded-[8px] border-2 border-[#111827] dark:border-white/20 p-6 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] transition-colors"
            >
              {/* Header / Contact Info */}
              <div className="border-b-2 border-[#111827] dark:border-white/20 pb-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-[#111827] dark:text-white tracking-tight">
                      {p.name}
                    </h1>
                    <p className="font-mono text-sm sm:text-base font-bold text-[#A79CFF] dark:text-[#A79CFF] mt-1">
                      {p.title}
                    </p>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] mt-1.5">
                      <MapPin size={13} className="text-[#F4B942]" />
                      <span>{p.location}</span>
                      <span className="mx-1">•</span>
                      <span className="text-[#88C999] font-bold">
                        ✦ {p.availability}
                      </span>
                    </div>
                  </div>

                  {/* Contact Links Pill Group */}
                  <div className="flex flex-wrap md:flex-col items-start gap-2 font-mono text-xs">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F9F8F5] dark:bg-black/30 border border-[#111827]/20 dark:border-white/15 text-[#111827] dark:text-white hover:border-[#111827] transition-all cursor-pointer"
                    >
                      <Mail size={12} className="text-[#A79CFF]" />
                      <span>{p.email}</span>
                      {copiedEmail ? (
                        <Check size={11} className="text-[#88C999] ml-1" />
                      ) : (
                        <span className="text-[10px] text-[#4B5563] dark:text-[#9CA3AF]">
                          (copy)
                        </span>
                      )}
                    </button>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F9F8F5] dark:bg-black/30 border border-[#111827]/20 dark:border-white/15 text-[#111827] dark:text-white hover:text-[#A79CFF] transition-all"
                    >
                      <GithubIcon size={12} />
                      <span>{p.githubDisplay}</span>
                      <ExternalLink size={10} className="opacity-60" />
                    </a>

                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F9F8F5] dark:bg-black/30 border border-[#111827]/20 dark:border-white/15 text-[#111827] dark:text-white hover:text-[#A79CFF] transition-all"
                    >
                      <LinkedinIcon size={12} />
                      <span>{p.linkedinDisplay}</span>
                      <ExternalLink size={10} className="opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 1: Executive Summary */}
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A79CFF] border border-[#111827]" />
                  <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#111827] dark:text-white">
                    Executive Profile
                  </h3>
                </div>
                <p className="font-mono text-xs sm:text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed bg-[#F9F8F5] dark:bg-black/20 p-4 rounded-[6px] border border-[#E5E7EB] dark:border-white/10">
                  {resumeData.summary}
                </p>
              </section>

              {/* Section 2: Flagship Engineering Projects & Hackathons */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942] border border-[#111827]" />
                    <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#111827] dark:text-white">
                      Flagship Projects &amp; Hackathon Accolades
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#4B5563] dark:text-[#9CA3AF]">
                    3 Flagship Repositories
                  </span>
                </div>

                <div className="space-y-6">
                  {resumeData.flagshipProjects.map((proj) => (
                    <div
                      key={proj.name}
                      className="p-4 sm:p-5 rounded-[8px] bg-[#F9F8F5] dark:bg-black/20 border-2 border-[#111827] dark:border-white/15 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#E5E7EB] dark:border-white/10">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-display font-bold text-base text-[#111827] dark:text-white">
                              {proj.name}
                            </h4>
                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F4B942] text-[#111827] border border-[#111827]">
                              {proj.badge}
                            </span>
                          </div>
                          <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] mt-0.5">
                            {proj.role} • {proj.subtitle} ({proj.period})
                          </p>
                        </div>

                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#111827] dark:text-white hover:text-[#A79CFF] dark:hover:text-[#A79CFF] underline underline-offset-4 self-start"
                        >
                          <span>Repository</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>

                      <ul className="space-y-1.5 mt-3">
                        {proj.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 font-mono text-xs text-[#374151] dark:text-[#D1D5DB] leading-relaxed"
                          >
                            <span className="text-[#88C999] font-bold shrink-0 mt-0.5">
                              ▸
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Technical Competencies Grid */}
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#88C999] border border-[#111827]" />
                  <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#111827] dark:text-white">
                    Core Technical Competencies
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resumeData.competencies.map((comp) => (
                    <div
                      key={comp.domain}
                      className="p-3.5 rounded-[6px] bg-[#F9F8F5] dark:bg-black/20 border border-[#E5E7EB] dark:border-white/10"
                    >
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#A79CFF] dark:text-[#A79CFF] mb-2">
                        {comp.domain}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {comp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white border border-[#111827]/15 dark:border-white/10 shadow-[1px_1px_0px_0px_#111827] dark:shadow-[1px_1px_0px_0px_#000000]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Education & Honors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t-2 border-[#111827] dark:border-white/20">
                {/* Education */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={15} className="text-[#A79CFF]" />
                    <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#111827] dark:text-white">
                      Education
                    </h3>
                  </div>
                  {resumeData.education.map((edu) => (
                    <div key={edu.degree} className="space-y-1">
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#111827] dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF]">
                        {edu.institution} ({edu.period})
                      </p>
                      <p className="font-mono text-[11px] text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                        Focus: {edu.focus}
                      </p>
                    </div>
                  ))}
                </section>

                {/* Key Honors */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={15} className="text-[#F4B942]" />
                    <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#111827] dark:text-white">
                      Honors &amp; Recognition
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {resumeData.honors.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-mono text-xs text-[#374151] dark:text-[#D1D5DB]"
                      >
                        <span className="text-[#F4B942] font-bold shrink-0">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          ) : (
            /* ── VIEW 2: ATS RAW PLAINTEXT VIEW ── */
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-[6px] bg-[#A79CFF]/15 border border-[#A79CFF] font-mono text-xs text-[#111827] dark:text-white">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#A79CFF]" />
                  <span>
                    <strong>ATS Plaintext Format:</strong> Optimized for Workday, Greenhouse, Lever &amp; Taleo parsing engines.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadTxt}
                  className="inline-flex items-center gap-1 font-bold underline hover:text-[#A79CFF]"
                >
                  <Download size={12} />
                  <span>Download .txt</span>
                </button>
              </div>

              <div className="relative rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-[#111827] text-[#88C999] p-4 sm:p-6 font-mono text-xs leading-relaxed overflow-x-auto shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000]">
                <pre className="whitespace-pre-wrap selection:bg-[#A79CFF] selection:text-[#111827]">
                  {generateAtsPlainText()}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions bar */}
        <footer className="px-4 sm:px-6 py-3 bg-[#F9F8F5] dark:bg-[#161D2E] border-t-2 border-[#111827] dark:border-white/15 flex flex-wrap items-center justify-between gap-3 font-mono text-xs print:hidden">
          <div className="flex items-center gap-2 text-[#4B5563] dark:text-[#9CA3AF]">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-black/40 border border-[#111827]/30 dark:border-white/20 text-[10px] font-bold text-[#111827] dark:text-white">
              Esc
            </kbd>
            <span>to close</span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenTerminal && (
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenTerminal()
                }}
                className="inline-flex items-center gap-1.5 text-[#111827] dark:text-white hover:text-[#A79CFF] transition-colors cursor-pointer"
              >
                <Terminal size={13} />
                <span>Open in Terminal (`resume`)</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleCopyAts}
              className="font-bold text-[#111827] dark:text-white hover:text-[#A79CFF] transition-colors cursor-pointer"
            >
              {copiedAts ? '✓ Copied to Clipboard' : 'Copy Full ATS Text'}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
