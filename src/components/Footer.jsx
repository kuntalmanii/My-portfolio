import { useState, useEffect } from 'react'
import {
  Copy,
  Check,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  Terminal,
  Command,
  Clock,
  MapPin,
  Radio,
  ShieldCheck,
  Sun,
  Moon,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { useTheme } from '../context/ThemeContext'

const CURRENT_YEAR = new Date().getFullYear()

// Official SVG Brand Logos for pixel-perfect presentation
function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74V9.93H5.07v8.57h2.78z" />
    </svg>
  )
}

export default function Footer({ onOpenTerminal, onOpenCommandPalette }) {
  const [copied, setCopied] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const { theme, toggleTheme } = useTheme()
  const emailAddress = 'kuntalmani12@gmail.com'

  // Live ticking clock in IST (Asia/Kolkata)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setCurrentTime(formatter.format(now))
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2500)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      id="contact"
      className="bg-transparent border-t-2 border-[#111827] dark:border-white/10 transition-colors duration-200 scroll-mt-24 sm:scroll-mt-28 relative section-deferred"
    >
      {/* ── Main Footer Container ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 flex flex-col gap-16 sm:gap-20">
        
        {/* ── 1. The Callout Section Card ("Let's work together") ── */}
        <ScrollReveal direction="up" delay={0}>
          <div className="relative rounded-2xl bg-white/95 dark:bg-[#161D2E]/95 backdrop-blur-md border-2 border-[#111827] dark:border-white/20 shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-10 lg:p-14 overflow-hidden">
            
            {/* Subtle retro dot matrix backdrop */}
            <div
              className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] dark:bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column: Heading, Value Proposition & Direct CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                
                {/* Live Availability Signal */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#88C999]/20 border-2 border-[#111827] dark:border-white/30 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] font-mono text-xs font-bold text-[#111827] dark:text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#88C999] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#88C999]" />
                  </span>
                  <span>AVAILABLE FOR CONTRACTS &amp; ROLES</span>
                </div>

                {/* Display Headline */}
                <div>
                  <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4B5563] dark:text-[#9CA3AF] mb-2 flex items-center gap-2">
                    <Sparkles size={14} className="text-[#A79CFF]" />
                    <span>04 // GET IN TOUCH</span>
                  </p>
                  <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#111827] dark:text-white tracking-tight leading-[1.05]">
                    Let's work together.
                  </h2>
                </div>

                {/* Description */}
                <p className="font-mono text-sm sm:text-base text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed max-w-xl">
                  From high-velocity frontend architectures and on-device Edge AI to performant full-stack systems — I build software with obsessive craft and speed. My inbox is always open.
                </p>

                {/* Action Buttons Cluster */}
                <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
                  
                  {/* Direct "Send an Email" link button */}
                  <a
                    href={`mailto:${emailAddress}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] font-display font-bold text-sm sm:text-base text-[#111827] bg-[#F4B942] hover:bg-[#F4B942]/90 border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer select-none"
                  >
                    <Mail size={18} />
                    <span>Send an Email</span>
                    <ArrowUpRight size={18} />
                  </a>

                  {/* Interactive 1-Click Copy Email button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-live="polite"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[8px] font-mono text-xs sm:text-sm font-bold border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer select-none ${
                      copied
                        ? 'bg-[#88C999] text-[#111827]'
                        : 'bg-white dark:bg-[#0E131F] text-[#111827] dark:text-white'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check size={16} />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="text-[#A79CFF]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  {/* Interactive Terminal Trigger */}
                  {onOpenTerminal && (
                    <button
                      type="button"
                      onClick={onOpenTerminal}
                      title="Launch Developer CLI ( ` )"
                      className="inline-flex items-center gap-2 px-4 py-3.5 rounded-[8px] font-mono text-xs font-bold text-[#111827] dark:text-white bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 hover:bg-[#A79CFF] hover:text-[#111827] dark:hover:bg-[#A79CFF] dark:hover:text-[#111827] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <Terminal size={15} />
                      <span className="hidden sm:inline">Developer CLI</span>
                    </button>
                  )}

                </div>

                <div className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                  <span>Direct inbox:</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-[#111827] dark:text-white font-bold underline decoration-[#A79CFF] underline-offset-4 hover:text-[#A79CFF] transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>

              </div>

              {/* Right Column: Live Developer Telemetry & Status Card */}
              <div className="lg:col-span-5 w-full">
                <div className="rounded-xl bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] p-5 sm:p-6 flex flex-col gap-4">
                  
                  {/* Telemetry Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] dark:border-white/10">
                    <span className="font-mono text-xs font-bold text-[#111827] dark:text-white flex items-center gap-2">
                      <Radio size={14} className="text-[#88C999] animate-pulse" />
                      <span>LIVE TELEMETRY</span>
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#88C999]/20 text-[#88C999] font-bold border border-[#88C999]/30">
                      ONLINE
                    </span>
                  </div>

                  {/* Telemetry Grid Stats */}
                  <div className="flex flex-col gap-3 font-mono text-xs">
                    
                    {/* Live Clock */}
                    <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-white dark:bg-[#161D2E] border border-[#E5E7EB] dark:border-white/10">
                      <span className="text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                        <Clock size={13} className="text-[#A79CFF]" />
                        <span>Local Time (IST):</span>
                      </span>
                      <span className="font-bold text-[#111827] dark:text-white">
                        {currentTime || 'Loading...'}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-white dark:bg-[#161D2E] border border-[#E5E7EB] dark:border-white/10">
                      <span className="text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#F4B942]" />
                        <span>Based in:</span>
                      </span>
                      <span className="font-bold text-[#111827] dark:text-white">
                        New Delhi, India (Remote)
                      </span>
                    </div>

                    {/* Response SLA */}
                    <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-white dark:bg-[#161D2E] border border-[#E5E7EB] dark:border-white/10">
                      <span className="text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-[#88C999]" />
                        <span>Response Time:</span>
                      </span>
                      <span className="font-bold text-[#88C999]">
                        &lt; 12 Hours SLA
                      </span>
                    </div>

                    {/* Current Focus */}
                    <div className="py-2 px-2.5 rounded bg-white dark:bg-[#161D2E] border border-[#E5E7EB] dark:border-white/10 flex flex-col gap-1">
                      <span className="text-[11px] text-[#4B5563] dark:text-[#9CA3AF] uppercase tracking-wider font-bold">
                        Current Engineering Focus:
                      </span>
                      <p className="text-[11px] text-[#111827] dark:text-white font-mono leading-relaxed">
                        Snapdragon NPU Edge AI &bull; Next.js 15 Full-Stack &bull; High-Performance Web UI
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* ── 2. Senior Developer Sitemap & Multi-Column Directory ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pt-4 border-t-2 border-[#111827] dark:border-white/15">
          
          {/* Column 1: Navigation / Anchor Sections */}
          <div className="flex flex-col gap-3 font-mono">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A79CFF]" />
              <span>Navigation</span>
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#4B5563] dark:text-[#9CA3AF]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="opacity-40">01.</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, '#work')}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="opacity-40">02.</span> Work / Repositories
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  onClick={(e) => handleNavClick(e, '#capabilities')}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="opacity-40">03.</span> Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#playground"
                  onClick={(e) => handleNavClick(e, '#playground')}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="opacity-40">04.</span> Playground &amp; Labs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="opacity-40">05.</span> Contact &amp; Pitch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Flagship Open Source Repositories */}
          <div className="flex flex-col gap-3 font-mono">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#88C999]" />
              <span>Flagship Repos</span>
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#4B5563] dark:text-[#9CA3AF]">
              <li>
                <a
                  href="https://github.com/kuntalmanii/saahay-HP-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Sahaay (सहाय) ISL AI</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kuntalmanii/Soulfulquartz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>SoulfulQuartz Next.js 15</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kuntalmanii/Razorpay-buildathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>RecoverIQ FinTech Engine</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://github.com/kuntalmanii?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A79CFF] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>View All 30+ Repos &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Developer Tools & Shortcuts */}
          <div className="flex flex-col gap-3 font-mono">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
              <span>Developer Shortcuts</span>
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#4B5563] dark:text-[#9CA3AF]">
              <li>
                <button
                  type="button"
                  onClick={onOpenCommandPalette}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Command size={12} className="text-[#A79CFF]" />
                  <span>Command Palette (⌘K)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Terminal size={12} className="text-[#88C999]" />
                  <span>Interactive Shell ( ` )</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  {theme === 'dark' ? (
                    <Sun size={12} className="text-[#F4B942]" />
                  ) : (
                    <Moon size={12} className="text-[#111827]" />
                  )}
                  <span>Switch Theme ({theme === 'dark' ? 'Light' : 'Dark'})</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ArrowUp size={12} className="text-[#F4B942]" />
                  <span>Elevator (Back to Top)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Presence & Links */}
          <div className="flex flex-col gap-3 font-mono">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A79CFF]" />
              <span>Connect</span>
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#4B5563] dark:text-[#9CA3AF]">
              <li>
                <a
                  href="https://github.com/kuntalmanii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <GithubIcon className="w-4 h-4 text-[#111827] dark:text-white group-hover:scale-110 transition-transform" />
                  <span>GitHub (@kuntalmanii)</span>
                  <ArrowUpRight size={12} className="opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/manish-kuntal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn (/in/manish-kuntal)</span>
                  <ArrowUpRight size={12} className="opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${emailAddress}`}
                  className="hover:text-[#111827] dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} className="text-[#F4B942]" />
                  <span>Email Directly</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* ── 3. Bottom Colophon & Architecture Spec Bar ── */}
      <div className="bg-[#111827] dark:bg-[#090D16] text-white border-t-2 border-[#111827] dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Brand Monogram + Copyright */}
          <div className="flex items-center gap-3 select-none">
            <button
              type="button"
              onClick={scrollToTop}
              title="Click to scroll to top"
              className="w-8 h-8 rounded-[6px] bg-[#A79CFF] text-[#111827] font-display font-black text-sm flex items-center justify-center border-2 border-white/80 shadow-[2px_2px_0px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              MK
            </button>
            <p className="font-mono text-xs text-[#E5E7EB]">
              &copy; {CURRENT_YEAR} Manish Kuntal &bull; Product Developer &amp; Designer
            </p>
          </div>

          {/* Center: Architecture & Stack Badge */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#9CA3AF] text-center">
            <span className="w-2 h-2 rounded-full bg-[#88C999] animate-pulse" />
            <span>Built with React 19 &bull; Vite &bull; Tailwind CSS v4 &bull; 60 FPS</span>
          </div>

          {/* Right: Tactile Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of the page"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#161D2E] hover:bg-[#F4B942] hover:text-[#111827] border border-white/20 font-mono text-xs font-bold text-white transition-all cursor-pointer shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>

    </footer>
  )
}
