import { useState, useEffect, useRef } from 'react'
import {
  Search,
  Command,
  Sun,
  Moon,
  Terminal,
  Copy,
  Check,
  ArrowUpRight,
  GitFork,
  Link2,
  FileText,
  Sparkles,
  Layers,
  FlaskConical,
  Mail,
  Home,
  ChevronRight,
  X,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { projectsData } from '../data/projectsData'

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenCaseStudy,
}) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  const emailAddress = 'kuntalmani12@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopiedEmail(true)
      setTimeout(() => {
        setCopiedEmail(false)
        onClose()
      }, 1200)
    } catch (e) {
      console.error(e)
    }
  }

  // Define commands
  const allCommands = [
    // ── Navigation ──
    {
      id: 'nav-home',
      group: 'Navigation',
      title: 'Go to Home',
      subtitle: 'Top of page & introduction',
      icon: Home,
      action: () => {
        window.location.hash = '#home'
        onClose()
      },
    },
    {
      id: 'nav-work',
      group: 'Navigation',
      title: 'View Flagship Projects',
      subtitle: 'Sahaay, SoulfulQuartz & RecoverIQ',
      icon: Sparkles,
      action: () => {
        window.location.hash = '#work'
        onClose()
      },
    },
    {
      id: 'nav-capabilities',
      group: 'Navigation',
      title: 'View Core Capabilities',
      subtitle: 'Decoupled architecture & responsiveness',
      icon: Layers,
      action: () => {
        window.location.hash = '#capabilities'
        onClose()
      },
    },
    {
      id: 'nav-playground',
      group: 'Navigation',
      title: 'Open Technical Playground',
      subtitle: 'Interactive micro-apps & experiments',
      icon: FlaskConical,
      action: () => {
        window.location.hash = '#playground'
        onClose()
      },
    },
    {
      id: 'nav-contact',
      group: 'Navigation',
      title: 'Let’s Work Together (Contact)',
      subtitle: 'Send an email or message',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact'
        onClose()
      },
    },

    // ── Case Studies ──
    ...projectsData.map((project) => ({
      id: `cs-${project.id}`,
      group: 'Case Studies',
      title: `Case Study: ${project.shortName || project.title}`,
      subtitle: project.category,
      icon: FileText,
      accent: project.accentColor,
      action: () => {
        onOpenCaseStudy(project)
        onClose()
      },
    })),

    // ── Actions & Tools ──
    {
      id: 'action-theme',
      group: 'Actions & Tools',
      title: theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      subtitle: `Currently active: ${theme.toUpperCase()} mode`,
      icon: theme === 'dark' ? Sun : Moon,
      shortcut: 'T',
      action: () => {
        toggleTheme()
        onClose()
      },
    },
    {
      id: 'action-terminal',
      group: 'Actions & Tools',
      title: 'Launch Interactive Terminal',
      subtitle: 'Unix CLI Easter egg (whoami, skills, projects)',
      icon: Terminal,
      shortcut: '`',
      action: () => {
        onClose()
        setTimeout(() => onOpenTerminal(), 100)
      },
    },
    {
      id: 'action-email',
      group: 'Actions & Tools',
      title: copiedEmail ? 'Copied to clipboard!' : 'Copy Email Address',
      subtitle: emailAddress,
      icon: copiedEmail ? Check : Copy,
      action: handleCopyEmail,
    },

    // ── Links ──
    {
      id: 'link-github',
      group: 'Social & Links',
      title: 'GitHub Profile',
      subtitle: 'github.com/kuntalmanii',
      icon: GitFork,
      external: true,
      action: () => {
        window.open('https://github.com/kuntalmanii', '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'link-linkedin',
      group: 'Social & Links',
      title: 'LinkedIn Profile',
      subtitle: 'linkedin.com/in/manish-kuntal',
      icon: Link2,
      external: true,
      action: () => {
        window.open('https://linkedin.com/in/manish-kuntal', '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
  ]

  // Filter commands
  const filteredCommands = allCommands.filter((cmd) => {
    const s = `${cmd.title} ${cmd.subtitle} ${cmd.group}`.toLowerCase()
    return s.includes(query.toLowerCase())
  })

  // Keyboard navigation & global ⌘K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette with ⌘K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // Open handled by parent or state
        }
      }

      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands, onClose])

  // Focus input on open & reset
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmd-palette-label"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#111827]/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-xl bg-white dark:bg-[#151C2C] text-[#111827] dark:text-[#F9F8F5] rounded-[8px] border-2 border-[#111827] dark:border-[#384358] shadow-[8px_8px_0px_0px_#111827] dark:shadow-[8px_8px_0px_0px_#000000] overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b-2 border-[#111827] dark:border-[#384358] bg-[#F9F8F5] dark:bg-[#0E131F] flex items-center gap-3">
          <Search size={18} className="text-[#4B5563] dark:text-[#9CA3AF] shrink-0" />
          <input
            ref={inputRef}
            id="cmd-palette-label"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-[#111827] dark:text-white placeholder-[#9CA3AF]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#4B5563] hover:text-[#111827] dark:hover:text-white"
            >
              <X size={16} />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-[#1E2638] border border-[#111827] dark:border-white/20 text-[#111827] dark:text-white">
              <Command size={10} />
              <span>K</span>
            </div>
          )}
        </div>

        {/* Command List */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-2 divide-y divide-gray-100 dark:divide-white/5">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-mono text-xs text-[#9CA3AF]">
                No matching commands found for "<span className="text-[#F4B942]">{query}</span>"
              </p>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex
              const Icon = cmd.icon

              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-[6px] cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#111827] text-white dark:bg-[#A79CFF] dark:text-[#111827] shadow-[2px_2px_0px_0px_#F4B942]'
                      : 'hover:bg-[#F9F8F5] dark:hover:bg-[#1E2638] text-[#111827] dark:text-[#F9F8F5]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-[4px] border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-white/40 bg-white/10 dark:border-[#111827]/40 dark:bg-[#111827]/10'
                          : 'border-[#111827]/20 bg-white dark:border-white/20 dark:bg-[#0E131F]'
                      }`}
                      style={cmd.accent ? { borderColor: cmd.accent } : undefined}
                    >
                      <Icon size={14} />
                    </div>

                    <div className="min-w-0">
                      <p className="font-display font-bold text-xs sm:text-sm truncate">
                        {cmd.title}
                      </p>
                      <p
                        className={`font-mono text-[11px] truncate ${
                          isSelected
                            ? 'text-white/80 dark:text-[#111827]/80'
                            : 'text-[#4B5563] dark:text-[#9CA3AF]'
                        }`}
                      >
                        {cmd.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-3 shrink-0">
                    {cmd.shortcut && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-current opacity-70">
                        {cmd.shortcut}
                      </span>
                    )}
                    {cmd.external ? (
                      <ArrowUpRight size={13} className="opacity-60" />
                    ) : (
                      <ChevronRight size={13} className="opacity-60" />
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="p-3 bg-[#F9F8F5] dark:bg-[#0E131F] border-t-2 border-[#111827] dark:border-[#384358] flex items-center justify-between font-mono text-[11px] text-[#4B5563] dark:text-[#9CA3AF]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-white dark:bg-[#1E2638] border border-[#111827]/20 dark:border-white/20 font-bold text-[9px]">
                &uarr;&darr;
              </kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#1E2638] border border-[#111827]/20 dark:border-white/20 font-bold text-[9px]">
                &crarr;
              </kbd>
              <span>select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#1E2638] border border-[#111827]/20 dark:border-white/20 font-bold text-[9px]">
                esc
              </kbd>
              <span>close</span>
            </span>
          </div>

          <span className="hidden sm:inline text-[#88C999] font-bold">
            ✦ Manish Kuntal Dev Command
          </span>
        </div>

      </div>
    </div>
  )
}
