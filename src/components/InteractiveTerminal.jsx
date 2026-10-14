import { useState, useEffect, useRef } from 'react'
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, Sparkles, Check, CornerDownLeft } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { projectsData } from '../data/projectsData'

export default function InteractiveTerminal({
  isOpen,
  onClose,
  onOpenCaseStudy,
}) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '✦ Manish Kuntal — Interactive Portfolio Shell v2.4 (x86_64-apple-darwin)\nType "help" to display available commands. Try "whoami", "ls projects", or "sudo hire".',
    },
  ])
  const [inputVal, setInputVal] = useState('')
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandHistory, setCommandHistory] = useState([])
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const { theme, toggleTheme, setTheme } = useTheme()

  const COMMANDS = [
    'help',
    'whoami',
    'skills',
    'projects',
    'cat sahaay',
    'cat soulfulquartz',
    'cat recoveriq',
    'theme',
    'theme dark',
    'theme light',
    'contact',
    'sudo hire',
    'clear',
    'exit',
  ]

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [isOpen, isMinimized])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  if (!isOpen) return null

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim()
    const lower = cmd.toLowerCase()

    if (!cmd) return

    // Save to history
    setCommandHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)

    // Append user input line
    const userLine = { type: 'user', text: `guest@manish-portfolio:~$ ${cmd}` }

    let responseLines = []

    if (lower === 'help') {
      responseLines = [
        {
          type: 'output',
          text: `AVAILABLE COMMANDS:
  whoami             → About Manish Kuntal, current role & focus
  skills             → Core frontend, full-stack & edge AI capabilities
  ls / projects      → List flagship repositories
  cat <project>      → Deep dive into project (sahaay | soulfulquartz | recoveriq)
  theme [dark|light] → Toggle or set site color scheme
  contact            → Display email, GitHub & LinkedIn coordinates
  sudo hire          → ✦ Executive authorization Easter egg
  clear              → Clear terminal screen
  exit               → Close this interactive terminal`,
        },
      ]
    } else if (lower === 'whoami') {
      responseLines = [
        {
          type: 'output',
          text: `MANISH KUNTAL
Role:      Product Developer & Frontend / Full-Stack Engineer
Focus:     Clean UI architecture, high-framerate web apps & edge AI inference
Location:  India &bull; Available Worldwide
Stack:     React, TypeScript, Next.js 15, Tailwind CSS, Qualcomm Hexagon NPU, Node.js
Bio:       Passionate about bridging high-craft design systems with performant, robust engineering.`,
        },
      ]
    } else if (lower === 'skills' || lower === 'cat skills') {
      responseLines = [
        {
          type: 'output',
          text: `TECHNICAL CAPABILITIES:
[Frontend]  React 19, Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP, Canvas APIs
[Backend]   Node.js, Express, Prisma ORM, PostgreSQL, REST APIs, Webhooks, HMAC Auth
[Edge & AI] Qualcomm Hexagon NPU (QNN), Python, ONNX Runtime, MediaPipe, Edge Translation
[Craft]     Design Systems, Retro-Brutalist UI, Sub-second CWV performance, WCAG 2.1 AA`,
        },
      ]
    } else if (lower === 'projects' || lower === 'ls' || lower === 'ls projects') {
      responseLines = [
        {
          type: 'output',
          text: `FLAGSHIP REPOSITORIES:
  1. sahaay         → Sahaay (सहाय) — On-Device ISL Bridge (Qualcomm Snapdragon NPU)
  2. soulfulquartz  → SoulfulQuartz — Next.js 15 E-Commerce & Crystal Advisor Quiz
  3. recoveriq      → RecoverIQ — Razorpay Buildathon Payment Failure Recovery
Tip: Run "cat sahaay", "cat soulfulquartz", or "cat recoveriq" for case study briefs!`,
        },
      ]
    } else if (lower === 'cat sahaay' || lower === 'sahaay') {
      const p = projectsData.find((x) => x.id === 'sahaay-isl-bridge')
      if (p && onOpenCaseStudy) onOpenCaseStudy(p)
      responseLines = [
        {
          type: 'output',
          text: `[Sahaay (सहाय) — On-Device ISL Bridge]
Qualcomm Snapdragon AI Lab challenge. 100% offline, air-gapped Indian Sign Language recognition engine running on Snapdragon X Elite Hexagon NPU.
Inference: 8.2ms | Confidence: 99.4% | TOPS: 45 | Status: ✦ Opening Case Study Modal...`,
        },
      ]
    } else if (lower === 'cat soulfulquartz' || lower === 'soulfulquartz') {
      const p = projectsData.find((x) => x.id === 'soulful-quartz')
      if (p && onOpenCaseStudy) onOpenCaseStudy(p)
      responseLines = [
        {
          type: 'output',
          text: `[SoulfulQuartz — Ethereal Gemstone Boutique]
Full-stack Next.js 15 App Router boutique with TypeScript, Express + Prisma backend, React Context state, and interactive Crystal Advisor Quiz.
Page Speed: <400ms | Lighthouse: 98/100 | Status: ✦ Opening Case Study Modal...`,
        },
      ]
    } else if (lower === 'cat recoveriq' || lower === 'recoveriq') {
      const p = projectsData.find((x) => x.id === 'recover-iq')
      if (p && onOpenCaseStudy) onOpenCaseStudy(p)
      responseLines = [
        {
          type: 'output',
          text: `[RecoverIQ — Razorpay Buildathon]
Intelligent payment recovery platform featuring full-stack architecture, Role-Based Access Control (RBAC), and automated retry pipelines.
Recovery Rate: 89.4% | Webhook Ingest: <25ms | Status: ✦ Opening Case Study Modal...`,
        },
      ]
    } else if (lower.startsWith('theme')) {
      const parts = lower.split(' ')
      if (parts[1] === 'dark') {
        setTheme('dark')
        responseLines = [{ type: 'output', text: '✓ Theme switched to DARK mode.' }]
      } else if (parts[1] === 'light') {
        setTheme('light')
        responseLines = [{ type: 'output', text: '✓ Theme switched to LIGHT mode.' }]
      } else {
        toggleTheme()
        responseLines = [{ type: 'output', text: `✓ Theme toggled. Current: ${theme === 'dark' ? 'LIGHT' : 'DARK'}` }]
      }
    } else if (lower === 'contact' || lower === 'email') {
      responseLines = [
        {
          type: 'output',
          text: `GET IN TOUCH:
  Email:    kuntalmani12@gmail.com
  GitHub:   https://github.com/kuntalmanii
  LinkedIn: https://linkedin.com/in/manish-kuntal`,
        },
      ]
    } else if (lower === 'sudo hire' || lower === 'hire') {
      responseLines = [
        {
          type: 'output',
          text: `[sudo] authenticating guest user...
✓ Access Granted: High-Priority Talent Acquisition.
============================================================
✦ CONGRATULATIONS! You’ve unlocked the hire sequence.
  Manish Kuntal is ready to ship high-impact software with you.
  Direct Email: kuntalmani12@gmail.com
============================================================`,
        },
      ]
    } else if (lower === 'clear') {
      setHistory([])
      setInputVal('')
      return
    } else if (lower === 'exit') {
      onClose()
      return
    } else {
      responseLines = [
        {
          type: 'error',
          text: `zsh: command not found: ${cmd}. Type "help" for a list of available commands.`,
        },
      ]
    }

    setHistory((prev) => [...prev, userLine, ...responseLines])
    setInputVal('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setInputVal(commandHistory[nextIndex] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (commandHistory.length === 0) return
      if (historyIndex >= commandHistory.length - 1) {
        setHistoryIndex(-1)
        setInputVal('')
      } else {
        const nextIndex = historyIndex + 1
        setHistoryIndex(nextIndex)
        setInputVal(commandHistory[nextIndex] || '')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = COMMANDS.find((c) => c.startsWith(inputVal.toLowerCase()))
      if (match) setInputVal(match)
    }
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-200 ${
        isMaximized
          ? 'inset-3 sm:inset-6'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[580px]'
      }`}
    >
      <div className="bg-[#111827] text-[#F9F8F5] rounded-[8px] border-2 border-[#111827] dark:border-[#384358] shadow-[6px_6px_0px_0px_#A79CFF] flex flex-col overflow-hidden">
        
        {/* Terminal Header Bar */}
        <div className="p-3 bg-[#1F2937] border-b-2 border-[#111827] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            {/* Window control buttons */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close terminal"
              className="w-3 h-3 rounded-full bg-[#EF4444] border border-[#111827] hover:opacity-80 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              aria-label="Minimize terminal"
              className="w-3 h-3 rounded-full bg-[#F4B942] border border-[#111827] hover:opacity-80 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => setIsMaximized(!isMaximized)}
              aria-label="Maximize terminal"
              className="w-3 h-3 rounded-full bg-[#88C999] border border-[#111827] hover:opacity-80 cursor-pointer"
            />
            <span className="font-mono text-xs font-bold text-white/80 ml-2 flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-[#A79CFF]" />
              <span>manish@portfolio: ~ (zsh)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/40 text-[#88C999] border border-white/10">
              online
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 hover:text-white cursor-pointer ml-1"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body (hidden if minimized) */}
        {!isMinimized && (
          <div
            className={`p-4 font-mono text-xs leading-relaxed overflow-y-auto flex flex-col gap-2 ${
              isMaximized ? 'h-[calc(100vh-160px)]' : 'h-80 sm:h-96'
            }`}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.type === 'user'
                    ? 'text-[#F4B942] font-bold'
                    : line.type === 'system'
                    ? 'text-[#A79CFF]'
                    : line.type === 'error'
                    ? 'text-[#EF4444]'
                    : 'text-[#E5E7EB] whitespace-pre-wrap'
                }
              >
                {line.text}
              </div>
            ))}

            {/* Live Input Prompt */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#88C999] font-bold shrink-0">guest@manish-portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command..."
                className="flex-1 bg-transparent border-none outline-none text-[#F9F8F5] font-mono text-xs caret-[#A79CFF]"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        )}

        {/* Mini helper strip */}
        {!isMinimized && (
          <div className="px-4 py-2 bg-black/50 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50">
            <span>[Tab] autocomplete &bull; [&uarr;&darr;] history</span>
            <span className="text-[#A79CFF]">type "help" for list</span>
          </div>
        )}

      </div>
    </div>
  )
}
