/**
 * src/styles/tokens.js
 *
 * Design tokens as JS constants — single source of truth that mirrors
 * tailwind.config.js so tokens can be consumed in both CSS and JS contexts
 * (e.g., canvas libraries, inline styles, Framer Motion variants).
 */

export const colors = {
  primary:        '#A79CFF',
  secondary:      '#F4B942',
  accent:         '#F4B942',
  background:     '#F9F8F5',
  surface:        '#88C999',
  textPrimary:    '#111827',
  textSecondary:  '#4B5563',
  border:         '#E5E7EB',
}

export const radii = {
  card:    '8px',
  control: '8px',
  pill:    '9999px',
}

export const shadows = {
  hard:          '4px 4px 0px 0px #111827',
  hardSm:        '2px 2px 0px 0px #111827',
  hardLg:        '6px 6px 0px 0px #111827',
  hardPrimary:   '4px 4px 0px 0px #A79CFF',
  hardSecondary: '4px 4px 0px 0px #F4B942',
  hardSurface:   '4px 4px 0px 0px #88C999',
}

export const fonts = {
  display: '"Space Grotesk", system-ui, sans-serif',
  body:    '"Space Mono", monospace',
}
