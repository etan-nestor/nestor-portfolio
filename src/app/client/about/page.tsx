'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Code, GitBranch, FileText, Zap, X, Users, Cpu, Paintbrush, Printer, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import AnimatedText from '@/components/client/AnimatedText'
import SocialIcons from '@/components/client/SocialIcons'

export default function AboutPage() {
  const [showFreelanceModal, setShowFreelanceModal] = useState(false)

  return (
    <main className="min-h-[calc(100vh-160px)] py-12 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl mt-14 mb-8">
        <AnimatePresence>
          {showFreelanceModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 300, damping: 25 }
                }}
                exit={{ y: 50, opacity: 0 }}
                className="relative bg-gray-800 border border-gray-700 rounded-xl max-w-md w-full p-6 shadow-xl overflow-hidden mx-2"
              >
                <button
                  onClick={() => setShowFreelanceModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-900/20 rounded-lg text-amber-400">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        OpenNumeric - Mes Services
                      </h3>
                      <p className="text-amber-400 font-medium">Freelance & Entrepreneuriat</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                    <p className="text-gray-300">
                      En tant que fondateur d'OpenNumeric, je propose une gamme complète de services
                      technologiques pour répondre à vos besoins numériques.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: <Code className="w-4 h-4" />, text: 'Développement Fullstack' },
                      { icon: <Cpu className="w-4 h-4" />, text: 'Applications Web/Mobile' },
                      { icon: <Paintbrush className="w-4 h-4" />, text: 'Design Graphique' },
                      { icon: <Printer className="w-4 h-4" />, text: 'Vente Matériel IT' },
                      { icon: <GitBranch className="w-4 h-4" />, text: 'Architecture Logicielle' },
                      { icon: <FileText className="w-4 h-4" />, text: 'Conseil Technique' },
                      { icon: <Users className="w-4 h-4" />, text: 'Formation & Mentorat' },
                      { icon: <BookOpen className="w-4 h-4" />, text: 'Support Scolaire Informatique' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-lg text-sm font-medium"
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Colonne gauche - Informations */}
          <div className="space-y-8">
            <AnimatedText
              text="Nestor COMPAORE"
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-600 bg-clip-text text-transparent"
            />

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Ingénieur des Travaux Informatiques spécialisé en développement fullstack et architecture logicielle.
                Actuellement Chargé d'étude et d'ingénierie chez Orange Burkina Faso, je combine expertise technique
                et gestion de projet pour créer des solutions innovantes. Passionné par les nouvelles technologies,
                j'apprends constamment et partage mes connaissances.
              </p>

              {/* Objectifs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-4"
              >
                <h3 className="font-semibold text-white flex items-center gap-3 text-lg">
                  <Zap className="w-6 h-6 text-orange-400" />
                  <span>Objectifs Professionnels</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Développer mon entreprise OpenNumeric pour offrir des solutions technologiques complètes",
                    "Acquérir une expertise approfondie en architecture cloud et cybersécurité",
                    "Contribuer à des projets innovants dans un environnement exigeant",
                    "Partager mes connaissances à travers le mentorat et la formation"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-orange-400 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Expérience Professionnelle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-4"
              >
                <h3 className="font-semibold text-white flex items-center gap-3 text-lg">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <span>Expérience Professionnelle</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Orange Burkina Faso - Chargé d'étude et d'ingénierie (2024-présent)",
                    "Noticom Holding - Prestataire en architecture et étude de projet (2024)",
                    "ANAM - Développeur Fullstack (Stage 2023)",
                    "OpenNumeric - Fondateur & Freelance (2022-présent)"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              {/* Formation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-4"
              >
                <h3 className="font-semibold text-white flex items-center gap-3 text-lg">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  <span>Formation Académique</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Licence Professionnelle en Informatique - IBAM",
                    "Ingénieur des Travaux Informatiques",
                    "Formation Fullstack Django - Orange Digital Center",
                    "BAC C - Lycée Bogodogo (LBO)"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-purple-400 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Activités Annexes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-4"
              >
                <h3 className="font-semibold text-white flex items-center gap-3 text-lg">
                  <Users className="w-6 h-6 text-green-400" />
                  <span>Activités Annexes</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Encadrement d'élèves en mathématiques/informatique",
                    "Dépannage informatique et maintenance hardware",
                    "Création de designs graphiques (logos, affiches)",
                    "Veille technologique et contribution open source"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-green-400 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Colonne droite - Photo et contacts */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 lg:sticky lg:top-28"
          >
            {/* Photo de profil */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-3 border-2 border-blue-400/50 rounded-xl rotate-2 transition-transform duration-300 group-hover:rotate-1 group-hover:border-blue-400"></div>
              <div className="relative bg-gradient-to-br from-blue-900/80 to-amber-900/80 rounded-xl overflow-hidden border border-gray-700 aspect-square">
                <div className="h-full w-full flex items-center justify-center">
                  <Image src='/images/pp.png' alt='photo de profile' width={300} height={300} />
                </div>
              </div>
            </motion.div>

            {/* OpenNumeric */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-4"
            >
              <h3 className="font-semibold text-white flex items-center gap-3 text-lg">
                <Cpu className="w-6 h-6 text-amber-400" />
                <span>OpenNumeric</span>
              </h3>
              <p className="text-gray-300">
                Mon entreprise spécialisée dans le développement logiciel, le design graphique,
                la vente de matériel informatique et le conseil technologique.
              </p>
              <button
                onClick={() => setShowFreelanceModal(true)}
                className="w-full sm:w-auto font-medium bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
              >
                <Zap className="w-4 h-4" />
                <span>Voir les services</span>
              </button>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-5"
            >
              <h3 className="font-semibold text-white text-lg">Contact</h3>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5 text-blue-400" />, text: 'tech00.02in@gmail.com' },
                  { icon: <Phone className="w-5 h-5 text-green-400" />, text: '+226 61 78 03 91 / +226 65 03 37 42' },
                  { icon: <MapPin className="w-5 h-5 text-red-400" />, text: 'Ouagadougou, Burkina Faso' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="pt-2">
                <SocialIcons />
              </div>
            </motion.div>

            {/* Info Perso */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 space-y-4"
            >
              <h3 className="font-semibold text-white text-lg">Informations Personnelles</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Âge</p>
                  <p className="text-white">25 ans</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date de Naissance</p>
                  <p className="text-white">23/03/2000</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Statut</p>
                  <p className="text-white">Disponible</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Expérience</p>
                  <p className="text-white">3+ ans</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </main>
  )
}