export interface Project {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  contribution: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'Completed' | 'In Progress' | 'MVP';
}

export const projects: Project[] = [
  {
    id: 'job-application-assistant',
    title: 'Job Application Assistant',
    summary:
      'A full-stack web application for managing your job search. Track applications, tailor your CV with AI, and generate cover letters — built for the European job market.',
    stack: [
      'FastAPI',
      'SQLAlchemy 2',
      'Alembic',
      'Pydantic v2',
      'PostgreSQL',
      'React',
      'TypeScript',
      'OpenAI API',
      'Docker',
      'Railway',
    ],
    contribution:
      'Designed and built the full stack: REST API with FastAPI, relational data models with SQLAlchemy 2, Alembic migrations, and JWT authentication. Implemented OpenAI integration for CV tailoring, cover letter generation, and job match scoring with per-user quota controls. Built the React frontend and set up Docker Compose for local development, deployed to Railway.',
    highlights: [
      'Kanban pipeline (SAVED, APPLIED, INTERVIEW, OFFER / REJECTED) with drag-and-drop',
      'AI job match: scores your CV against a job description and returns matched skills and gaps',
      'CV tailoring and cover letter generation via OpenAI API',
      'Job URL import: AI extracts title, company, location, and description from a posting',
      'JWT authentication with rate-limited login, refresh tokens, and per-user AI spend controls',
      'Full Docker Compose setup; deployed to Railway with PostgreSQL managed database',
    ],
    githubUrl: 'https://github.com/hrechykhin/job-application-assistant',
    liveUrl: 'https://accurate-grace-production-abf0.up.railway.app',
    status: 'Completed',
  },
  {
    id: 'spots-ba',
    title: 'Spots BA',
    summary:
      'A full-stack web application for discovering cafes in Bratislava, Slovakia. Browse by rating, district, and vibe. Table booking integration is coming in a future release.',
    stack: [
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
      'Railway',
      'Google Places API',
      'nginx',
    ],
    contribution:
      'Designed and built the full stack: REST API with Django and DRF, PostgreSQL data model, and a Google Places API sync that bulk-imports cafes with ratings, hours, coordinates, and photos. Built the React frontend with a cafe grid, detail page, and interactive map. Set up a three-service Docker Compose setup and deployed to Railway.',
    highlights: [
      'REST API with filtering by district, rating, tags, and free-text search',
      'Google Places API integration: bulk sync of cafes with ratings, hours, photos, and coordinates',
      'Three pages: cafe grid, full detail page with embedded map, and full-screen interactive map',
      'Django Admin for full CRUD content management without a custom UI',
      'Three-service Docker Compose setup with nginx proxying; deployed to Railway',
    ],
    githubUrl: 'https://github.com/hrechykhin/spots-ba',
    liveUrl: 'https://talented-emotion-production.up.railway.app/',
    status: 'In Progress',
  },
];
