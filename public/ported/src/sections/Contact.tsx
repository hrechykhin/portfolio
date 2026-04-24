import Section from '../components/Section';
import { profile } from '../data/profile';

const LINKS = [
  { label: 'Email',    value: profile.email,     href: `mailto:${profile.email}`, primary: true },
  { label: 'GitHub',   value: '@hrechykhin',     href: profile.github },
  { label: 'LinkedIn', value: 'hrechykhin-vlad', href: profile.linkedin },
  { label: 'Location', value: profile.location,  href: null },
] as const;

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title={
        <>
          Let's build something{' '}
          <span className="font-serif italic text-signal">reliable.</span>
        </>
      }
      aside={profile.availability}
    >
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10">
        <div aria-hidden />
        <div>
          <p className="text-lede text-[color:var(--fg)] max-w-reading mb-12">
            Python, Django, FastAPI, PostgreSQL. Open to backend roles with teams that
            care about data quality, migrations, and systems that keep working.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
            {LINKS.map(l => (
              <div key={l.label}>
                <dt className="eyebrow mb-2">{l.label}</dt>
                <dd>
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`
                        text-base
                        ${l.primary ? 'text-signal font-medium' : 'text-[color:var(--fg)]'}
                        hover:underline underline-offset-4 decoration-[color:var(--rule-strong)]
                      `}
                    >
                      {l.value} {l.href.startsWith('http') && <span aria-hidden className="text-[color:var(--fg-3)]">↗</span>}
                    </a>
                  ) : (
                    <span className="text-base text-[color:var(--fg)]">{l.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
