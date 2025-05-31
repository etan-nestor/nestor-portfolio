'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Particles() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 10 + 2
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: size,
              height: size,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        )
      })}
    </>
  )
}