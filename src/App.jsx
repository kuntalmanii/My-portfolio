import { useState, useEffect } from 'react'
import {
  Navbar,
  Hero,
  Capabilities,
  FeaturedProjects,
  Playground,
  Footer,
  CommandPalette,
  CaseStudyModal,
  InteractiveTerminal,
  AnimatedBackground,
} from './components'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import './index.css'

function PortfolioApp() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const { toggleTheme } = useTheme()

  // Global keyboard shortcuts (⌘K for command palette, ~ for terminal, T for theme)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement
      const isInput =
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.isContentEditable)

      // ⌘K or Ctrl+K -> Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen((prev) => !prev)
        return
      }

      // If user is actively typing in an input, don't hijack simple letter hotkeys
      if (isInput) return

      // ` key -> Terminal Toggle
      if (e.key === '`') {
        e.preventDefault()
        setIsTerminalOpen((prev) => !prev)
      }

      // T key -> Theme Toggle
      if (e.key.toLowerCase() === 't' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        toggleTheme()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleTheme])

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F5] dark:bg-[#0E131F] text-[#111827] dark:text-[#F9F8F5] transition-colors duration-200 relative overflow-x-hidden">
      {/* Full-Length Dynamic Ambient Background (Viewport Fixed) */}
      <AnimatedBackground showParticles={true} showGrid={true} fixed={true} />

      {/* Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <Capabilities />
        <FeaturedProjects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <Playground />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
      </div>

      {/* 1. ⌘K Command Palette Dialog */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
      />

      {/* 2. Interactive Terminal Easter Egg */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
      />

      {/* 3. Deep Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  )
}
