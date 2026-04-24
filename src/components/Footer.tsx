import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--rule)]">
      <div className="container-site py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-meta uppercase text-[color:var(--fg-3)]">
        <span>© {new Date().getFullYear()} · {profile.name}</span>
        <a href="#top" className="hover:text-[color:var(--fg)] transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
