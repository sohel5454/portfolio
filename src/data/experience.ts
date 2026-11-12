export const experience = {
  company: 'OptByte Software Solutions',
  role: 'Software Engineer',
  duration: 'April 2025 — Present',
  location: 'Pune, Maharashtra, India',
}

export const journey = [
  {
    title: 'Software Engineer',
    org: 'OptByte Software Solutions',
    period: 'April 2025 — Present · 1.5+ years',
    points: [
      'Backend development on a multi-tenant .NET platform',
      'GPS/IoT device communication and packet parsing',
      'Real-time communication with RabbitMQ and SignalR',
      'Web and mobile application development',
      'Third-party integrations and production troubleshooting',
    ],
  },
]

export type ResponsibilityGroup = {
  id: string
  title: string
  items: string[]
}

export const responsibilityGroups: ResponsibilityGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    items: ['C#', '.NET 8/9', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'PostgreSQL', 'Background services'],
  },
  {
    id: 'realtime',
    title: 'Real-Time',
    items: ['RabbitMQ', 'SignalR', 'WebSockets', 'Event-driven communication'],
  },
  {
    id: 'gps',
    title: 'GPS / IoT',
    items: ['GT06 protocol', 'GPS packet parsing', 'Tracker communication', 'Heartbeat processing', 'Location processing', 'LBS', 'Alarm events', 'Ignition detection', 'Remote cutoff'],
  },
  {
    id: 'maps',
    title: 'Maps',
    items: ['Google Maps', 'Leaflet', 'OpenStreetMap', 'OSRM', 'Map matching', 'Route snapping'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    items: ['.NET MAUI', 'Blazor Hybrid', 'Android', 'iOS', 'Firebase notifications'],
  },
  {
    id: 'auth',
    title: 'Authentication',
    items: ['Microsoft Identity', 'Azure AD', 'MSAL', 'Authorization', 'Multi-tenant access control'],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    items: ['Firebase', 'SMS services', 'IoT/M2M services', 'Cashfree', 'Google APIs'],
  },
]

export const challenges = [
  {
    id: 'gps-noise',
    title: 'GPS Noise',
    problem: 'GPS coordinates can fluctuate while a vehicle is moving or stopped.',
    solution: 'Implemented filtering and movement logic using distance/speed thresholds and Kalman filtering.',
  },
  {
    id: 'road-snapping',
    title: 'Road Snapping',
    problem: 'Raw GPS coordinates do not always align with roads.',
    solution: 'Integrated OSRM-based map matching and route snapping.',
  },
  {
    id: 'realtime-messaging',
    title: 'Real-Time Messaging',
    problem: 'Large numbers of device events need reliable processing.',
    solution: 'Used RabbitMQ-based asynchronous messaging between GPS listeners and backend services.',
  },
  {
    id: 'duplicate-events',
    title: 'Duplicate Real-Time Events',
    problem: 'Users could receive duplicate SignalR events.',
    solution: 'Implemented tenant-aware connection handling and improved event routing.',
  },
  {
    id: 'multi-tenant',
    title: 'Multi-Tenant Isolation',
    problem: 'Users belonging to different organizations must not receive each other\u2019s real-time events.',
    solution: 'Introduced tenant-aware connection context and event routing.',
  },
  {
    id: 'code-reuse',
    title: 'Mobile/Web Code Reuse',
    problem: 'Maintaining duplicate code across mobile components increases maintenance cost.',
    solution: 'Created a shared mobile common project for reusable components and logic.',
  },
]

export const approach = [
  { step: '01', title: 'Understand', description: 'Understand requirements, users and business workflows.' },
  { step: '02', title: 'Design', description: 'Design architecture, APIs, data models and UI.' },
  { step: '03', title: 'Build', description: 'Implement scalable and maintainable features.' },
  { step: '04', title: 'Improve', description: 'Debug, optimize, test and continuously improve the product.' },
]
