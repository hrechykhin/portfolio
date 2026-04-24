export interface Experience {
  company: string;
  role: string;
  start: string;    // 'YYYY-MM'
  end: string | 'Present';
  location: string;
  bullets: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: 'Erste Digital',
    role: 'Software Engineer',
    start: '2025-03',
    end: 'Present',
    location: 'Bratislava, SK',
    bullets: [
      'Contributing to backend and data-processing services in Python for internal enterprise platforms, focusing on data validation, processing workflows and service reliability',
      'Developing and maintaining integrations with GCP data services to support analytics and business operations',
      'Designing and implementing backend services in Java (Spring Boot), contributing to system interoperability and maintainability',
      'Operating in a regulated banking environment with strong focus on data integrity, auditability and reliability',
      'Participating in architectural discussions and contributing to incremental design improvements',
    ],
    stack: ['Python', 'Java', 'Spring Boot', 'FastAPI', 'GCP', 'BigQuery', 'Pub/Sub'],
  },
  {
    company: 'Raccoon Gang',
    role: 'Python Developer',
    start: '2021-10',
    end: '2025-02',
    location: 'Remote',
    bullets: [
      'Designed and implemented scalable backend services using Django, DRF and FastAPI',
      'Owned backend components end-to-end: architecture, development, deployment and long-term maintenance',
      'Delivered business-critical features: reward system, logistics service, payment system',
      'Designed data models and optimized database interactions for performance and consistency',
      'Integrated third-party services and ensured reliable and secure data flows across systems',
      'Worked with AWS services to support backend functionality and scalability',
    ],
    stack: ['Python', 'Django', 'DRF', 'FastAPI', 'Celery', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    company: 'Freelance',
    role: 'Localization & Data Specialist',
    start: '2018-07',
    end: '2021-10',
    location: 'Remote',
    bullets: [
      'Delivered translation and localization services for international clients',
      'Maintained high standards of data accuracy and consistency across large datasets',
      'Worked with structured data, spreadsheets, and CMS platforms',
    ],
    stack: ['Data entry', 'Localization', 'CMS'],
  },
];
