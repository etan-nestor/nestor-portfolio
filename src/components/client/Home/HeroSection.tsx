'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Particles from './Particles'
import AnimatedText from './AnimatedText'
import ProfileImage from './ProfileImage'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-gray-950/80 to-gray-950" />
        <Particles />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="lg:w-1/2 mt-10 md:mt-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-block md:mt-12 mb-2 md:mb-1"
            >
              <span className="text-blue-400 text-sm md:text-base font-mono px-3 py-1 md:px-4 md:py-2 bg-blue-900/20 rounded-full flex items-center gap-1 w-max">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Disponible pour de nouveaux projets
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 mr-3 bg-clip-text text-transparent">
                Nestor
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                COMPAORE ,
              </span>
              <br />
              <AnimatedText text="Spécialiste en Solutions Numériques." />
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-400 mb-6 md:mb-8 max-w-lg text-base md:text-lg"
            >
              Je transforme vos idées en solutions digitales performantes avec un focus sur 
              l'innovation, l'expérience utilisateur et la qualité technique.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Link
                href="/client/projects"
                className="px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium flex items-center gap-2 group hover:shadow-lg hover:shadow-blue-500/20 transition-all text-sm md:text-base"
              >
                <span>Explorer mon travail</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/client/ask"
                className="px-5 py-2 md:px-6 md:py-3 border border-blue-600/50 rounded-lg font-medium hover:bg-blue-900/20 hover:border-blue-600/80 hover:text-white transition-all text-sm md:text-base"
              >
                Discutons de votre projet
              </Link>
            </motion.div>
          </div>

          <ProfileImage />
        </div>
      </div>
    </section>
  )
}