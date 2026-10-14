import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Sun,
  Moon,
  Command,
  Terminal,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar({ onOpenCommandPalette, onOpenTerminal }) {
  const [activeTab, setActiveTab] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

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
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F9F8F5]/85 dark:bg-[#0E131F]/85 backdrop-blur-md border-b-2 border-[#111827] dark:border-white/10 transition-colors duration-200">
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
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#111827] dark:bg-white text-white dark:text-[#111827] flex items-center justify-center font-display font-black text-base sm:text-lg tracking-wider border-2 border-[#111827] dark:border-white shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] group-hover:shadow-[1px_1px_0px_0px_#111827] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
              MK
            </div>
            {/* Accent Dot overlay on monogram */}
            <span 
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#F4B942] border-2 border-[#111827] dark:border-white shadow-[1px_1px_0px_0px_#111827] dark:shadow-[1px_1px_0px_0px_#000000] group-hover:scale-110 transition-transform" 
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg text-[#111827] dark:text-white tracking-tight leading-tight flex items-center gap-1.5">
              <span>Manish Kuntal</span>
              <span 
                className="w-2.5 h-2.5 rounded-full bg-[#88C999] border border-[#111827] animate-pulse" 
                title="Available for projects" 
                aria-label="Available for projects"
              />
            </span>
            <span className="font-mono text-[10px] text-[#4B5563] dark:text-[#9CA3AF] tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Center Nav items (Space Mono) - Desktop */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-2 bg-white/80 dark:bg-[#161D2E]/80 p-1.5 rounded-full border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000]">
          {navItems.map(({ label, href }) => {
            const isActive = activeTab === label
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActiveTab(label)}
                  className={`font-mono text-xs font-bold px-4 py-2 rounded-full transition-all duration-150 inline-block ${
                    isActive
                      ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] shadow-[2px_2px_0px_0px_#F4B942]'
                      : 'text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:bg-[#F9F8F5] dark:hover:bg-white/10'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right side controls */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* ⌘K Command Palette Quick Trigger */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (⌘K)"
            className="flex items-center gap-1.5 px-3 py-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111827] active:translate-y-0.5 transition-all cursor-pointer font-mono text-xs font-bold"
          >
            <Command size={13} className="text-[#A79CFF]" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="px-1 py-0.5 rounded bg-[#F9F8F5] dark:bg-black/40 text-[10px] text-[#4B5563] dark:text-[#9CA3AF]">
              ⌘K
            </kbd>
          </button>

          {/* Interactive Terminal Quick Trigger */}
          <button
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open Interactive Terminal"
            title="Launch Terminal Shell"
            className="p-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#A79CFF] hover:text-[#111827] dark:hover:bg-[#A79CFF] dark:hover:text-[#111827] active:translate-y-0.5 transition-all cursor-pointer"
          >
            <Terminal size={17} />
          </button>

          {/* Dark / Light Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] hover:bg-[#F4B942] hover:text-[#111827] dark:hover:bg-[#F4B942] dark:hover:text-[#111827] active:translate-y-0.5 transition-all cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>


          {/* "Let's work together" Pill Button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-[#111827] bg-[#A79CFF] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#111827] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
          >
            <Sparkles size={14} className="text-[#111827] group-hover:rotate-12 transition-transform" />
            <span>Let's work together</span>
            <ArrowUpRight size={14} className="text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile controls & hamburger button */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-[6px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Quick ⌘K button */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette"
            className="p-2 rounded-[6px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
          >
            <Command size={16} />
          </button>

          {/* Quick Terminal button */}
          <button
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open Terminal"
            className="p-2 rounded-[6px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000]"
          >
            <Terminal size={16} />
          </button>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F8F5] dark:bg-[#0E131F] border-b-2 border-[#111827] dark:border-white/10 shadow-[0px_8px_0px_0px_#111827] px-6 py-6 flex flex-col gap-4 animate-fade-in">
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
                        ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] border-[#111827] shadow-[3px_3px_0px_0px_#F4B942]'
                        : 'bg-white dark:bg-[#161D2E] text-[#111827] dark:text-white border-[#E5E7EB] dark:border-white/10 hover:border-[#111827]'
                    }`}
                  >
                    <span>{label}</span>
                    <span className="font-mono text-xs opacity-60">→</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="pt-2 border-t border-[#E5E7EB] dark:border-white/10 flex flex-col gap-3">
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
