import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { mockRoute } from '../../data/gpsRoute'

const pathD = `M ${mockRoute.map((p) => `${p.x},${p.y}`).join(' L ')}`

export default function GpsDemo() {
  const [index, setIndex] = useState(0)
  const [running, setRunning] = useState(false)
  const [secondsAgo, setSecondsAgo] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setIndex((i) => {
          if (i >= mockRoute.length - 1) {
            setRunning(false)
            return i
          }
          return i + 1
        })
        setSecondsAgo(0)
      }, 1200)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [running])

  useEffect(() => {
    const t = setInterval(() => setSecondsAgo((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const point = mockRoute[index]
  const reset = () => {
    setRunning(false)
    setIndex(0)
    setSecondsAgo(0)
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="font-display text-sm font-semibold text-text">Live Tracking Simulation</p>
          <p className="text-xs text-muted">Mock telemetry — no backend required</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text hover:border-primary focus-ring"
          >
            {running ? <Pause size={14} /> : <Play size={14} />}
            {running ? 'Pause' : index === 0 ? 'Start Simulation' : 'Resume'}
          </button>
          <button onClick={reset} className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text hover:border-primary focus-ring">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-border bg-bg-alt dot-grid">
        <svg viewBox="0 0 500 300" className="w-full">
          <path d={pathD} fill="none" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
          <path
            d={pathD}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 - (index / (mockRoute.length - 1)) * 1000}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="7"
            fill={point.ignition ? 'var(--accent)' : 'var(--text-muted, #999)'}
            stroke="var(--surface)"
            strokeWidth="2"
            animate={{ cx: point.x, cy: point.y }}
            transition={{ duration: 1, ease: 'linear' }}
          />
        </svg>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <dt className="text-xs font-mono uppercase text-muted">Status</dt>
          <dd className={`mt-1 text-sm font-semibold ${point.speed > 0 ? 'text-accent' : 'text-muted'}`}>{point.speed > 0 ? 'Running' : 'Stopped'}</dd>
        </div>
        <div>
          <dt className="text-xs font-mono uppercase text-muted">Speed</dt>
          <dd className="mt-1 text-sm font-semibold text-text">{point.speed} km/h</dd>
        </div>
        <div>
          <dt className="text-xs font-mono uppercase text-muted">Ignition</dt>
          <dd className="mt-1 text-sm font-semibold text-text">{point.ignition ? 'ON' : 'OFF'}</dd>
        </div>
        <div>
          <dt className="text-xs font-mono uppercase text-muted">Last update</dt>
          <dd className="mt-1 text-sm font-semibold text-text">{secondsAgo}s ago</dd>
        </div>
        <div className="col-span-2 sm:col-span-4">
          <dt className="text-xs font-mono uppercase text-muted">Coordinates</dt>
          <dd className="mt-1 font-mono text-sm text-text">
            {point.lat.toFixed(4)}, {point.lng.toFixed(4)}
          </dd>
        </div>
      </dl>
    </div>
  )
}
