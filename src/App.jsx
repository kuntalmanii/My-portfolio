import { useState } from 'react'
import {
  GitFork,
  Link2,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
} from 'lucide-react'
import { Navbar, Hero, Capabilities, FeaturedProjects } from './components'
import './index.css'

// Alias brand icons to available Lucide alternatives
const Github = GitFork
const Linkedin = Link2

const SKILLS = [
  { icon: Code2, label: 'Frontend Engine', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'] },
  { icon: Layers, label: 'Architecture & UI', tags: ['Design Tokens', 'Leaflet API', 'Radix UI', 'GSAP'] },
  { icon: Cpu, label: 'AI & Performance', tags: ['Google Gemini API', 'Core Web Vitals', 'Node.js', 'REST API'] },
]

function SkillsSection() {
  return (
    <section id="playground" className="bg-white border-y-2 border-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4B5563] bg-[#F9F8F5] px-3 py-1 rounded-full border border-[#E5E7EB] shadow-[1px_1px_0px_0px_#111827]">
            Playground &amp; Toolkit
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111827] mt-3">
            What I bring to the table
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#4B5563] mt-2">
            Modern tools and patterns honed across production apps and open-source code.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {SKILLS.map(({ icon: Icon, label, tags }, i) => (
            <div
              key={label}
              className="card shadow-hard-interactive animate-fade-up bg-[#F9F8F5] border-2 border-[#111827]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 p-3 inline-flex bg-[#A79CFF] rounded-[8px] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827]">
                <Icon size={22} className="text-[#111827]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#111827] mb-3">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="badge bg-white border border-[#111827] text-[#111827]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-[#F9F8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4B5563]">
            Let's Connect
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111827] mt-1">
            Get In Touch
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#4B5563] mt-2">
            Open for product development, design systems, and frontend engineering roles.
          </p>
        </div>

        {sent ? (
          <div className="card shadow-[4px_4px_0px_0px_#111827] border-2 border-[#111827] bg-[#88C999] text-center py-10 animate-fade-up">
            <span className="text-3xl mb-3 block">🎉</span>
            <p className="font-display font-bold text-lg text-[#111827]">
              Message sent — Manish will get back to you soon!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card shadow-[4px_4px_0px_0px_#111827] border-2 border-[#111827] bg-white flex flex-col gap-5 p-6 sm:p-8"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="input border-2 border-[#111827]"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="input border-2 border-[#111827]"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project, contract, or full-time opportunity..."
                className="textarea border-2 border-[#111827]"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] font-display font-bold text-sm text-[#111827] bg-[#A79CFF] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111827] active:translate-y-0.5 active:shadow-none transition-all self-start cursor-pointer"
            >
              Send Message <ArrowUpRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#111827] text-white border-t-2 border-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-[6px] bg-[#A79CFF] text-[#111827] font-display font-black text-sm flex items-center justify-center border border-white">
            MK
          </span>
          <p className="font-mono text-xs text-[#E5E7EB]">
            © {new Date().getFullYear()} Manish Kuntal &bull; Built with React + Vite + Tailwind.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/kuntalmanii"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#E5E7EB] hover:text-[#F4B942] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#E5E7EB] hover:text-[#F4B942] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kuntalmani12@gmail.com"
            className="font-mono text-xs text-[#E5E7EB] hover:text-[#F4B942] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F5]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <FeaturedProjects />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
