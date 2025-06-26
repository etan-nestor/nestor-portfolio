'use client'

import { motion } from 'framer-motion'
import { Rocket, Award, Users, Globe } from 'lucide-react'

const stats = [
  { value: "25+", label: "Projets réalisés", icon: <Rocket className="w-6 h-6" /> },
  { value: "85%", label: "Clients satisfaits", icon: <Award className="w-6 h-6" /> },
  { value: "3+", label: "Années d'expérience", icon: <Users className="w-6 h-6" /> },
  { value: "∞", label: "Passion", icon: <Globe className="w-6 h-6" /> }
]

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="text-center p-4 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-600/50 transition-all"
            >
              <div className="flex justify-center mb-3 sm:mb-4 text-blue-400">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}