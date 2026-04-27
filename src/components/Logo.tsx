// src/components/Logo.tsx
type LogoProps = {
  /** rendered pixel size (square). Default 28. */
  size?: number;
  /** show the rust accent on the H crossbar. Default true. */
  accent?: boolean;
  /** override the ink color. Default 'currentColor' (inherits from parent). */
  color?: string;
  className?: string;
};

/**
 * V. Hrechykhin monogram — VH inside square brackets, accent crossbar on H.
 * Strokes are on a 2px grid in a 56×56 viewBox. Renders crisply 16px → ∞.
 *
 * Theming:
 *   - color follows `currentColor` so set <Logo /> color via parent text color.
 *   - accent uses `var(--logo-accent)` (defaults to #b8512a) so dark themes
 *     can override to e.g. signal-400 / #d4734a.
 */
export function Logo({ size = 28, accent = true, color, className }: LogoProps) {
  const ink = color ?? 'currentColor';
  const mid = accent ? 'var(--logo-accent, #b8512a)' : ink;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      role="img"
      aria-label="V. Hrechykhin"
      className={className}
    >
      <path d="M 14 10 L 8 10 L 8 46 L 14 46" fill="none" stroke={ink} strokeWidth="2.5" />
      <path d="M 42 10 L 48 10 L 48 46 L 42 46" fill="none" stroke={ink} strokeWidth="2.5" />
      <path d="M 18 14 L 24 36 L 30 14"        fill="none" stroke={ink} strokeWidth="3" />
      <path d="M 32 14 L 32 38"                fill="none" stroke={ink} strokeWidth="3" />
      <path d="M 40 14 L 40 38"                fill="none" stroke={ink} strokeWidth="3" />
      <path d="M 32 26 L 40 26"                fill="none" stroke={mid} strokeWidth="3" />
    </svg>
  );
}
