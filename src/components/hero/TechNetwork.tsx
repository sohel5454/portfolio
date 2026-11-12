import { motion } from 'framer-motion'
import { techNetworkNodes } from '../../data/profile'

// Positions around a circle for each satellite node.
const radius = 170
const center = { x: 220, y: 220 }

function nodePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  }
}

export default function TechNetwork() {
  const nodes = techNetworkNodes.map((label, i) => ({
    label,
    ...nodePosition(i, techNetworkNodes.length),
  }))

  return (
    <svg viewBox="0 0 440 440" className="w-full max-w-md mx-auto" role="img" aria-label="Diagram showing the software engineer node connected to .NET, GPS/IoT, RabbitMQ, SignalR, PostgreSQL, Blazor, MAUI, Maps and Cloud">
      {nodes.map((n, i) => (
        <motion.line
          key={`line-${n.label}`}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="var(--border)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease: 'easeOut' }}
        />
      ))}

      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="4"
            fill="var(--accent)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
          />
          <motion.text
            x={n.x}
            y={n.y + (n.y > center.y ? 20 : -14)}
            textAnchor="middle"
            className="fill-muted font-mono"
            fontSize="11"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
          >
            {n.label}
          </motion.text>
        </g>
      ))}

      <motion.circle
        cx={center.x}
        cy={center.y}
        r="58"
        fill="var(--surface)"
        stroke="var(--primary)"
        strokeWidth="1.5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <text x={center.x} y={center.y - 4} textAnchor="middle" className="fill-text font-display font-semibold" fontSize="13">
        SOFTWARE
      </text>
      <text x={center.x} y={center.y + 14} textAnchor="middle" className="fill-text font-display font-semibold" fontSize="13">
        ENGINEER
      </text>
    </svg>
  )
}
