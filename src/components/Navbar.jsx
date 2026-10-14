import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home')
  const [lang, setLang] = useState('EN')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Playground', href: '#playground' },
    { label: 'Contact', href: '#contact' },
  ]

  // Automatically close mobile menu when viewport expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F5]/80 backdrop-blur-md border-b border-[#E5E7EB] transition-all duration-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand logo on the left with monogram "MK" and an accent dot */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#A79CFF] rounded-lg"
          onClick={() => setActiveTab('Home')}
          aria-label="Manish Kuntal Portfolio Home"
        >
          <div className="relative">
            {/* Monogram Box */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#111827] text-white flex items-center justify-center font-display font-black text-base sm:text-lg tracking-wider border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] group-hover:shadow-[1px_1px_0px_0px_#111827] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
              MK
            </div>
            {/* Accent Dot overlay on monogram */}
            <span 
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#F4B942] border-2 border-[#111827] shadow-[1px_1px_0px_0px_#111827] group-hover:scale-110 transition-transform" 
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg text-[#111827] tracking-tight leading-tight flex items-center gap-1.5">
              <span>Manish Kuntal</span>
              <span 
                className="w-2.5 h-2.5 rounded-full bg-[#88C999] border border-[#111827] animate-pulse" 
                title="Available for projects" 
                aria-label="Available for projects"
              />
            </span>
            <span className="font-mono text-[10px] text-[#4B5563] tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Center Nav items (Space Mono) - Desktop */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-2 bg-white/70 p-1.5 rounded-full border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827]">
          {navItems.map(({ label, href }) => {
            const isActive = activeTab === label
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActiveTab(label)}
                  className={`font-mono text-xs font-bold px-4 py-2 rounded-full transition-all duration-150 inline-block ${
                    isActive
                      ? 'bg-[#111827] text-white shadow-[2px_2px_0px_0px_#F4B942]'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F9F8F5]'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right side controls: Language pill switch (EN / PH) & "Let's work together" pill button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Pill Switch (EN / PH) */}
          <div 
            role="group" 
            aria-label="Language selection"
            className="flex items-center p-1 rounded-full border-2 border-[#111827] bg-white shadow-[3px_3px_0px_0px_#111827]"
          >
            <button
              type="button"
              onClick={() => setLang('EN')}
              className={`font-mono text-xs font-bold px-3 py-1 rounded-full transition-all duration-150 cursor-pointer ${
                lang === 'EN'
                  ? 'bg-[#A79CFF] text-[#111827] shadow-[1px_1px_0px_0px_#111827]'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
              aria-pressed={lang === 'EN'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('PH')}
              className={`font-mono text-xs font-bold px-3 py-1 rounded-full transition-all duration-150 cursor-pointer ${
                lang === 'PH'
                  ? 'bg-[#A79CFF] text-[#111827] shadow-[1px_1px_0px_0px_#111827]'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
              aria-pressed={lang === 'PH'}
            >
              PH
            </button>
          </div>

          {/* "Let's work together" Pill Button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-[#111827] bg-[#A79CFF] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] hover:shadow-[1px_1px_0px_0px_#111827] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
          >
            <Sparkles size={14} className="text-[#111827] group-hover:rotate-12 transition-transform" />
            <span>Let's work together</span>
            <ArrowUpRight size={14} className="text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile controls & hamburger button */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          {/* Compact Language Switch */}
          <div className="flex items-center p-0.5 rounded-full border-2 border-[#111827] bg-white shadow-[2px_2px_0px_0px_#111827]">
            <button
              type="button"
              onClick={() => setLang('EN')}
              className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-full transition-all ${
                lang === 'EN' ? 'bg-[#A79CFF] text-[#111827]' : 'text-[#4B5563]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('PH')}
              className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-full transition-all ${
                lang === 'PH' ? 'bg-[#A79CFF] text-[#111827]' : 'text-[#4B5563]'
              }`}
            >
              PH
            </button>
          </div>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-[8px] border-2 border-[#111827] bg-white text-[#111827] shadow-[3px_3px_0px_0px_#111827] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F8F5] border-b-2 border-[#111827] shadow-[0px_8px_0px_0px_#111827] px-6 py-6 flex flex-col gap-4 animate-fade-in">
          <ul className="flex flex-col gap-2.5">
            {navItems.map(({ label, href }) => {
              const isActive = activeTab === label
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => {
                      setActiveTab(label)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`font-mono text-sm font-semibold px-4 py-3 rounded-[8px] border-2 transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#111827] text-white border-[#111827] shadow-[3px_3px_0px_0px_#F4B942]'
                        : 'bg-white text-[#111827] border-[#E5E7EB] hover:border-[#111827]'
                    }`}
                  >
                    <span>{label}</span>
                    <span className="font-mono text-xs opacity-60">→</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="pt-2 border-t border-[#E5E7EB] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-display font-bold text-sm text-[#111827] bg-[#A79CFF] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Sparkles size={16} />
              <span>Let's work together</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
