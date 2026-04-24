import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="container-site">
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 md:mb-14 font-mono text-meta uppercase text-[color:var(--fg-3)]">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal animate-pulse" aria-hidden />
            Available · Q2 '26
          </span>
          <span className="hidden sm:inline text-[color:var(--fg-4)]">·</span>
          <span>{profile.location}</span>
          <span className="hidden sm:inline text-[color:var(--fg-4)]">·</span>
          <span>4+ yrs backend</span>
        </div>

        {/* Headline */}
        <h1 className="text-h1 md:text-display font-medium text-[color:var(--fg)] max-w-[18ch]">
          Backend systems,
          <br />
          <span className="font-serif italic text-signal">quietly</span>{' '}
          <span className="text-[color:var(--fg-2)]">engineered</span>
          <br />
          for production.
        </h1>

        {/* Supporting copy + CTA */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
          <div>
            <p className="eyebrow mb-3">Currently</p>
            <p className="text-body text-[color:var(--fg-2)] leading-relaxed">
              Python Software Engineer at{' '}
              <span className="text-[color:var(--fg)] font-medium">Erste Digital</span>,
              contributing to data-driven backend services and GCP integrations in a regulated
              European banking environment.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">About</p>
            <p className="text-lede text-[color:var(--fg)] leading-snug max-w-prose-tight">
              Four years of REST APIs with Django, DRF, and FastAPI — with a strong focus on
              reliability, data consistency, and the kind of ownership that comes from
              understanding a system deeply.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 md:mt-16 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              px-5 py-3 rounded-full
              bg-[color:var(--fg)] text-[color:var(--bg)]
              text-sm font-medium
              hover:bg-signal hover:text-white
              transition-colors duration-200
            "
          >
            View projects <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="
              inline-flex items-center gap-2
              px-5 py-3 rounded-full
              border border-[color:var(--rule-strong)] text-[color:var(--fg)]
              text-sm font-medium
              hover:border-[color:var(--fg)]
              transition-colors duration-200
            "
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-3 rounded-full
              text-[color:var(--fg-2)]
              text-sm font-medium
              hover:text-[color:var(--fg)]
              transition-colors duration-200
            "
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
