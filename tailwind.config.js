/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ─── Color Palette ──────────────────────────────────────────────────────
      colors: {
        primary:        '#A79CFF',
        secondary:      '#F4B942',
        accent:         '#F4B942',
        background:     '#F9F8F5',
        surface:        '#88C999',
        'text-primary':   '#111827',
        'text-secondary': '#4B5563',
        border:         '#E5E7EB',
      },

      // ─── Border Radius ──────────────────────────────────────────────────────
      borderRadius: {
        card:    '8px',
        control: '8px',
        pill:    '9999px',
      },

      // ─── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"Space Mono"',    'monospace'],
        mono:    ['"Space Mono"',    'monospace'],
      },

      // ─── Box Shadows (retro hard drop) ─────────────────────────────────────
      boxShadow: {
        'hard':    '4px 4px 0px 0px #111827',
        'hard-sm': '2px 2px 0px 0px #111827',
        'hard-lg': '6px 6px 0px 0px #111827',
        'hard-primary':   '4px 4px 0px 0px #A79CFF',
        'hard-secondary': '4px 4px 0px 0px #F4B942',
        'hard-surface':   '4px 4px 0px 0px #88C999',
      },

      // ─── Keyframe Animations ────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'fade-up':       'fade-up 0.5s ease-out both',
        'fade-in':       'fade-in 0.4s ease-out both',
        'slide-in-left': 'slide-in-left 0.5s ease-out both',
        wiggle:          'wiggle 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
