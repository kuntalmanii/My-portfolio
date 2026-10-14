import { ExternalLink, GitFork, ArrowUpRight, Sparkles, MapPin, FileText, Monitor, CheckCircle2 } from 'lucide-react'
import { projectsData } from '../data/projectsData'

// Visual Mockup Component customized for each project type
function ProjectMockup({ type, accentColor, title }) {
  if (type === 'resume') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#111827] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] relative overflow-hidden">
        {/* Terminal / Browser chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#88C999]" />
          </div>
          <span className="font-mono text-[10px] text-[#A79CFF] tracking-wider uppercase">
            gemini-1.5-pro // ats-parser
          </span>
        </div>

        {/* Mock ATS Score & keyword chips */}
        <div className="grid grid-cols-12 gap-3 items-center py-2">
          <div className="col-span-4 bg-white/10 rounded-[6px] p-2.5 text-center border border-white/15">
            <span className="block font-display font-black text-2xl text-[#F4B942] leading-tight">94%</span>
            <span className="font-mono text-[9px] text-[#E5E7EB] uppercase">ATS Match</span>
          </div>
          <div className="col-span-8 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#88C999]" />
              <span className="font-mono text-[10px] text-white">Full-Stack Keywords: 18/20</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-[#A79CFF] h-full w-[94%]" />
            </div>
            <div className="flex gap-1.5 flex-wrap pt-0.5">
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-[#A79CFF]">React</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-[#88C999]">Node.js</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-[#F4B942]">REST API</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-[#88C999]">
          <span>⚡ Client-side parsing verified</span>
          <span>PDF Export Ready</span>
        </div>
      </div>
    )
  }

  if (type === 'map') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#F9F8F5] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] relative overflow-hidden">
        {/* Map Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-80" 
          aria-hidden="true" 
        />

        {/* Header toolbar */}
        <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded-[6px] border border-[#111827] shadow-[2px_2px_0px_0px_#111827]">
          <span className="font-mono text-[10px] font-bold text-[#111827] flex items-center gap-1">
            <MapPin size={12} className="text-[#EF4444]" />
            <span>Leaflet Geolocation Engine</span>
          </span>
          <span className="font-mono text-[10px] font-bold text-[#111827] bg-[#F4B942] px-1.5 py-0.2 rounded border border-[#111827]">
            Radius: 1.5km
          </span>
        </div>

        {/* Floating accommodation cards */}
        <div className="relative z-10 flex items-center justify-center gap-2 py-1">
          <div className="bg-white rounded-[6px] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] p-2 max-w-[200px] -rotate-1">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#111827]">
              <span>Green PG Suites</span>
              <span className="text-[#88C999]">★ 4.8</span>
            </div>
            <p className="font-mono text-[9px] text-[#4B5563] mt-0.5">350m from metro station</p>
          </div>

          <div className="bg-[#F4B942] rounded-[6px] border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] p-2 max-w-[150px] rotate-2 hidden sm:block">
            <p className="font-mono text-[10px] font-black text-[#111827]">12 Nearby PGs</p>
            <p className="font-mono text-[9px] text-[#111827]">Live Coordinates</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#4B5563] bg-white/80 px-2 py-1 rounded border border-[#E5E7EB]">
          <span>OpenStreetMap Tile Provider</span>
          <span className="text-[#111827] font-bold">Express API Sync</span>
        </div>
      </div>
    )
  }

  // PW IOI Redesign Mockup
  return (
    <div className="w-full h-44 sm:h-48 bg-[#111827] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#88C999]" />
        </div>
        <span className="font-mono text-[10px] text-[#88C999] tracking-wider uppercase flex items-center gap-1">
          <Monitor size={11} /> 60 FPS Animation Engine
        </span>
      </div>

      {/* Visual wireframe illustration */}
      <div className="grid grid-cols-3 gap-2.5 items-center py-1">
        <div className="col-span-2 bg-white/5 rounded-[6px] p-2.5 border border-white/10 flex flex-col gap-1.5">
          <div className="h-2 w-2/3 bg-[#88C999] rounded" />
          <div className="h-1.5 w-full bg-white/20 rounded" />
          <div className="h-1.5 w-4/5 bg-white/20 rounded" />
          <div className="flex gap-1.5 pt-1">
            <span className="h-4 w-12 rounded bg-[#A79CFF]/30 border border-[#A79CFF] font-mono text-[8px] text-[#A79CFF] flex items-center justify-center">Next.js</span>
            <span className="h-4 w-12 rounded bg-[#F4B942]/30 border border-[#F4B942] font-mono text-[8px] text-[#F4B942] flex items-center justify-center">GSAP</span>
          </div>
        </div>

        <div className="col-span-1 bg-[#88C999] rounded-[6px] p-2 border-2 border-white/20 flex flex-col items-center justify-center text-center">
          <span className="font-display font-black text-xl text-[#111827] leading-tight">60</span>
          <span className="font-mono text-[8px] font-bold text-[#111827] uppercase">FPS Sync</span>
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-[10px] text-[#A79CFF]">
        <span>⚡ Hardware accelerated motion</span>
        <span>Fluid Layout</span>
      </div>
    </div>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="bg-[#F9F8F5] py-16 sm:py-24 border-t-2 border-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] font-mono text-xs font-bold text-[#111827] mb-3">
              <Sparkles size={14} className="text-[#111827]" />
              <span>FEATURED PORTFOLIO</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111827] tracking-tight">
              Selected Projects
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#4B5563] mt-2 max-w-xl">
              Production web applications and frontend engineering systems built with clean code and interactive craft.
            </p>
          </div>

          <a
            href="https://github.com/kuntalmanii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[8px] font-mono text-xs font-bold text-[#111827] bg-white border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#111827] transition-all self-start sm:self-end"
          >
            <GitFork size={15} />
            <span>github.com/kuntalmanii</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Two-column responsive card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const isLastOdd = idx === projectsData.length - 1 && projectsData.length % 2 !== 0

            return (
              <article
                key={project.id}
                className={`bg-white rounded-[8px] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] hover:shadow-[6px_6px_0px_0px_#111827] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
                  isLastOdd ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Preview Mockup Container */}
                  <ProjectMockup
                    type={project.previewType}
                    accentColor={project.accentColor}
                    title={project.title}
                  />

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    
                    {/* Top Row: Category + Status Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      {/* Status Badge */}
                      <span
                        className={`font-mono text-xs font-bold px-3 py-1 rounded-full border border-[#111827] shadow-[2px_2px_0px_0px_#111827] ${
                          project.statusVariant === 'primary'
                            ? 'bg-[#A79CFF] text-[#111827]'
                            : project.statusVariant === 'secondary'
                            ? 'bg-[#F4B942] text-[#111827]'
                            : 'bg-[#88C999] text-[#111827]'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] group-hover:text-[#111827] transition-colors leading-tight mb-2.5">
                      {project.title}
                    </h3>

                    {/* Concise description */}
                    <p className="font-mono text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights bullet points if expanded */}
                    {isLastOdd && (
                      <div className="grid sm:grid-cols-3 gap-3 mb-5 p-3 rounded-[6px] bg-[#F9F8F5] border border-[#E5E7EB]">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5 font-mono text-[11px] text-[#111827]">
                            <CheckCircle2 size={13} className="text-[#88C999] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F9F8F5] border border-[#111827] text-[#111827] shadow-[1px_1px_0px_0px_#111827]"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Footer: Direct Link to github.com/kuntalmanii */}
                <div className="px-6 sm:px-7 py-4 bg-[#F9F8F5] border-t-2 border-[#111827] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#4B5563]">
                    <GitFork size={13} className="text-[#111827]" />
                    <span className="truncate">github.com/kuntalmanii</span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[6px] font-mono text-xs font-bold text-[#111827] bg-white border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] hover:bg-[#F4B942] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#111827] transition-all cursor-pointer select-none"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </article>
            )
          })}
        </div>

        {/* Bottom CTA for full GitHub portfolio */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-[8px] bg-white border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827]">
            <p className="font-mono text-xs sm:text-sm font-bold text-[#111827]">
              Interested in more open-source repositories and experiments?
            </p>
            <a
              href="https://github.com/kuntalmanii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] font-display font-bold text-xs sm:text-sm text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111827] transition-all"
            >
              <GitFork size={15} />
              <span>Explore All on GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
