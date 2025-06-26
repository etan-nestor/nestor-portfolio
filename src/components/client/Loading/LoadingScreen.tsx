'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950"
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Logo animé avec particules */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-full bg-blue-900/30 border-2 border-blue-600/50 flex items-center justify-center">
                  <motion.span 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    CN
                  </motion.span>
                </div>
                
                {/* Particules animées */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: 0,
                      y: 0,
                      opacity: 0
                    }}
                    animate={{
                      x: Math.cos(i * Math.PI / 4) * 40,
                      y: Math.sin(i * Math.PI / 4) * 40,
                      opacity: [0, 1, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Barre de chargement */}
              <motion.div 
                className="mt-8 w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2.5,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}