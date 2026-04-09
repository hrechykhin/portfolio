import { profile } from '../../data/profile';
import styles from './Contact.module.css';

const contactLinks = [
  {
    label: 'GitHub',
    href: profile.github,
    description: 'Code & repositories',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    description: 'Professional profile',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    description: profile.email,
    external: false,
  },
  {
    label: 'Phone',
    href: `tel:${profile.phone}`,
    description: profile.phone,
    external: false,
  },
  {
    label: 'Download CV',
    href: profile.cvUrl,
    description: 'PDF resume',
    external: false,
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-heading">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 id="contact-heading" className="section-title">
          Get in touch
        </h2>
        <p className="section-subtitle">
          Open to backend engineering roles and interesting backend projects. Feel free to reach out.
        </p>

        <div className={styles.links}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.linkCard}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(link.download ? { download: true } : {})}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkDescription}>{link.description}</span>
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <p className={styles.location}>
          <span aria-label="Location">📍</span> {profile.location}
        </p>
      </div>
    </section>
  );
}
