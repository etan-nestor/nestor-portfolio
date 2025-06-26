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
                className="relative max-w-2xl w-full rounded-xl border border-gray-700 shadow-xl overflow-hidden mx-2 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setShowFreelanceModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-gray-800/80 rounded-full p-1"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-6 p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-900/20 rounded-lg text-amber-400">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        OpenNumeric - Mes Services
                      </h3>
                      <p className="text-amber-400 font-medium">Freelance & Entrepreneuriat</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/50">
                    <p className="text-gray-300">
                      En tant que fondateur d'OpenNumeric, je propose une gamme complète de services
                      technologiques pour répondre à vos besoins numériques.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: <Code className="w-4 h-4" />, text: 'Développement Fullstack', color: 'from-blue-900/30 to-blue-900/10' },
                      { icon: <Cpu className="w-4 h-4" />, text: 'Applications Web/Mobile', color: 'from-purple-900/30 to-purple-900/10' },
                      { icon: <Paintbrush className="w-4 h-4" />, text: 'Design Graphique', color: 'from-pink-900/30 to-pink-900/10' },
                      { icon: <Printer className="w-4 h-4" />, text: 'Vente Matériel IT', color: 'from-red-900/30 to-red-900/10' },
                      { icon: <GitBranch className="w-4 h-4" />, text: 'Architecture Logicielle', color: 'from-indigo-900/30 to-indigo-900/10' },
                      { icon: <FileText className="w-4 h-4" />, text: 'Conseil Technique', color: 'from-cyan-900/30 to-cyan-900/10' },
                      { icon: <Users className="w-4 h-4" />, text: 'Formation & Mentorat', color: 'from-emerald-900/30 to-emerald-900/10' },
                      { icon: <BookOpen className="w-4 h-4" />, text: 'Support Scolaire Informatique', color: 'from-amber-900/30 to-amber-900/10' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-br ${item.color} border border-gray-600/30 backdrop-blur-sm`}
                      >
                        <div className="text-white/90">
                          {item.icon}
                        </div>
                        <span className="text-white/90">{item.text}</span>
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
                Spécialiste en solutions numériques, je suis Ingénieur des Travaux Informatiques, expert en développement fullstack et en architecture logicielle. Actuellement Chargé d’étude et d’ingénierie chez Orange Burkina Faso, j’allie maîtrise technique et vision projet pour concevoir et déployer des solutions digitales innovantes. Curieux et passionné par les technologies émergentes, je cultive une démarche d’apprentissage continu et de partage de savoir.
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
                    "Acquérir une expertise pointue en architecture cloud, cybersécurité et gestion de projet pour piloter des systèmes robustes et sécurisés.",
                    "Contribuer activement à des projets innovants dans des environnements exigeants et à forte valeur ajoutée.",
                    "Transmettre mon savoir et mon expérience via le mentorat et la formation, pour faire grandir les talents de demain."
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
                    "Orange Burkina Faso - Prestataire : Chargé d'étude et d'ingénierie (Juillet 2024 - présent)",
                    "Noticom Holding - Stagiaire : Assistant en informatique [Exploitation] (Mai 2024 - Juin 2024)",
                    "ANAM - Stagiaire : Assistant & Developpeur web (Juillet 2023 - Octobre 2023)",
                    "Freelance - Fondateur OpenNumeric & Freelancer (Depuis 2022)"
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
                    "Licence Professionnelle en Informatique : Ingénieur des Travaux Informatiques - IBAM (Institut Burkinabè des Arts et Métiers)",
                    "Formation en Cybersecurité et Sécurité Informatique - IBAM (Institut Burkinabè des Arts et Métiers)",
                    "Formation Fullstack Django - ODC (Orange Digital Center)",
                    "Formation Fullstack React Native - ODC (Orange Digital Center)",
                    "Formation Outils Microsofts (Teams,Forms ,Outlook ,..) - Orange Burkina Faso",
                    "Formations en ligne (Docker , Kubernetes, etc.)",
                    "BAC Serie D - Lycée Bogodogo de Ouagadougou (LBO)"
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
                    "Encadrement d'élèves en PC/mathématiques/informatique",
                    "Dépannage informatique et maintenance hardware [Reparation , Configuration Photocopieuses & Imprimantes, Installation pilotes]",
                    "Création de designs graphiques (logos, affiches,etc)",
                    "Veille technologique - contribution open source et Formation Continue"
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
                  <Image src='/images/pr.png' alt='photo de profile' width={1000} height={300} />
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