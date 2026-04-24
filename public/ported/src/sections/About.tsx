import Section from '../components/Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<>A bit about me.</>}
      aside="~3 min read"
    >
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10">
        {/* Left: nothing (keeps the eyebrow column empty for rhythm) */}
        <div aria-hidden />
        <div className="max-w-reading">
          <p className="text-lede text-[color:var(--fg)] mb-6">
            I'm a Python Software Engineer with <strong className="font-medium">4+ years</strong>{' '}
            of experience building and maintaining production-grade backend systems.
            I care about writing code that is maintainable, well-reasoned, and reliable
            in production.
          </p>
          <p className="text-body text-[color:var(--fg-2)] mb-4">
            Currently at <strong className="text-[color:var(--fg)] font-medium">Erste Digital</strong>,
            contributing to data-driven backend services and GCP integrations in a regulated
            European banking environment. Before that, I spent over three years at Raccoon Gang
            owning backend components end-to-end — reward systems, logistics services, payment
            integrations — working with AWS to support scalability and deployment.
          </p>
          <p className="text-body text-[color:var(--fg-2)]">
            Based in {profile.location}. Remote-friendly and open to backend roles with teams
            that take data modeling, migrations, and production quality seriously.
          </p>
        </div>
      </div>
    </Section>
  );
}
