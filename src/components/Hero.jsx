import { ArrowUpRight, ArrowDown, Terminal, Layers, CheckCircle2, Sparkles } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'
import ScrollReveal from './ScrollReveal'

export default function Hero({ onOpenTerminal }) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] pt-28 sm:pt-36 pb-16 lg:pb-24 flex items-center bg-[#F9F8F5] dark:bg-[#0E131F] transition-colors duration-200 overflow-hidden scroll-mt-28"
    >
      {/* Dynamic animated background: aurora blobs + particle network + retro grid + noise grain */}
      <AnimatedBackground showParticles={true} showGrid={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro, Title, Role, Subtitle, CTA buttons */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-7">
            
            {/* Tag: "Hey, I'm 👋 Manish Kuntal" */}
            <ScrollReveal direction="down" delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] font-mono text-xs sm:text-sm font-bold text-[#111827] dark:text-white hover:shadow-[4px_4px_0px_0px_#111827] hover:-translate-y-0.5 transition-all">
                <span>Hey, I'm</span>
                <span className="inline-block animate-wiggle text-base">👋</span>
                <span className="text-[#111827] dark:text-[#A79CFF]">Manish Kuntal</span>
              </div>
            </ScrollReveal>

            {/* Huge display title in Space Grotesk: "PRODUCT DEVELOPER & DESIGNER" with mixed-case styling */}
            <ScrollReveal direction="up" delay={80}>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] tracking-tight leading-[1.04] text-[#111827] dark:text-white">
                <span className="block uppercase tracking-tight">PRODUCT DEVELOPER</span>
                <span className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-1 sm:mt-2">
                  <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl text-[#4B5563] dark:text-[#9CA3AF]">
                    &amp;
                  </span>
                  <span className="uppercase tracking-tight text-[#111827] dark:text-white underline decoration-[#F4B942] decoration-4 sm:decoration-6 underline-offset-8">
                    DESIGNER
                  </span>
                </span>
              </h1>
            </ScrollReveal>

            {/* Role badge: "Frontend & Full-Stack Engineer" with primary color fill (#A79CFF), 8px radius, and solid shadow */}
            <ScrollReveal direction="up" delay={140}>
              <button
                type="button"
                onClick={onOpenTerminal}
                title="Click to launch interactive terminal"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[8px] bg-[#A79CFF] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] text-[#111827] font-mono text-xs sm:text-sm font-bold tracking-tight hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#111827] transition-all cursor-pointer group"
              >
                <Terminal size={16} className="text-[#111827] group-hover:scale-110 transition-transform" />
                <span>&gt;_ Frontend &amp; Full-Stack Engineer</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/15 text-[#111827] ml-1">
                  interactive
                </span>
              </button>
            </ScrollReveal>

            {/* Subtitle: 2-line description in Space Mono highlighting clean UI architecture and dynamic web apps */}
            <ScrollReveal direction="up" delay={200}>
              <p className="font-mono text-sm sm:text-base text-[#4B5563] dark:text-[#9CA3AF] max-w-xl leading-relaxed">
                Architecting clean UI architecture with reusable component systems.
                <br className="hidden sm:inline" />
                {' '}Building dynamic web apps that pair high design standards with robust code.
              </p>
            </ScrollReveal>

            {/* Two buttons */}
            <ScrollReveal direction="up" delay={260}>
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                {/* Button 1: "View my work" */}
                <a
                  href="#work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] font-display font-bold text-sm sm:text-base text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all duration-150 cursor-pointer select-none"
                >
                  <span>View my work</span>
                  <ArrowUpRight size={18} className="text-[#111827]" />
                </a>

                {/* Button 2: "Scroll to explore" */}
                <a
                  href="#work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] font-display font-bold text-sm sm:text-base text-[#111827] dark:text-white bg-white dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all duration-150 cursor-pointer select-none group"
                >
                  <span>Scroll to explore</span>
                  <ArrowDown size={18} className="text-[#111827] dark:text-white group-hover:translate-y-0.5 transition-transform animate-bounce" />
                </a>
              </div>
            </ScrollReveal>

            {/* Quick tech stack tags */}
            <ScrollReveal direction="up" delay={320}>
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <span className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] font-semibold mr-1">Focus:</span>
                {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Qualcomm NPU'].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-[#161D2E] border border-[#E5E7EB] dark:border-white/15 text-[#111827] dark:text-white shadow-[1px_1px_0px_0px_#111827] dark:shadow-[1px_1px_0px_0px_#000000]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal direction="scale" delay={180}>
              <div className="relative w-full max-w-md">
                
                {/* Layered decorative background cards for depth */}
                <div 
                  className="absolute inset-0 bg-[#A79CFF] rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] rotate-3 translate-x-2 translate-y-3" 
                  aria-hidden="true" 
                />
                <div 
                  className="absolute inset-0 bg-[#F4B942] rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] -rotate-2 -translate-x-1 translate-y-1" 
                  aria-hidden="true" 
                />

                {/* Foreground interactive card */}
                <div className="relative bg-white dark:bg-[#161D2E] rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#000000] p-6 flex flex-col gap-5">
                  
                  {/* Header with surface accent & terminal controls */}
                  <div className="flex items-center justify-between pb-4 border-b-2 border-[#E5E7EB] dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#F4B942] border border-[#111827]" />
                      <span className="w-3 h-3 rounded-full bg-[#88C999] border border-[#111827]" />
                      <span className="w-3 h-3 rounded-full bg-[#A79CFF] border border-[#111827]" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[8px] bg-[#88C999] border border-[#111827] text-[#111827]">
                      status: ready
                    </span>
                  </div>

                  {/* Profile / Monogram snippet */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[8px] bg-[#88C999] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#000000] flex items-center justify-center font-display font-black text-2xl text-[#111827]">
                      MK
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#111827] dark:text-white leading-tight">
                        Manish Kuntal
                      </h3>
                      <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF]">
                        Product Dev &bull; UI Engineer
                      </p>
                    </div>
                  </div>

                  {/* Mini Code Architecture Box - Click to open terminal */}
                  <div
                    onClick={onOpenTerminal}
                    title="Click to execute in interactive terminal"
                    className="bg-[#111827] text-[#F9F8F5] rounded-[8px] p-4 font-mono text-xs leading-relaxed border-2 border-[#111827] shadow-[2px_2px_0px_0px_#88C999] overflow-x-auto cursor-pointer hover:border-[#A79CFF] transition-all group"
                  >
                    <div className="flex items-center justify-between text-[#88C999] pb-1 border-b border-white/10 mb-2">
                      <span>// Clean Architecture</span>
                      <span className="text-[10px] text-[#F4B942] group-hover:underline flex items-center gap-1">
                        <span>run CLI</span>
                        <span>&gt;</span>
                      </span>
                    </div>
                    <p className="text-[#A79CFF]">const <span className="text-white">engineer</span> = &#123;</p>
                    <p className="pl-4 text-white">ui: <span className="text-[#F4B942]">'Design Systems'</span>,</p>
                    <p className="pl-4 text-white">frontend: <span className="text-[#F4B942]">'React + Vite'</span>,</p>
                    <p className="pl-4 text-white">edgeAI: <span className="text-[#F4B942]">'Qualcomm NPU'</span>,</p>
                    <p className="pl-4 text-[#88C999]">deliver: <span className="text-white">() =&gt; </span><span className="text-[#F4B942]">'Pixel Perfect ✦'</span></p>
                    <p className="text-[#A79CFF]">&#125;;</p>
                  </div>

                  {/* Feature highlights chips */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="flex items-center gap-2 p-2 rounded-[8px] border border-[#E5E7EB] dark:border-white/10 bg-[#F9F8F5] dark:bg-[#0E131F]">
                      <CheckCircle2 size={16} className="text-[#88C999]" />
                      <span className="font-mono text-xs font-bold text-[#111827] dark:text-white">Fast &amp; Typed</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-[8px] border border-[#E5E7EB] dark:border-white/10 bg-[#F9F8F5] dark:bg-[#0E131F]">
                      <Layers size={16} className="text-[#A79CFF]" />
                      <span className="font-mono text-xs font-bold text-[#111827] dark:text-white">Accessible</span>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
