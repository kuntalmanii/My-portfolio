import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Sun,
  Moon,
  Terminal,
  FileText,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const progressBarRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home', num: '01', href: '#home' },
    { id: 'work', label: 'Work', num: '02', href: '#work' },
    { id: 'playground', label: 'Playground', num: '03', href: '#playground' },
    { id: 'contact', label: 'Contact', num: '04', href: '#contact' },
  ]

  // Track active section efficiently using native IntersectionObserver (no layout recalculations on scroll)
  useEffect(() => {
    const sectionIds = ['home', 'work', 'playground', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // High-performance RAF scroll tracker for dock shadow & progress bar (zero React re-renders during scroll)
  useEffect(() => {
    let rafId = null

    const updateScrollMetrics = () => {
      const currentScroll = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (progressBarRef.current && scrollHeight > 0) {
        const pct = Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100))
        progressBarRef.current.style.width = `${pct}%`
      }

      const isPast = currentScroll > 20
      setIsScrolled((prev) => (prev !== isPast ? isPast : prev))
      rafId = null
    }

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateScrollMetrics)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScrollMetrics()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Close mobile drawer on Escape key or window resize >= 768px
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenuOpen])

  // Smooth scroll handler
  const handleNavClick = useCallback((e, href, id) => {
    e.preventDefault()
    setActiveSection(id)
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-2.5 sm:pt-4 transition-all duration-300">
        
        {/* Floating Island Navbar Dock */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className={`max-w-6xl mx-auto rounded-xl sm:rounded-2xl bg-[#F9F8F5]/90 dark:bg-[#0E131F]/90 backdrop-blur-xl border-2 border-[#111827] dark:border-white/20 transition-all duration-200 px-3 sm:px-5 h-16 sm:h-[4.25rem] flex items-center justify-between relative overflow-hidden ${
            isScrolled
              ? 'shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000]'
              : 'shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000]'
          }`}
        >
          {/* Live Scroll Reading Progress Indicator Line with zero-rerender ref */}
          <div
            ref={progressBarRef}
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#A79CFF] via-[#F4B942] to-[#88C999] pointer-events-none w-0"
            style={{ willChange: 'width' }}
            aria-hidden="true"
          />

          {/* ── Brand Logo / Monogram Block ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="group flex items-center gap-2.5 sm:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#A79CFF] rounded-lg shrink-0"
            aria-label="Manish Kuntal — Portfolio Home"
          >
            <div className="relative">
              {/* Monogram Box with tactile hover press & tilt */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-[#111827] dark:bg-white text-white dark:text-[#111827] flex items-center justify-center font-display font-black text-sm sm:text-base tracking-wider border-2 border-[#111827] dark:border-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] group-hover:-rotate-3 group-hover:scale-105 group-active:translate-x-0.5 group-active:translate-y-0.5 transition-all">
                MK
              </div>
              {/* Floating Accent Dot */}
              <span
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F4B942] border-2 border-[#111827] dark:border-white shadow-[1px_1px_0px_0px_#111827] group-hover:scale-125 transition-transform"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-sm sm:text-base text-[#111827] dark:text-white tracking-tight leading-tight flex items-center gap-2">
                <span>Manish Kuntal</span>
                {/* Live Availability Badge */}
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#88C999]/20 border border-[#88C999]/50 text-[#111827] dark:text-[#88C999] text-[9px] font-mono font-bold tracking-wider"
                  title="Available for engineering contracts"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#88C999] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#88C999]" />
                  </span>
                  <span>AVAILABLE</span>
                </span>
                {/* Mobile pulsing dot */}
                <span className="sm:hidden relative flex h-2 w-2" title="Available for hire">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#88C999] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#88C999] border border-[#111827]" />
                </span>
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#4B5563] dark:text-[#9CA3AF] tracking-widest uppercase">
                Product Dev &bull; Full-Stack
              </span>
            </div>
          </a>

          {/* ── Center Nav Items Capsule (Tablet & Desktop: md+) ── */}
          <ul
            role="menubar"
            aria-label="Navigation Links"
            className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-[#161D2E]/90 p-1 rounded-full border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
          >
            {navItems.map(({ id, label, num, href }) => {
              const isActive = activeSection === id
              return (
                <li key={id} role="none">
                  <a
                    href={href}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => handleNavClick(e, href, id)}
                    className={`font-mono text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-150 inline-flex items-center gap-1.5 select-none relative ${
                      isActive
                        ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] shadow-[2px_2px_0px_0px_#F4B942]'
                        : 'text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                  >
                    <span className={`text-[10px] ${isActive ? 'opacity-70' : 'opacity-40'}`}>
                      {num}
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ── Right Side Controls & Actions (md+) ── */}
          <div className="hidden md:flex items-center gap-2">
            {/* ATS Resume Drawer Launcher (R) */}
            <button
              type="button"
              onClick={onOpenResume}
              aria-label="Open ATS Resume and Profile (R)"
              title="View ATS Resume & Credentials (R)"
              className="group flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#88C999] hover:text-[#111827] dark:hover:bg-[#88C999] dark:hover:text-[#111827] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer font-mono text-xs font-bold"
            >
              <FileText size={14} className="text-[#88C999] group-hover:text-[#111827] group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <span className="hidden xl:inline text-[9px] px-1 py-0.5 rounded bg-[#88C999] text-[#111827] font-mono font-bold">
                ATS
              </span>
            </button>

            {/* Interactive Terminal Quick Launcher */}
            <button
              type="button"
              onClick={onOpenTerminal}
              aria-label="Open Interactive Developer Terminal"
              title="Launch Terminal Shell ( ` )"
              className="group flex items-center justify-center p-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#88C999] hover:text-[#111827] dark:hover:bg-[#88C999] dark:hover:text-[#111827] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer"
            >
              <Terminal size={15} className="group-hover:rotate-6 transition-transform" />
            </button>

            {/* Theme Toggle Button (Sun / Moon) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Toggle Theme (T) — Currently ${theme.toUpperCase()}`}
              className="group flex items-center justify-center p-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#F4B942] hover:text-[#111827] dark:hover:bg-[#F4B942] dark:hover:text-[#111827] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun size={15} className="group-hover:rotate-45 transition-transform text-[#F4B942]" />
              ) : (
                <Moon size={15} className="group-hover:-rotate-12 transition-transform text-[#111827]" />
              )}
            </button>

            {/* "Let's talk" Pill CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="group inline-flex items-center gap-1.5 lg:gap-2 px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full font-display font-bold text-xs sm:text-sm text-[#111827] bg-[#A79CFF] hover:bg-[#F4B942] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#111827] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer shrink-0 ml-1"
            >
              <Sparkles size={13} className="text-[#111827] group-hover:rotate-12 transition-transform" />
              <span>Let's talk</span>
              <ArrowUpRight size={13} className="text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* ── Mobile Action Cluster (< md) ── */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Quick Resume */}
            <button
              type="button"
              onClick={onOpenResume}
              aria-label="Open ATS Resume"
              title="View Resume (R)"
              className="p-2 rounded-[6px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#88C999] hover:bg-[#88C999] hover:text-[#111827] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5 transition-all"
            >
              <FileText size={14} />
            </button>

            {/* Quick Terminal */}
            <button
              type="button"
              onClick={onOpenTerminal}
              aria-label="Open Terminal"
              className="p-2 rounded-[6px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5 transition-all"
            >
              <Terminal size={14} />
            </button>

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-[6px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5 transition-all"
            >
              {theme === 'dark' ? <Sun size={14} className="text-[#F4B942]" /> : <Moon size={14} />}
            </button>

            {/* Mobile Menu Hamburger / Close */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5 transition-all cursor-pointer ml-0.5 ${
                isMobileMenuOpen ? 'bg-[#111827] text-white dark:bg-white dark:text-[#111827]' : 'bg-[#F4B942] text-[#111827]'
              }`}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </nav>

        {/* ── Polished Mobile Dropdown Drawer (< md) ── */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-xl bg-[#F9F8F5] dark:bg-[#0E131F] border-2 border-[#111827] dark:border-white/20 shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#000000] p-4 sm:p-5 flex flex-col gap-3.5 animate-fade-in relative z-50">
            
            {/* Quick status pill */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] dark:border-white/10">
              <span className="font-mono text-xs font-bold text-[#4B5563] dark:text-[#9CA3AF] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#88C999] animate-pulse" />
                <span>Available for contracts</span>
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#88C999] text-[#111827] font-bold">
                Q2/Q3 2026
              </span>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-2" role="menu">
              {navItems.map(({ id, label, num, href }) => {
                const isActive = activeSection === id
                return (
                  <li key={id} role="none">
                    <a
                      href={href}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                      onClick={(e) => handleNavClick(e, href, id)}
                      className={`font-mono text-sm font-bold px-4 py-2.5 rounded-[8px] border-2 transition-all flex items-center justify-between select-none ${
                        isActive
                          ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] border-[#111827] shadow-[3px_3px_0px_0px_#F4B942]'
                          : 'bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white border-[#E5E7EB] dark:border-white/15 hover:border-[#111827]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-xs ${isActive ? 'opacity-70' : 'opacity-40'}`}>
                          {num}
                        </span>
                        <span>{label}</span>
                      </div>
                      <span className="font-mono text-xs opacity-60">→</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Quick Actions Grid in Drawer */}
            <div className="pt-2 border-t border-[#E5E7EB] dark:border-white/10 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setTimeout(() => onOpenResume(), 120)
                }}
                className="w-full flex items-center justify-between p-3 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-[#88C999] text-[#111827] font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#111827] active:translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText size={15} />
                  <span>View ATS Resume &amp; Profile</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-white text-[#111827] border border-[#111827] text-[10px]">
                  ATS Ready
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setTimeout(() => onOpenTerminal(), 120)
                }}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] active:translate-y-0.5 cursor-pointer"
              >
                <Terminal size={13} className="text-[#88C999]" />
                <span>Interactive Terminal ( ` )</span>
              </button>
            </div>

          {/* Direct Full-Width CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-[8px] font-display font-bold text-sm text-[#111827] bg-[#A79CFF] hover:bg-[#F4B942] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Sparkles size={15} />
              <span>Let's work together</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}

      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-30 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
