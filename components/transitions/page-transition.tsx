'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 300,
    filter: 'blur(4px)'
  },
  in: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    x: -300,
    filter: 'blur(4px)'
  }
}

const pageTransition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{
          type: "tween" as const,
          ease: [0.22, 1, 0.36, 1],
          duration: 0.5
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}