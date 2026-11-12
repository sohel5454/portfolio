export type GpsFeature = { title: string; description: string }

export const gpsProject = {
  badge: 'Production Project',
  title: 'GPS Tracking & IoT SaaS Platform',
  description:
    'A multi-tenant GPS tracking platform designed for real-time vehicle monitoring, device communication, route visualization, fleet management and SaaS operations.',
  role: 'Software Engineer',
  duration: 'April 2025 — Present',
  github: '',
  demo: '',
}

export const gpsArchitecture = [
  { id: 'device', label: 'GPS Tracker', detail: 'Hardware devices (e.g. AW01 / R12 / G12) reporting location, ignition and alarm events over TCP.' },
  { id: 'listener', label: 'GPS Protocol Listener', detail: 'A TCP server that accepts persistent device connections.' },
  { id: 'parser', label: 'GT06 Packet Parser', detail: 'Decodes the GT06 binary protocol into structured location and status data.' },
  { id: 'queue', label: 'RabbitMQ', detail: 'Buffers and routes device events asynchronously to backend consumers.' },
  { id: 'backend', label: 'Backend Services', detail: '.NET services validate, enrich and persist telemetry, and expose REST APIs.' },
  { id: 'db', label: 'PostgreSQL', detail: 'Stores devices, tenants, users, trips and historical location data.' },
  { id: 'signalr', label: 'SignalR', detail: 'Pushes live location and status updates to connected clients.' },
  { id: 'apps', label: 'Web / Mobile Applications', detail: 'React web dashboard and .NET MAUI Blazor Hybrid mobile apps for fleet operators.' },
]

export const gpsIntegrations = ['Google Maps', 'OSRM', 'Firebase', 'Authentication', 'Payment Gateway', 'SMS Services']

export const gpsFeatures: GpsFeature[] = [
  { title: 'Real-Time Tracking', description: 'Live vehicle location updates.' },
  { title: 'GT06 Protocol', description: 'GPS tracker packet communication and parsing.' },
  { title: 'GPS Processing', description: 'Location validation, movement detection, speed, distance and ignition processing.' },
  { title: 'Map Matching', description: 'OSRM-based road snapping and route correction.' },
  { title: 'Real-Time Communication', description: 'RabbitMQ + SignalR architecture.' },
  { title: 'Multi-Tenancy', description: 'Tenant-aware users, organizations and real-time connections.' },
  { title: 'Playback', description: 'Historical route playback with smooth marker animation.' },
  { title: 'Alerts', description: 'Power events, alarms and tracker status events.' },
  { title: 'Remote Cutoff', description: 'Vehicle relay-based remote cutoff support.' },
  { title: 'Mobile Applications', description: 'Android and iOS applications using .NET MAUI Blazor Hybrid.' },
]

export const systemArchitecture = [
  { id: 'devices', label: 'GPS Devices', sub: 'AW01 / R12 / G12', detail: 'Physical trackers installed in vehicles, reporting over cellular networks.' },
  { id: 'protocol', label: 'GPS Protocol Server', sub: 'TCP / GT06 Parser', detail: 'Accepts raw TCP connections and decodes the GT06 protocol into events.' },
  { id: 'mq', label: 'RabbitMQ', sub: 'Message Broker', detail: 'Decouples ingestion from processing so bursts of device traffic don\u2019t overwhelm the backend.' },
  { id: 'api', label: '.NET Backend', sub: 'APIs / Processing', detail: 'Processes events, applies business rules and exposes REST APIs to clients.' },
  { id: 'postgres', label: 'PostgreSQL', sub: 'Primary datastore', detail: 'Relational store for tenants, devices, trips and historical telemetry.' },
  { id: 'signalr2', label: 'SignalR', sub: 'Live updates', detail: 'Streams location and status changes to connected web and mobile clients.' },
  { id: 'web', label: 'Web', sub: 'React dashboard', detail: 'Fleet operators monitor vehicles, routes and alerts in the browser.' },
  { id: 'mobile', label: 'Mobile', sub: '.NET MAUI', detail: 'Android/iOS apps built with .NET MAUI Blazor Hybrid, sharing logic with the web client.' },
]

export type OtherProject = {
  id: string
  title: string
  tech: string[]
  description: string
  features: string[]
  placeholder?: boolean
}

export const otherProjects: OtherProject[] = [
  {
    id: 'earthquake',
    title: 'AI-Based Real-Time Earthquake Impact Assessment',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Folium', 'Plotly'],
    description:
      'AI-powered platform for real-time earthquake impact assessment and geographic risk analysis, generating location-based risk scores from live data and machine learning.',
    features: ['Machine learning', 'Risk scoring', 'Interactive maps', 'Data visualization', 'Real-time API integration'],
  },
  {
    id: 'job-portal',
    title: 'Online Job Portal',
    tech: ['Java', 'Spring Boot', 'React'],
    description: 'A full-stack job portal for seamless job searching and recruitment management.',
    features: ['Job search', 'Recruitment management', 'Full-stack architecture'],
  },
]
