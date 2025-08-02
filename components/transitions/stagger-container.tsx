'use client'
import { motion, easeInOut } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    }
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}