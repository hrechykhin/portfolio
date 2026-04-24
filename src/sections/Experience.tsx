import Section from '../components/Section';
import { experience } from '../data/experience';

function formatMonth(ym: string | 'Present') {
  if (ym === 'Present') return 'Present';
  const [y, m] = ym.split('-');
  const d = new Date(Number(y), Number(m) - 1);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="03 · Experience"
      title={<>Work history.</>}
      aside={`${experience.length} roles · since 2018`}
    >
      <ol className="rule-strong border-t-0 [&>li]:border-t [&>li]:border-[color:var(--rule)]">
        {experience.map((e) => (
          <li
            key={e.company + e.start}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr_200px] gap-4 md:gap-10 py-8 md:py-10"
          >
            {/* Timeline */}
            <div className="font-mono text-meta uppercase text-[color:var(--fg-3)] leading-relaxed">
              <div>{formatMonth(e.start)}</div>
              <div className="text-[color:var(--fg-4)]">↓</div>
              <div>{formatMonth(e.end)}</div>
            </div>

            {/* Main */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="text-h3 font-medium text-[color:var(--fg)]">{e.role}</h3>
                <span className="text-[color:var(--fg-4)]">·</span>
                <span className="text-[color:var(--fg-2)]">{e.company}</span>
              </div>
              <ul className="space-y-1.5 mb-4 max-w-reading">
                {e.bullets.map((b, i) => (
                  <li key={i} className="grid grid-cols-[16px_1fr] gap-2 text-body text-[color:var(--fg-2)]">
                    <span className="text-[color:var(--fg-4)] select-none mt-px">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1.5">
                {e.stack.map(s => (
                  <li
                    key={s}
                    className="
                      font-mono text-[11px] leading-none
                      text-[color:var(--fg-3)]
                      px-2 py-1.5 rounded
                      border border-[color:var(--rule)]
                    "
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aside */}
            <div className="font-mono text-meta uppercase text-[color:var(--fg-3)] md:text-right">
              <div>{e.location}</div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
