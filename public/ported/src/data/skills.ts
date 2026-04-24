export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'Spring Boot', 'Celery', 'Pandas'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'jQuery', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MSSQL'],
  },
  {
    category: 'Infrastructure & Tools',
    items: ['Docker', 'Git', 'CI/CD', 'Linux', 'Kafka', 'AWS', 'GCP'],
  },
  {
    category: 'Testing',
    items: ['Pytest', 'Unittest'],
  },
  {
    category: 'Concepts',
    items: ['REST API Design', 'Backend Architecture', 'Data Validation', 'Distributed Systems', 'System Reliability'],
  },
];
