import { useState } from 'react'
import {
  Fingerprint,
  ShieldCheck,
  Volume2,
  Play,
  Pause,
  Type,
  Sparkles,
  KeyRound,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Playground() {
  // Micro-interaction states for experiment cards
  const [passkeyState, setPasskeyState] = useState('idle') // 'idle' | 'scanning' | 'verified'
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioProgress, setAudioProgress] = useState(42)
  const [langTab, setLangTab] = useState('hi') // 'hi' | 'en'

  const handleSimulatePasskey = () => {
    if (passkeyState === 'scanning') return
    setPasskeyState('scanning')
    setTimeout(() => {
      setPasskeyState('verified')
      setTimeout(() => setPasskeyState('idle'), 2500)
    }, 1200)
  }

  const experiments = [
    {
      id: 'webauthn-passkeys',
      title: 'WebAuthn Passkeys Demo',
      subtitle: 'Biometric Authentication Flow',
      description:
        'A zero-dependency biometric authentication flow prototype leveraging browser WebAuthn APIs, platform Touch ID/Face ID authenticators, and public-key challenge verification.',
      accentColor: '#A79CFF', // Primary lavender
      badge: 'Security Prototype',
      tags: ['WebAuthn', 'Passkeys', 'FIDO2', 'Touch ID'],
      renderVisual: () => (
        <div className="h-44 bg-[#111827] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] dark:border-white/20 relative overflow-hidden text-white">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#A79CFF] tracking-wider uppercase flex items-center gap-1.5">
              <KeyRound size={12} />
              <span>navigator.credentials</span>
            </span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-[#88C999] border border-white/20">
              FIDO2 Ready
            </span>
          </div>

          {/* Interactive Biometric Sensor Button */}
          <div className="flex flex-col items-center justify-center my-auto">
            <button
              type="button"
              onClick={handleSimulatePasskey}
              aria-label="Simulate biometric authentication"
              className={`p-3.5 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                passkeyState === 'verified'
                  ? 'bg-[#88C999] border-[#88C999] text-[#111827] shadow-[0_0_15px_#88C999]'
                  : passkeyState === 'scanning'
                  ? 'bg-[#A79CFF] border-[#A79CFF] text-[#111827] animate-pulse'
                  : 'bg-white/10 border-white/30 text-[#A79CFF] hover:border-[#A79CFF] hover:bg-white/20 hover:scale-105'
              }`}
            >
              {passkeyState === 'verified' ? (
                <ShieldCheck size={28} />
              ) : (
                <Fingerprint size={28} />
              )}
            </button>
            <span className="font-mono text-[10px] mt-2 font-bold tracking-wide">
              {passkeyState === 'verified'
                ? '✦ Key Pair Verified'
                : passkeyState === 'scanning'
                ? 'Scanning Touch ID...'
                : 'Click to test Touch ID'}
            </span>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-[#E5E7EB]/70 border-t border-white/10 pt-1.5">
            <span>ECDSA P-256</span>
            <span className="text-[#88C999]">No Passwords Stored</span>
          </div>
        </div>
      ),
    },
    {
      id: 'venture-saathi-brand',
      title: 'Venture Saathi Brand System',
      subtitle: 'Bilingual Typography & Layout',
      description:
        'A comprehensive design token framework pairing Space Grotesk with Devanagari letterforms for financial inclusion apps. Engineered with typographic scale, baseline grids, and bilingual balance.',
      accentColor: '#F4B942', // Secondary golden
      badge: 'Brand & Type System',
      tags: ['Devanagari', 'Space Grotesk', 'Typography', 'Tokens'],
      renderVisual: () => (
        <div className="h-44 bg-[#F9F8F5] dark:bg-[#0E131F] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] dark:border-white/20 relative overflow-hidden">
          {/* Typographic grid lines */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] dark:bg-[linear-gradient(to_bottom,#2E3B52_1px,transparent_1px)] [background-size:100%_16px] opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between pb-1 border-b border-[#111827]/15 dark:border-white/15">
            <span className="font-mono text-[10px] font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
              <Type size={12} className="text-[#111827] dark:text-[#F4B942]" />
              <span>Devanagari &times; Grotesk</span>
            </span>

            {/* Language preview toggle */}
            <div className="flex items-center p-0.5 rounded-full bg-white dark:bg-[#161D2E] border border-[#111827] dark:border-white/20 shadow-[1px_1px_0px_0px_#111827]">
              <button
                type="button"
                onClick={() => setLangTab('hi')}
                className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-full transition-all ${
                  langTab === 'hi' ? 'bg-[#F4B942] text-[#111827]' : 'text-[#4B5563] dark:text-[#9CA3AF]'
                }`}
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => setLangTab('en')}
                className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-full transition-all ${
                  langTab === 'en' ? 'bg-[#F4B942] text-[#111827]' : 'text-[#4B5563] dark:text-[#9CA3AF]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Bilingual Specimen */}
          <div className="relative z-10 my-auto text-center">
            {langTab === 'hi' ? (
              <div className="animate-fade-in">
                <span className="block font-black text-2xl text-[#111827] dark:text-white tracking-tight">
                  उद्यम साथी
                </span>
                <span className="block font-mono text-[10px] text-[#4B5563] dark:text-[#9CA3AF] mt-0.5">
                  वित्तीय सशक्तिकरण मंच &bull; 48px Display
                </span>
              </div>
            ) : (
              <div className="animate-fade-in">
                <span className="block font-display font-black text-2xl text-[#111827] dark:text-white tracking-tight">
                  VENTURE SAATHI
                </span>
                <span className="block font-mono text-[10px] text-[#4B5563] dark:text-[#9CA3AF] mt-0.5">
                  Financial Empowerment &bull; 48px Display
                </span>
              </div>
            )}
          </div>

          <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#111827] dark:text-white bg-white/90 dark:bg-[#161D2E]/90 px-2 py-1 rounded border border-[#111827]/20 dark:border-white/10">
            <span>Optical Margin Alignment</span>
            <span className="font-bold text-[#F4B942] bg-[#111827] dark:bg-black px-1 rounded">1.25 Modular</span>
          </div>
        </div>
      ),
    },
    {
      id: 'tactile-voice-player',
      title: 'Tactile Voice Note Player',
      subtitle: 'Audio Scrub & Waveform UI',
      description:
        'A minimalist audio scrub component featuring interactive frequency waveform bars, tactile scrub handles, variable playback rates (1.0x - 2.0x), and sub-millisecond timeline tracking.',
      accentColor: '#88C999', // Surface mint
      badge: 'Audio UI Component',
      tags: ['Web Audio API', 'Waveform', 'Scrubber', 'Canvas'],
      renderVisual: () => {
        const bars = [25, 45, 60, 80, 40, 95, 70, 85, 50, 65, 90, 75, 40, 80, 60, 45, 30, 70, 85, 40]
        return (
          <div className="h-44 bg-[#111827] rounded-t-[6px] p-4 flex flex-col justify-between border-b-2 border-[#111827] dark:border-white/20 relative overflow-hidden text-white">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#88C999] tracking-wider uppercase flex items-center gap-1.5">
                <Volume2 size={12} />
                <span>voice_memo_04.wav</span>
              </span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#88C999] text-[#111827] font-bold">
                1.5&times;
              </span>
            </div>

            {/* Interactive Audio Waveform Scrubber */}
            <div className="flex items-center gap-3 my-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                className="w-10 h-10 rounded-full bg-[#88C999] text-[#111827] border-2 border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>

              <div className="flex-1 flex flex-col gap-1.5">
                {/* Waveform Bars */}
                <div className="flex items-end gap-1 h-10 cursor-pointer">
                  {bars.map((height, i) => {
                    const isPlayed = (i / bars.length) * 100 <= audioProgress
                    return (
                      <span
                        key={i}
                        onClick={() => setAudioProgress(((i + 1) / bars.length) * 100)}
                        style={{ height: `${height}%` }}
                        className={`w-1 rounded-full transition-all ${
                          isPlayed ? 'bg-[#88C999]' : 'bg-white/20 hover:bg-white/50'
                        }`}
                      />
                    )
                  })}
                </div>

                {/* Progress track */}
                <div className="flex items-center justify-between font-mono text-[9px] text-[#E5E7EB]/70">
                  <span>0:24</span>
                  <span>1:15</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[9px] text-[#88C999] border-t border-white/10 pt-1.5">
              <span>Dynamic Frequency Visualizer</span>
              <span>Smooth Scrub</span>
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <section id="playground" className="bg-white dark:bg-[#0E131F] py-16 sm:py-24 border-t-2 border-[#111827] dark:border-white/10 transition-colors duration-200 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F8F5] dark:bg-[#161D2E] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] font-mono text-xs font-bold text-[#111827] dark:text-white mb-3">
                <Sparkles size={14} className="text-[#111827] dark:text-[#A79CFF]" />
                <span>LABS &amp; EXPERIMENTS</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight">
                Technical Playground
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] mt-2 max-w-xl">
                Explorations in browser APIs, multilingual typography systems, and high-fidelity interaction components.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#111827] dark:text-white bg-[#F9F8F5] dark:bg-[#161D2E] px-3.5 py-2 rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#000000] self-start sm:self-end">
              <span className="w-2 h-2 rounded-full bg-[#88C999] animate-pulse" />
              <span>Interactive Micro-Apps</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiments.map((exp, idx) => (
            <ScrollReveal key={exp.id} direction="up" delay={100 * (idx + 1)}>
              <article
                className="h-full bg-white dark:bg-[#161D2E] rounded-[8px] border-2 border-[#111827] dark:border-white/20 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#111827] dark:hover:shadow-[6px_6px_0px_0px_#A79CFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Visual Preview / Experiment Container */}
                  {exp.renderVisual()}

                  {/* Card Body */}
                  <div className="p-6">
                    
                    {/* Status / Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-bold text-[#4B5563] dark:text-[#9CA3AF] uppercase tracking-wider">
                        {exp.subtitle}
                      </span>
                      <span
                        className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#111827] shadow-[1px_1px_0px_0px_#111827] text-[#111827]"
                        style={{ backgroundColor: exp.accentColor }}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-xl text-[#111827] dark:text-white leading-tight mb-2.5">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="font-mono text-xs text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-[#F9F8F5] dark:bg-[#0E131F] border border-[#111827] dark:border-white/20 text-[#111827] dark:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Footer Accent Stripe */}
                <div
                  className="h-2 w-full border-t-2 border-[#111827] dark:border-white/20"
                  style={{ backgroundColor: exp.accentColor }}
                />
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
