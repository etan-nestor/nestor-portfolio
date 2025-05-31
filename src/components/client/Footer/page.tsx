'use client'

import { motion } from 'framer-motion'
import { ChevronUp, Github, Linkedin, Mail, Twitter, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const socialLinks = [
  { 
    icon: <Github size={20} />, 
    href: 'https://github.com',
    name: 'GitHub'
  },
  { 
    icon: <Linkedin size={20} />, 
    href: 'https://linkedin.com',
    name: 'LinkedIn'
  },
  { 
    icon: <Twitter size={20} />, 
    href: 'https://twitter.com',
    name: 'Twitter'
  },
  { 
    icon: <Mail size={20} />, 
    href: 'mailto:contact@example.com',
    name: 'Email'
  },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900/80 border-t border-gray-800 backdrop-blur-lg relative overflow-hidden"
    >
      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 5 + 1,
              height: Math.random() * 5 + 1,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * 50 - 25],
              opacity: [0, 0.3, 0],
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
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Section Entreprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium mb-2 flex items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fondateur de
              </span>
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a 
                href="https://opennumeric.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2 group"
              >
                Open Numeric
                <ArrowUpRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">
              Votre partenaire pour des solutions digitales innovantes et performantes.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright avec effet de vague */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6 md:mb-0"
          >
            <p className="text-gray-400 text-sm relative group">
              © {new Date().getFullYear()} Nestor Compaoré. Tous droits réservés.
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Développé avec Next.js, Tailwind CSS et Framer Motion
            </p>
          </motion.div>

          {/* Liens sociaux avec tooltip */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10
                }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      color: '#60a5fa',
                      rotate: [0, 10, -10, 0]
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring' }}
                    className="p-3 bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-900/20 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all"
                  >
                    {link.icon}
                  </motion.div>
                  <span className="absolute -bottom-6 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.name}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ligne de séparation animée */}
        <motion.div 
          className="w-full h-px my-8 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent"
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Bouton retour en haut sophistiqué */}
        <div className="text-center">
          <motion.a
            href="#home"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 15px rgba(96, 165, 250, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <motion.div
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <ChevronUp 
                size={24} 
                className="text-gray-400 group-hover:text-blue-400 transition-colors relative z-10" 
              />
            </motion.div>
            <span className="sr-only">Retour en haut</span>
          </motion.a>
        </div>

        {/* Signature discrète */}
        <motion.p
          className="text-center text-xs text-gray-600 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          Conçu avec <span className="text-blue-400">Firebase</span><span className="text-purple-400">Studio</span>
        </motion.p>
      </div>
    </motion.footer>
  )
}