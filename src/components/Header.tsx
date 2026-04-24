import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/profile';

const NAV = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-[background-color,border-color,backdrop-filter] duration-200
        ${scrolled
          ? 'bg-[color:var(--bg)]/80 backdrop-blur-md border-b border-[color:var(--rule)]'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="container-site flex items-center justify-between h-16">
        <a href="#top" className="flex items-baseline gap-3 group">
          <span className="font-medium tracking-tight text-[color:var(--fg)]">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </span>
          <span className="font-mono text-meta uppercase text-[color:var(--fg-3)] hidden sm:inline">
            / {profile.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                px-3 py-1.5 text-sm
                text-[color:var(--fg-2)] hover:text-[color:var(--fg)]
                transition-colors duration-150
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-1.5
              font-mono text-meta uppercase
              text-[color:var(--fg)]
              border border-[color:var(--rule-strong)] rounded-full
              px-3 py-1.5
              hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)]
              transition-colors duration-200
            "
          >
            CV <span aria-hidden>↓</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[color:var(--fg-2)]"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[color:var(--rule)] bg-[color:var(--bg)]">
          <nav className="container-site py-4 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-[color:var(--rule)] text-[color:var(--fg-2)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
