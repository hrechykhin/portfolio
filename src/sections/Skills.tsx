import Section from '../components/Section';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title={<>Technical focus.</>}
      aside={`${skills.length} categories`}
    >
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        border-l border-t border-[color:var(--rule)]
      ">
        {skills.map((cat) => (
          <div
            key={cat.category}
            className="
              border-r border-b border-[color:var(--rule)]
              p-6 md:p-8
            "
          >
            <h3 className="font-mono text-meta uppercase text-signal mb-4 pb-3 border-b border-dashed border-[color:var(--rule)]">
              {cat.category}
            </h3>
            <ul className="space-y-1">
              {cat.items.map(item => (
                <li
                  key={item}
                  className="text-sm text-[color:var(--fg-2)] leading-relaxed"
                >
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
