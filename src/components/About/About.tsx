import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        <p className="section-label">About</p>
        <h2 id="about-heading" className="section-title">
          A bit about me
        </h2>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            I'm a Python Software Engineer with 4+ years of experience building and maintaining
            production-grade backend systems. Currently at Erste Digital, I contribute to
            data-driven backend services and GCP integrations in a regulated European banking
            environment, where reliability, data integrity, and auditability are non-negotiable.
          </p>
          <p className={styles.paragraph}>
            Before that, I spent over three years at Raccoon Gang owning backend components
            end-to-end: designing REST APIs with Django, DRF, and FastAPI; building business-critical
            features like reward systems, logistics services, and payment integrations; and working
            with AWS to support scalability and deployment.
          </p>
          <p className={styles.paragraph}>
            I care about writing code that is maintainable, well-reasoned, and reliable in
            production. I value clear engineering, proper data modeling, and the kind of ownership
            that comes from understanding a system deeply, not just delivering features.
          </p>
        </div>
      </div>
    </section>
  );
}
