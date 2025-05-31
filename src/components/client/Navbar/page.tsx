'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Folder, Code2, User, Mail, Download } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: 'Accueil',
    href: '/',
    icon: <Home size={18} />
  },
  {
    name: 'Projets',
    href: '/client/projects',
    icon: <Folder size={18} />
  },
  {
    name: 'Expériences',
    href: '/client/experiences',
    icon: <Code2 size={18} />
  },
  {
    name: 'Compétences',
    href: '/client/skills',
    icon: <Code2 size={18} />
  },
  {
    name: 'À propos',
    href: '/client/about',
    icon: <User size={18} />
  },
  {
    name: 'Contact',
    href: '/client/contact',
    icon: <Mail size={18} />
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()


  const downloadCV = () => {
    const cvUrl = './docs/Nestor-COMPAORE.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV_Nestor_COMPAORE.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800' : 'bg-gray-900/90 backdrop-blur-md'}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo animé */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-blue-700 flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 5, -5, 0],
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0.3)',
                    '0 0 10px 5px rgba(59, 130, 246, 0.3)',
                    '0 0 0 0 rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <motion.span
                  className="text-white font-bold text-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  NC
                </motion.span>
              </motion.div>
              <motion.span 
                className="ml-2 text-white font-medium hidden md:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Portfolio
              </motion.span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 group"
                >
                  <motion.div
                    className={`flex items-center gap-2 transition-colors ${pathname === item.href ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </motion.div>
                  
                  {pathname === item.href && (
                    <>
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                      <motion.div 
                        className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-blue-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </>
                  )}
                </Link>
              ))}
            </nav>

            {/* Bouton Télécharger CV */}
            <motion.button
              onClick={downloadCV}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity
                  }
                }}
              >
                <Download size={18} />
              </motion.span>
              <span>CV</span>
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
              />
            </motion.button>

            {/* Bouton mobile */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
                transition: { type: 'spring', damping: 25 }
              }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === item.href ? 'bg-blue-900/30 text-blue-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {pathname === item.href && (
                      <motion.div 
                        className="ml-auto w-2 h-2 rounded-full bg-blue-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      />
                    )}
                  </Link>
                ))}

                <motion.button
                  onClick={downloadCV}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Download size={18} />
                  <span>Télécharger CV</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}