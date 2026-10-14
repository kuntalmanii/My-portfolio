import { useState, useEffect } from 'react'
import {
  GitFork,
  Link2,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
  Menu,
  X,
} from 'lucide-react'

// Alias brand icons to available Lucide alternatives
const Github   = GitFork
const Linkedin = Link2
import './index.css'

// ─── Placeholder data (move to src/data/ as you scale) ──────────────────────
const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Work',     href: '#work'     },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const SKILLS = [
  { icon: Code2,  label: 'Frontend',     tags: ['React', 'TypeScript', 'Tailwind'] },
  { icon: Layers, label: 'Architecture', tags: ['REST', 'GraphQL', 'Design Systems'] },
  { icon: Cpu,    label: 'Tooling',      tags: ['Vite', 'Jest', 'CI/CD'] },
]

const PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A full-stack SaaS platform with real-time collaboration and AI-assisted workflows.',
    tags: ['React', 'Node.js', 'WebSockets'],
    href: '#',
    color: 'bg-primary',
  },
  {
    title: 'Project Beta',
    description: 'Open-source component library with a retro-modern design system and full a11y support.',
    tags: ['TypeScript', 'Storybook', 'Radix UI'],
    href: '#',
    color: 'bg-secondary',
  },
  {
    title: 'Project Gamma',
    description: 'CLI tool that scaffolds opinionated project structures with one command.',
    tags: ['Node.js', 'Commander.js', 'Inquirer'],
    href: '#',
    color: 'bg-surface',
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border shadow-hard-sm' : 'bg-transparent'}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl text-text-primary">
          dev<span className="text-primary">.</span>folio
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link hover:text-primary">{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@portfolio.dev"
            className="btn-primary text-sm py-2 px-4"
          >
            Hire Me <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden p-2 rounded-control border border-border shadow-hard-sm bg-white"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-hard px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link text-base py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="mailto:hello@portfolio.dev" className="btn-primary self-start">
            Hire Me <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-background pt-16"
    >
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="badge-primary mb-6">
              Available for work ✦
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mt-4 mb-6">
              Building things{' '}
              <span className="text-gradient">people love</span>{' '}
              to use.
            </h1>
            <p className="font-body text-text-secondary text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              I'm a full-stack developer who cares deeply about craft — clean APIs,
              accessible UIs, and systems that scale without drama.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch <Mail size={16} />
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-4 mt-10">
              {[
                { icon: Github,   href: 'https://github.com',   label: 'GitHub'   },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail,     href: 'mailto:hello@portfolio.dev', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 border-2 border-border rounded-control bg-white
                             shadow-hard-interactive hover:border-text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative card stack */}
          <div className="hidden lg:flex justify-center animate-fade-in animation-delay-300">
            <div className="relative w-72 h-80">
              {/* Back card */}
              <div className="absolute inset-0 bg-secondary border-2 border-text-primary rounded-card shadow-hard rotate-6" />
              {/* Middle card */}
              <div className="absolute inset-0 bg-primary border-2 border-text-primary rounded-card shadow-hard rotate-2" />
              {/* Front card */}
              <div className="absolute inset-0 bg-surface border-2 border-text-primary rounded-card shadow-hard flex flex-col justify-between p-6">
                <div className="font-display text-xl font-bold text-text-primary">
                  Hello, world! 👋
                </div>
                <div>
                  <p className="font-body text-xs text-text-secondary mb-3">Currently building</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Vite'].map(tag => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="bg-white border-y border-border">
      <div className="section py-16">
        <p className="section-subtitle text-center uppercase tracking-widest text-xs mb-8">
          What I bring to the table
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {SKILLS.map(({ icon: Icon, label, tags }, i) => (
            <div
              key={label}
              className={`card shadow-hard-interactive animate-fade-up`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 p-3 inline-flex bg-primary/20 rounded-control">
                <Icon size={22} className="text-text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-3">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="section">
        <p className="font-body text-xs uppercase tracking-widest text-text-secondary mb-2">
          Selected Work
        </p>
        <h2 className="section-title mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ title, description, tags, href, color }, i) => (
            <article
              key={title}
              className={`card shadow-hard-interactive group animate-fade-up`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Color bar */}
              <div className={`${color} -mx-6 -mt-6 mb-5 h-2 rounded-t-card border-b border-border`} />

              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-display font-bold text-lg text-text-primary">{title}</h3>
                <a
                  href={href}
                  aria-label={`Open ${title}`}
                  className="p-1.5 border border-border rounded-control shadow-hard-sm
                             group-hover:bg-primary group-hover:border-text-primary transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <p className="font-body text-sm text-text-secondary mb-5 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} /> View all on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up EmailJS using VITE_EMAILJS_* env vars
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-white border-t border-border">
      <div className="section max-w-2xl">
        <p className="font-body text-xs uppercase tracking-widest text-text-secondary mb-2">
          Let's Connect
        </p>
        <h2 className="section-title mb-2">Get In Touch</h2>
        <p className="section-subtitle">
          Open to full-time roles, freelance projects, and interesting collabs.
        </p>

        {sent ? (
          <div className="card shadow-hard text-center py-10 animate-fade-up">
            <span className="text-3xl mb-3 block">🎉</span>
            <p className="font-display font-bold text-lg text-text-primary">
              Message sent — I'll get back to you soon!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card shadow-hard flex flex-col gap-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-body text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="input"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-body text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="input"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-body text-xs font-bold text-text-secondary uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="What's on your mind?"
                className="textarea"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-primary self-start">
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
    <footer className="bg-background border-t border-border">
      <div className="section py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-text-secondary">
          © {new Date().getFullYear()} dev.folio — Built with React + Vite + Tailwind
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub',   href: 'https://github.com'   },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'Email',    href: 'mailto:hello@portfolio.dev' },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="nav-link text-xs hover:text-primary">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
