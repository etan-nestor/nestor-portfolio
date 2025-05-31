'use client'

import { motion } from 'framer-motion'

export default function AnimatedText({ text }: { text: string }) {
  return (
    <motion.span 
      className="inline-block"
      animate={{
        backgroundPosition: ['0%', '100%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
      style={{
        backgroundSize: '200% auto',
        backgroundImage: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc, #f472b6, #38bdf8)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}
    >
      {text}
    </motion.span>
  )
}