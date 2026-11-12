// Mock telemetry for the interactive GPS demo. Purely client-side, no backend required.
export type RoutePoint = { x: number; y: number; speed: number; ignition: boolean; lat: number; lng: number }

export const mockRoute: RoutePoint[] = [
  { x: 40, y: 210, speed: 0, ignition: false, lat: 18.5204, lng: 73.8567 },
  { x: 90, y: 190, speed: 24, ignition: true, lat: 18.5231, lng: 73.8601 },
  { x: 150, y: 160, speed: 41, ignition: true, lat: 18.5262, lng: 73.8642 },
  { x: 210, y: 150, speed: 58, ignition: true, lat: 18.5288, lng: 73.8690 },
  { x: 270, y: 120, speed: 63, ignition: true, lat: 18.5320, lng: 73.8735 },
  { x: 330, y: 100, speed: 72, ignition: true, lat: 18.5354, lng: 73.8779 },
  { x: 390, y: 110, speed: 55, ignition: true, lat: 18.5381, lng: 73.8811 },
  { x: 430, y: 150, speed: 30, ignition: true, lat: 18.5402, lng: 73.8850 },
  { x: 460, y: 200, speed: 12, ignition: true, lat: 18.5418, lng: 73.8882 },
  { x: 470, y: 250, speed: 0, ignition: false, lat: 18.5424, lng: 73.8890 },
]
