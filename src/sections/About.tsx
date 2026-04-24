import Section from '../components/Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title={<>A bit about me.</>}
      aside={undefined}
    >
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10">
        {/* Left: nothing (keeps the eyebrow column empty for rhythm) */}
        <div aria-hidden />
        <div className="max-w-reading">
          <p className="text-lede text-[color:var(--fg)] mb-6">
            Python Software Engineer with <strong className="font-medium">4+ years</strong>{' '}
            of experience building and maintaining production-grade backend systems.
            Specialized in REST APIs using Django, DRF, and FastAPI, with a strong focus
            on reliability, data consistency, and maintainability.
          </p>
          <p className="text-body text-[color:var(--fg-2)] mb-4">
            Currently at <strong className="text-[color:var(--fg)] font-medium">Erste Digital</strong>,
            contributing to data-driven backend services and GCP integrations in a regulated
            European banking environment. Experienced in owning backend components end-to-end
            and operating within complex, distributed systems.
          </p>
          <p className="text-body text-[color:var(--fg-2)]">
            Based in {profile.location}.
          </p>
        </div>
      </div>
    </Section>
  );
}
