import { ArrowUpRight, ArrowDown, Code2, Sparkles, Terminal, Layers, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] pt-28 sm:pt-36 pb-16 lg:pb-24 flex items-center bg-[#F9F8F5] overflow-hidden"
    >
      {/* Subtle retro background grid accent */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro, Title, Role, Subtitle, CTA buttons */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-7 animate-fade-up">
            
            {/* Tag: "Hey, I'm 👋 Manish Kuntal" */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] font-mono text-xs sm:text-sm font-bold text-[#111827] hover:shadow-[4px_4px_0px_0px_#111827] hover:-translate-y-0.5 transition-all">
              <span>Hey, I'm</span>
              <span className="inline-block animate-wiggle text-base">👋</span>
              <span className="text-[#111827]">Manish Kuntal</span>
            </div>

            {/* Huge display title in Space Grotesk: "PRODUCT DEVELOPER & DESIGNER" with mixed-case styling */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] tracking-tight leading-[1.04] text-[#111827]">
              <span className="block uppercase tracking-tight">PRODUCT DEVELOPER</span>
              <span className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-1 sm:mt-2">
                <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl text-[#4B5563]">
                  &amp;
                </span>
                <span className="uppercase tracking-tight text-[#111827] underline decoration-[#F4B942] decoration-4 sm:decoration-6 underline-offset-8">
                  DESIGNER
                </span>
              </span>
            </h1>

            {/* Role badge: "Frontend & Full-Stack Engineer" with primary color fill (#A79CFF), 8px radius, and solid shadow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[8px] bg-[#A79CFF] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] text-[#111827] font-mono text-xs sm:text-sm font-bold tracking-tight hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#111827] transition-all">
              <Terminal size={16} className="text-[#111827]" />
              <span>Frontend &amp; Full-Stack Engineer</span>
            </div>

            {/* Subtitle: 2-line description in Space Mono highlighting clean UI architecture and dynamic web apps */}
            <p className="font-mono text-sm sm:text-base text-[#4B5563] max-w-xl leading-relaxed">
              Architecting clean UI architecture with reusable component systems.
              <br className="hidden sm:inline" />
              {' '}Building dynamic web apps that pair high design standards with robust code.
            </p>

            {/* Two buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Button 1: "View my work" (accent color #F4B942, solid black border, 4px shadow, hover lift) */}
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] font-display font-bold text-sm sm:text-base text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all duration-150 cursor-pointer select-none"
              >
                <span>View my work</span>
                <ArrowUpRight size={18} className="text-[#111827]" />
              </a>

              {/* Button 2: "Scroll to explore" (white background with bounce arrow icon, solid black border, 4px shadow) */}
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] font-display font-bold text-sm sm:text-base text-[#111827] bg-white border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all duration-150 cursor-pointer select-none group"
              >
                <span>Scroll to explore</span>
                <ArrowDown size={18} className="text-[#111827] group-hover:translate-y-0.5 transition-transform animate-bounce" />
              </a>
            </div>

            {/* Quick tech stack tags */}
            <div className="flex items-center gap-2 flex-wrap pt-2">
              <span className="font-mono text-xs text-[#4B5563] font-semibold mr-1">Focus:</span>
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'].map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#111827] shadow-[1px_1px_0px_0px_#111827]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Showcase Card matching retro-modern design tokens */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in animation-delay-200">
            <div className="relative w-full max-w-md">
              
              {/* Layered decorative background cards for depth */}
              <div 
                className="absolute inset-0 bg-[#A79CFF] rounded-[8px] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] rotate-3 translate-x-2 translate-y-3" 
                aria-hidden="true" 
              />
              <div 
                className="absolute inset-0 bg-[#F4B942] rounded-[8px] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] -rotate-2 -translate-x-1 translate-y-1" 
                aria-hidden="true" 
              />

              {/* Foreground interactive card */}
              <div className="relative bg-white rounded-[8px] border-2 border-[#111827] shadow-[6px_6px_0px_0px_#111827] p-6 flex flex-col gap-5">
                
                {/* Header with surface accent & terminal controls */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#E5E7EB]">
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
                  <div className="w-14 h-14 rounded-[8px] bg-[#88C999] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] flex items-center justify-center font-display font-black text-2xl text-[#111827]">
                    MK
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#111827] leading-tight">
                      Manish Kuntal
                    </h3>
                    <p className="font-mono text-xs text-[#4B5563]">
                      Product Dev &bull; UI Engineer
                    </p>
                  </div>
                </div>

                {/* Mini Code Architecture Box */}
                <div className="bg-[#111827] text-[#F9F8F5] rounded-[8px] p-4 font-mono text-xs leading-relaxed border-2 border-[#111827] shadow-[2px_2px_0px_0px_#88C999] overflow-x-auto">
                  <p className="text-[#88C999]">// Clean Architecture</p>
                  <p className="text-[#A79CFF]">const <span className="text-white">engineer</span> = &#123;</p>
                  <p className="pl-4 text-white">ui: <span className="text-[#F4B942]">'Design Systems'</span>,</p>
                  <p className="pl-4 text-white">frontend: <span className="text-[#F4B942]">'React + Vite'</span>,</p>
                  <p className="pl-4 text-white">style: <span className="text-[#F4B942]">'Retro Modern'</span>,</p>
                  <p className="pl-4 text-[#88C999]">deliver: <span className="text-white">() =&gt; </span><span className="text-[#F4B942]">'Pixel Perfect ✦'</span></p>
                  <p className="text-[#A79CFF]">&#125;;</p>
                </div>

                {/* Feature highlights chips */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2 p-2 rounded-[8px] border border-[#E5E7EB] bg-[#F9F8F5]">
                    <CheckCircle2 size={16} className="text-[#111827]" />
                    <span className="font-mono text-xs font-bold text-[#111827]">Fast &amp; Typed</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-[8px] border border-[#E5E7EB] bg-[#F9F8F5]">
                    <Layers size={16} className="text-[#111827]" />
                    <span className="font-mono text-xs font-bold text-[#111827]">Accessible</span>
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
