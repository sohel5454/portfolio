import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function EasterEgg() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let buffer: string[] = []
    const handler = (e: KeyboardEvent) => {
      buffer = [...buffer, e.key].slice(-KONAMI.length)
      if (buffer.join(',') === KONAMI.join(',')) {
        setShow(true)
        setTimeout(() => setShow(false), 3500)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-text shadow-lg"
          role="status"
        >
          Hello, fellow developer 👋
        </motion.div>
      )}
    </AnimatePresence>
  )
}
