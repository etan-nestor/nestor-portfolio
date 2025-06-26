'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Folder, Code2, User, Mail, Download, BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: 'Accueil',
    href: '/',
    icon: <Home size={20} />
  },
  {
    name: 'Projets',
    href: '/client/projects',
    icon: <Folder size={20} />
  },
  {
    name: 'Expériences',
    href: '/client/experiences',
    icon: <BriefcaseBusiness size={20} />
  },
  {
    name: 'Compétences',
    href: '/client/skills',
    icon: <Code2 size={20} />
  },
  {
    name: 'À propos',
    href: '/client/about',
    icon: <User size={20} />
  },
  {
    name: 'Contact',
    href: '/client/contact',
    icon: <Mail size={20} />
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo animé */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-blue-700 flex items-center justify-center shadow-lg"
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
                  className="text-white font-bold text-lg sm:text-xl"
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
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
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
                    <span className="text-sm sm:text-base font-medium">{item.name}</span>
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
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium relative overflow-hidden group"
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
                <Download size={20} />
              </motion.span>
              <span>CV</span>
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
              />
            </motion.button>

            {/* Bouton mobile */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-4 text-lg rounded-lg transition-colors ${pathname === item.href ? 'bg-blue-900/30 text-blue-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="text-xl">{item.name}</span>
                    {pathname === item.href && (
                      <motion.div 
                        className="ml-auto w-3 h-3 rounded-full bg-blue-500"
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
                  className="w-full flex items-center gap-4 px-4 py-4 text-lg rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Download size={20} />
                  <span className="text-xl">Télécharger CV</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}