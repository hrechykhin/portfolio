import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="
        group inline-flex items-center gap-2
        font-mono text-meta uppercase text-[color:var(--fg-3)]
        border border-[color:var(--rule)] rounded-full
        px-3 py-1.5
        transition-colors duration-200
        hover:text-[color:var(--fg)] hover:border-[color:var(--rule-strong)]
      "
    >
      <span
        aria-hidden
        className={`
          inline-block w-2 h-2 rounded-full
          ${isDark ? 'bg-signal' : 'bg-[color:var(--fg)]'}
        `}
      />
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
}
