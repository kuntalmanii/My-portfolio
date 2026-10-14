import { Layers, Smartphone, Cpu, Sparkles, CheckCircle2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Capabilities() {
  const pillars = [
    {
      icon: Layers,
      title: 'Decoupled Architecture',
      description: 'Atomic design tokens, isolated data layers, and clean component hierarchies.',
      tag: 'Modular',
    },
    {
      icon: Smartphone,
      title: 'Adaptive Responsiveness',
      description: 'Mobile-first layouts tested from 360px phones up to 4K ultra-wide viewports.',
      tag: 'Fluid',
    },
    {
      icon: Cpu,
      title: 'Engineered Performance',
      description: 'Sub-second Vite builds, zero layout shifts, and 60 FPS GSAP/CSS animations.',
      tag: '60 FPS',
    },
  ]

  return (
    <section id="capabilities" className="bg-[#F9F8F5] dark:bg-[#0E131F] py-12 sm:py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width callout container using the surface token (#88C999) */}
        <ScrollReveal direction="up" delay={0}>
          <div className="w-full bg-[#88C999] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] rounded-[8px] p-6 sm:p-10 md:p-12 relative overflow-hidden">
            
            {/* Subtle background decorative grid / pattern */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(#111827_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-10 pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative z-10 flex flex-col gap-8">
              
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#111827] pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] font-mono text-xs font-bold text-[#111827] dark:text-white self-start">
                  <Sparkles size={14} className="text-[#111827] dark:text-[#A79CFF]" />
                  <span>CORE CAPABILITIES</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#111827]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111827] animate-ping" />
                  <span>ACTIVE STACK: REACT + VITE + TAILWIND</span>
                </div>
              </div>

              {/* Headline */}
              <div className="max-w-3xl">
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] text-[#111827] leading-[1.12] tracking-tight">
                  Reusable structure, responsive behavior &amp; production-ready engineering.
                </h2>
                <p className="font-mono text-xs sm:text-sm text-[#111827]/80 mt-3 max-w-2xl leading-relaxed">
                  Bridging UI design systems and performant frontend code to turn complex specifications into intuitive, reliable digital experiences.
                </p>
              </div>

              {/* 3 Pillars Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                {pillars.map(({ icon: Icon, title, description, tag }, index) => (
                  <ScrollReveal key={title} direction="up" delay={80 * (index + 1)}>
                    <div className="h-full bg-white dark:bg-[#161D2E] rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] p-5 flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111827] transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-[6px] bg-[#A79CFF] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] flex items-center justify-center">
                            <Icon size={18} className="text-[#111827]" />
                          </div>
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#F4B942] border border-[#111827] text-[#111827]">
                            {tag}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-base text-[#111827] dark:text-white mb-1.5">
                          {title}
                        </h3>
                        <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                          {description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E5E7EB] dark:border-white/10 flex items-center gap-1.5 text-[#111827] dark:text-white font-mono text-[11px] font-bold">
                        <CheckCircle2 size={13} className="text-[#88C999]" />
                        <span>Production Grade</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Bottom badges ticker */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-[#111827]">
                <span className="font-mono text-xs font-bold text-[#111827] mr-1">Standards:</span>
                {[
                  'Atomic Design',
                  'WCAG 2.1 AA Compliant',
                  'Zero Layout Shift',
                  'Strict Typing',
                  'Git Version Control',
                ].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#F9F8F5] dark:bg-[#161D2E] border border-[#111827] text-[#111827] dark:text-white shadow-[1px_1px_0px_0px_#111827]"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
