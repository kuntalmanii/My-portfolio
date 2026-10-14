import { useState } from 'react'
import { Copy, Check, Mail, ArrowUpRight, GitFork, Link2, Sparkles, Heart } from 'lucide-react'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'kuntalmani12@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <footer id="contact" className="bg-[#F9F8F5] border-t-2 border-[#111827]">
      
      {/* Callout Section: "Let's work together." */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="relative rounded-[8px] bg-white border-2 border-[#111827] shadow-[6px_6px_0px_0px_#111827] p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Subtle background texture */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl flex flex-col items-start gap-6">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#88C999] border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] font-mono text-xs font-bold text-[#111827]">
              <span className="w-2 h-2 rounded-full bg-[#111827] animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            {/* Callout Headline */}
            <div>
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4B5563] mb-2">
                Get In Touch
              </p>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#111827] tracking-tight leading-[1.05]">
                Let's work together.
              </h2>
            </div>

            {/* Description */}
            <p className="font-mono text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
              Whether you need a product developer to build your next web application, a design system architect, or a frontend engineer who cares about speed and craft — my inbox is always open.
            </p>

            {/* Action Buttons: Copy Email & Send an Email */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              
              {/* Direct "Send an Email" link button styled with accent color (#F4B942) and hard shadow */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] font-display font-bold text-sm sm:text-base text-[#111827] bg-[#F4B942] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all duration-150 cursor-pointer select-none"
              >
                <Mail size={18} className="text-[#111827]" />
                <span>Send an Email</span>
                <ArrowUpRight size={18} className="text-[#111827]" />
              </a>

              {/* Interactive React "Copy Email" button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-live="polite"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[8px] font-mono text-sm sm:text-base font-bold text-[#111827] border-2 border-[#111827] shadow-[4px_4px_0px_0px_#111827] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111827] transition-all duration-150 cursor-pointer select-none ${
                  copied ? 'bg-[#88C999]' : 'bg-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-[#111827]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} className="text-[#111827]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

            </div>

            {/* Display email text */}
            <span className="font-mono text-xs text-[#4B5563] pt-1">
              or reach out directly at <strong className="text-[#111827] underline decoration-[#A79CFF] underline-offset-4">{emailAddress}</strong>
            </span>

          </div>
        </div>
      </div>

      {/* Minimal bottom bar */}
      <div className="bg-[#111827] text-white border-t-2 border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Left: Brand Monogram + Copyright */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-[6px] bg-[#A79CFF] text-[#111827] font-display font-black text-sm flex items-center justify-center border border-white">
              MK
            </span>
            <p className="font-mono text-xs text-[#E5E7EB]">
              &copy; {new Date().getFullYear()} Manish Kuntal. All rights reserved.
            </p>
          </div>

          {/* Center: Space Mono Label */}
          <div className="font-mono text-xs text-[#88C999] tracking-wider flex items-center gap-1.5">
            <Sparkles size={13} className="text-[#F4B942]" />
            <span>Crafted with React, Vite &amp; Tailwind CSS</span>
          </div>

          {/* Right: Direct links to GitHub (kuntalmanii) and LinkedIn (manish-kuntal) */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/kuntalmanii"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E5E7EB] hover:text-[#F4B942] transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-transparent hover:decoration-[#F4B942]"
            >
              <GitFork size={14} />
              <span>GitHub (kuntalmanii)</span>
              <ArrowUpRight size={12} />
            </a>
            
            <a
              href="https://linkedin.com/in/manish-kuntal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E5E7EB] hover:text-[#F4B942] transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-transparent hover:decoration-[#F4B942]"
            >
              <Link2 size={14} />
              <span>LinkedIn (manish-kuntal)</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}
