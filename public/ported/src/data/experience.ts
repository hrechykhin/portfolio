export interface Experience {
  company: string;
  role: string;
  start: string;    // 'YYYY-MM'
  end: string | 'Present';
  location: string;
  summary: string;
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: 'Erste Digital',
    role: 'Python Software Engineer',
    start: '2024-09',
    end: 'Present',
    location: 'Bratislava, SK',
    summary:
      'Contributing to data-driven backend services and GCP integrations in a regulated European banking environment. Focus on reliability, auditability, and data quality across internal platforms.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'GCP', 'Pub/Sub', 'BigQuery'],
  },
  {
    company: 'Raccoon Gang',
    role: 'Python Software Engineer',
    start: '2021-04',
    end: '2024-08',
    location: 'Remote',
    summary:
      'Owned backend components end-to-end — reward systems, logistics services, payment integrations. Partnered with AWS infrastructure for scalability and deployment. Wrote the APIs teams actually wanted to integrate against.',
    stack: ['Python', 'Django', 'DRF', 'Celery', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    company: 'Prior roles',
    role: 'Backend Developer',
    start: '2020-01',
    end: '2021-03',
    location: 'Ukraine',
    summary:
      'Early-career backend work across smaller product and consulting teams. Shipped Django REST services, payment flows, and admin tooling — the reps that taught me to care about data modeling and migrations.',
    stack: ['Python', 'Django', 'Flask', 'PostgreSQL', 'MSSQL'],
  },
];
