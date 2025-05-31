'use client'

import { Pagination } from '@/components/client/Paginations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github, MoveRight, Eye, CodeIcon, Database, Smartphone, Globe, Figma } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const PROJECTS_PER_PAGE = 6

const projects = [
  {
    id: 3,
    title: "OpenNumeric - Site Corporatif",
    description: "Site vitrine et plateforme de services pour mon entreprise OpenNumeric.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
    image: "/images/opennumeric_preview.png",
    github: "#",
    live: "#",
    category: "Web",
    client: "OpenNumeric"
  },
  {
    id: 1,
    title: "Visualisation des Sorties de Modèles Météo",
    description: "Application web pour visualiser les données de prévisions météorologiques générées par des supercalculateurs.",
    tags: ["React", "Express.js", "MySQL", "Data Visualization", "Linux CLI"],
    image: "/images/Eduflow.png",
    github: "#",
    live: "#",
    category: "Web",
    client: "ANAM (Agence Nationale de la Météorologie)"
  },
  {
    id: 2,
    title: "Analyse des Résultats PMUB",
    description: "Plateforme d'analyse des résultats de pronostics pour les clients de Noticom Holding.",
    tags: ["Python", "Data Analysis", "SQL", "Reporting"],
    image: "/images/ResumePro.png",
    github: "#",
    live: "#",
    category: "Data",
    client: "Noticom Holding"
  },
  {
    id: 4,
    title: "Application Mobile de Gestion",
    description: "Solution mobile pour la gestion des interventions techniques sur le terrain.",
    tags: ["React Native", "Firebase", "Ionic", "UI/UX"],
    image: "/images/opennumeric_preview.png",
    github: "#",
    live: "#",
    category: "Mobile",
    client: "Freelance"
  },
  {
    id: 5,
    title: "Dashboard Micro-crédit JUMO",
    description: "Tableau de bord analytique pour le projet Micro-crédit chez Orange Burkina.",
    tags: ["Node.js", "React", "MongoDB", "Data Visualization"],
    image: "/images/opennumeric_preview.png",
    github: "#",
    live: "#",
    category: "Web",
    client: "Orange Burkina"
  },
  {
    id: 6,
    title: "Coffre Fort Numérique",
    description: "Solution sécurisée de stockage de documents sensibles avec cryptage.",
    tags: ["Django", "PostgreSQL", "AWS S3", "Cryptographie"],
    image: "/images/opennumeric_preview.png",
    github: "#",
    live: "#",
    category: "Fullstack",
    client: "Orange Burkina"
  },
  {
    id: 7,
    title: "Plateforme E-learning",
    description: "Système de gestion de cours en ligne avec suivi des progrès.",
    tags: ["Laravel", "Vue.js", "MySQL", "SCORM"],
    image: "/images/opennumeric_preview.png",
    github: "#",
    live: "#",
    category: "Web",
    client: "Freelance"
  },
  {
    id: 8,
    title: "API de Paiement",
    description: "Solution d'intégration de paiement pour applications mobiles.",
    tags: ["Node.js", "GraphQL", "MongoDB", "Stripe API"],
    image: "/images/opennumeric_preview.png",
    github: "#",
    live: "#",
    category: "Fullstack",
    client: "Startup X"
  }
]

const categories = [
  { name: "Tous", icon: <Eye size={16} /> },
  { name: "Web", icon: <Globe size={16} /> },
  { name: "Mobile", icon: <Smartphone size={16} /> },
  { name: "Fullstack", icon: <CodeIcon size={16} /> },
  { name: "Design", icon: <Figma size={16} /> },
  { name: "Data", icon: <Database size={16} /> }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-950 py-12 md:py-20 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-900/20 text-blue-400 rounded-full mb-4 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Mes réalisations professionnelles
          </motion.span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projets
            </span> clés
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Une sélection de mes travaux les plus significatifs réalisés pour des entreprises et clients.
          </p>
        </motion.div>
      </section>

      {/* Filtres */}
      <section className="max-w-6xl mx-auto mb-8 md:mb-16">
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name)
                setCurrentPage(1)
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategory === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Grille de projets */}
      <section className="max-w-6xl mx-auto mb-12">
        {paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.1, 0.6), duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden group flex flex-col h-full"
                  whileHover={{ y: -5 }}
                >
                  {/* Image container */}
                  <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                      />
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 bg-gray-800/80 text-xs rounded-full text-blue-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/80 text-xs rounded-full text-gray-300 backdrop-blur-sm">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2">{project.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">Pour {project.client}</p>
                      </div>
                      <div className="flex gap-2 ml-3">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title="Code source"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title="Voir en ligne"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3 flex-grow">{project.description}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="mt-auto"
                    >
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                      >
                        Voir les détails <MoveRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">Aucun projet trouvé dans cette catégorie</p>
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-16 md:mt-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-gray-800"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Intéressé par <span className="text-blue-400">mes services</span> ?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Que ce soit pour du développement web/mobile, du conseil technique ou des services IT, je peux vous aider à concrétiser votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-base sm:text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all group flex-1"
            >
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about#freelance"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-700 transition-all flex-1"
            >
              <span>Voir mes services</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}