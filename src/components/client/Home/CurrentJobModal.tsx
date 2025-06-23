'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Briefcase, Clock, LayoutDashboard, Zap, CalendarDays, NotepadText, PenTool, FileCode2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CurrentJobModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState('')

  // Dates du contrat
  const contractStartDate = new Date('2024-06-26')
  const contractEndDate = new Date('2025-07-20') // 1 an après
  const currentDate = new Date()

  // Calcul du temps restant
  useEffect(() => {
    const calculateTimeLeft = () => {
      const diff = contractEndDate.getTime() - currentDate.getTime()

      if (diff <= 0) return "Contrat terminé"

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))

      return `${months > 0 ? `${months} mois ` : ''}${days} jours`
    }

    // Afficher après 1 minute (60000 ms)
    const timer = setTimeout(() => setIsOpen(true), 30000)

    // Mettre à jour le compte à rebours
    setTimeLeft(calculateTimeLeft())
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 86400000) // Mise à jour quotidienne

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  // Formatage de la date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', damping: 25 }
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl overflow-y-auto"
            style={{ maxHeight: '90vh' }}
          >
            {/* Effet de fond animé */}
            <motion.div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Colonne gauche */}
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      <span className="text-orange-600">Poste Actuel : </span> Chargé d'étude et d'ingénierie
                    </h3>
                    <p className="text-blue-400 font-medium text-sm sm:text-base">ORANGE BURKINA FASO</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Depuis le {formatDate(contractStartDate)}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-800/50 p-4 sm:p-5 rounded-lg border border-gray-700"
                >
                  <h4 className="font-medium text-white flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-sm sm:text-base">Durée du contrat</span>
                  </h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {timeLeft}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">Temps restant</p>
                    </div>
                    <div className="h-12 w-px bg-gray-700 mx-2 sm:mx-4"></div>
                    <div>
                      <p className="text-lg sm:text-xl font-semibold">1 an</p>
                      <p className="text-xs sm:text-sm text-gray-400">Durée totale</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-800/50 p-3 sm:p-4 rounded-lg border border-gray-700"
                >
                  <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span className="text-sm sm:text-base">Alternance Freelance</span>
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Disponible pour des missions de développement et conseil en dehors des heures de travail.
                  </p>
                </motion.div>
              </div>

              {/* Colonne droite */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white flex items-center gap-2 mb-3">
                    <LayoutDashboard className="w-5 h-5 text-purple-400" />
                    <span className="text-sm sm:text-base">Missions principales</span>
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Mise en place d'architectures techniques pour solutions IT",
                      "Études de faisabilité pour projets IT",
                      "Rédaction CDC, COVAL, CI & documents techniques",
                      "Suivi de projets pour conformité aux besoins",
                      "++"
                    ].map((task, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs sm:text-sm"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-gray-300">{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800 rounded-full"
                  >
                    <CalendarDays className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium">Planification</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800 rounded-full"
                  >
                    <NotepadText className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-medium">Etude</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800 rounded-full"
                  >
                    <PenTool className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium">Architecture</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800 rounded-full"
                  >
                    <FileCode2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium">Projet</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}