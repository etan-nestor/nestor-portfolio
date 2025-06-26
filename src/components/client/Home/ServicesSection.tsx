'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Cpu, Palette, Printer, Monitor, PenTool, FolderKanban, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "Développement Web & Mobile",
    description: "Création de sites modernes, performants & d'applications web/mobile complexes avec les dernières technologies."
  },
  {
    icon: <FolderKanban className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "Gestion de Projets IT",
    description: "Planification, architecture et réalisation de projets informatiques clés en main."
  },
  {
    icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "UI/UX Design",
    description: "Designs intuitifs et esthétiques pour une expérience utilisateur optimale et engageante."
  },
  {
    icon: <Printer className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "Solutions d'Impression",
    description: "Installation, configuration et dépannage avancé de tous types d'imprimantes."
  },
  {
    icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "Formation IT",
    description: "Formations personnalisées sur divers outils et technologies informatiques."
  },
  {
    icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "Graphic Design",
    description: "Créations visuelles percutantes pour renforcer votre identité de marque."
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-900/20 text-blue-400 rounded-full mb-3 sm:mb-4 text-sm sm:text-base">
            Ce que je fais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Mes <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertises</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Une gamme complète de services pour couvrir tous vos besoins digitaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 sm:p-6 md:p-8 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-800/50 rounded-lg w-max group-hover:bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
              <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300 transition-colors text-sm sm:text-base">
                En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}