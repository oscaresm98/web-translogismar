'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  direction = 'up',
  className = ''
}: FadeInProps) {
  const directionVariants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 },
    none: { opacity: 0 }
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}