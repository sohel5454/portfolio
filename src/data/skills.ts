export type SkillCategory = {
  id: string
  label: string
  filters: string[]
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { id: 'languages', label: 'Languages', filters: ['Backend', 'Frontend'], skills: ['C#', 'SQL', 'JavaScript', 'TypeScript', 'Python'] },
  { id: 'backend', label: 'Backend', filters: ['Backend'], skills: ['.NET', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'Background Services'] },
  { id: 'frontend', label: 'Frontend', filters: ['Frontend'], skills: ['React', 'Blazor', 'HTML', 'CSS', 'Tailwind CSS'] },
  { id: 'mobile', label: 'Mobile', filters: ['Mobile'], skills: ['.NET MAUI', 'Blazor Hybrid', 'Android', 'iOS'] },
  { id: 'databases', label: 'Databases', filters: ['Backend'], skills: ['PostgreSQL', 'SQL'] },
  { id: 'messaging', label: 'Messaging', filters: ['Backend', 'IoT'], skills: ['RabbitMQ', 'SignalR', 'WebSockets'] },
  { id: 'gpsiot', label: 'GPS / IoT', filters: ['IoT'], skills: ['GT06', 'GPS Tracking', 'GPS Packet Parsing', 'LBS', 'IoT Device Communication'] },
  { id: 'maps', label: 'Maps', filters: ['Tools'], skills: ['Google Maps', 'Leaflet', 'OpenStreetMap', 'OSRM', 'Map Matching'] },
  { id: 'auth', label: 'Authentication', filters: ['Cloud'], skills: ['Azure AD', 'MSAL', 'Microsoft Identity'] },
  { id: 'services', label: 'Services', filters: ['Cloud', 'Tools'], skills: ['Firebase', 'Cashfree', 'SMS Gateways', 'Google APIs'] },
]

export const skillFilters = ['All', 'Backend', 'Frontend', 'Mobile', 'IoT', 'Cloud', 'Tools']
