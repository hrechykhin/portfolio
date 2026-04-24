import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f7f5f1',  // page bg (light)
          raised:  '#ffffff',  // elevated surfaces
          sunken:  '#eeeae2',  // inset / subtle
          ink:     '#0f0e0c',  // primary text
          ink2:    '#2b2823',  // secondary text
          ink3:    '#6a635a',  // tertiary / meta
          ink4:    '#a39c91',  // quaternary / disabled
          rule:    '#e4ded0',  // hairline borders
          ruleStrong: '#b9b0a0',
        },
        graphite: {
          DEFAULT: '#0e0f11',  // page bg (dark)
          raised:  '#15171a',
          sunken:  '#0a0b0d',
          ink:     '#ebe8e1',
          ink2:    '#c8c4bb',
          ink3:    '#8a857b',
          ink4:    '#555049',
          rule:    '#1e2024',
          ruleStrong: '#2b2e34',
        },
        signal: {
          DEFAULT: '#c44a1f',   // rust accent — WCAG AA in both themes
          soft:    '#f0d6c8',
          strong:  '#9a3713',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      fontSize: {
        // Custom semantic scale — overrides Tailwind defaults where named
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }], // 11px
        'meta':    ['0.75rem',   { lineHeight: '1.2', letterSpacing: '0.08em' }], // 12px
        'body':    ['1rem',      { lineHeight: '1.6' }],
        'lede':    ['1.25rem',   { lineHeight: '1.5' }],
        'h3':      ['1.5rem',    { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'h2':      ['2.25rem',   { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h1':      ['3.5rem',    { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display': ['5.5rem',    { lineHeight: '0.95', letterSpacing: '-0.045em' }],
      },
      maxWidth: {
        'prose-tight': '58ch',
        'reading':     '68ch',
        'container':   '1240px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
