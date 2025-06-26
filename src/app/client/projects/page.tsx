'use client'

import { Pagination } from '@/components/client/Paginations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github, MoveRight, Eye, Smartphone, Globe, Figma, ScreenShare, Badge } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getProjects } from '@/services/projects.service'

const PROJECTS_PER_PAGE = 6

const categories = [
  { name: "Tous", icon: <Eye size={14} className="sm:w-4 sm:h-4" /> },
  { name: "Web", icon: <Globe size={14} className="sm:w-4 sm:h-4" /> },
  { name: "Mobile", icon: <Smartphone size={14} className="sm:w-4 sm:h-4" /> },
  { name: "Desktop", icon: <ScreenShare size={14} className="sm:w-4 sm:h-4" /> },
  { name: "Design", icon: <Figma size={14} className="sm:w-4 sm:h-4" /> },
  { name: "Autres", icon: <Badge size={14} className="sm:w-4 sm:h-4" /> }
]

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'terminé':
      return 'bg-green-600/20 text-green-400'
    case 'en cours':
      return 'bg-blue-600/20 text-blue-400'
    case 'arrêté':
      return 'bg-red-600/20 text-red-400'
    default:
      return 'bg-gray-600/20 text-gray-400'
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [currentPage, setCurrentPage] = useState(1)
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      const projectsData = await getProjects(activeCategory === "Tous" ? undefined : activeCategory)
      setProjects(projectsData)
      setLoading(false)
    }

    fetchProjects()
  }, [activeCategory])

  const filteredProjects = projects
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
    <div className="min-h-screen bg-gray-950 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.span
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-900/20 text-blue-400 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm md:text-base"
            whileHover={{ scale: 1.02 }}
          >
            Mes réalisations professionnelles
          </motion.span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projets
            </span> clés
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
            Une sélection de mes travaux les plus significatifs réalisés pour des entreprises et clients.
          </p>
        </motion.div>
      </section>

      {/* Filtres */}
      <section className="max-w-6xl mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <motion.div
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 px-4"
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
              className={`flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xxs xs:text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Grille de projets */}
      <section className="max-w-6xl mx-auto mb-8 sm:mb-12">
        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-sm sm:text-base">Chargement des projets...</p>
          </div>
        ) : paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6">
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.1, 0.6), duration: 0.5 }}
                  viewport={{ once: true, margin: "-30px" }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden group flex flex-col h-full"
                  whileHover={{ y: -3 }}
                >
                  {/* Image container */}
                  <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 w-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag: string) => (
                          <motion.span
                            key={tag}
                            className="px-1.5 py-0.5 xs:px-2 xs:py-1 bg-gray-800/80 text-xxs xs:text-xs rounded-full text-blue-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-1.5 py-0.5 xs:px-2 xs:py-1 bg-gray-800/80 text-xxs xs:text-xs rounded-full text-gray-300 backdrop-blur-sm">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2">{project.title}</h3>
                        <p className="text-xxs xs:text-xs text-gray-500 mt-0.5">Pour {project.client}</p>
                      </div>
                      <div className="flex gap-1 sm:gap-2 ml-2 sm:ml-3">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Voir en ligne"
                          >
                            <ExternalLink size={14} className="sm:w-[18px] sm:h-[18px]" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    
                    {/* Statut et type */}
                    <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {project.status && (
                        <span className={`px-2 py-0.5 sm:px-3 sm:py-1 text-xxs xs:text-xs rounded-full ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      )}
                      {project.type && (
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-xxs xs:text-xs rounded-full bg-purple-600/20 text-purple-400">
                          {project.type}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">{project.description}</p>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="mt-auto"
                    >
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 sm:mt-10 md:mt-12">
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
            className="text-center py-8 sm:py-12"
          >
            <p className="text-gray-500 text-sm sm:text-base">Aucun projet trouvé dans cette catégorie</p>
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm border border-gray-800"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
            Intéressé par <span className="text-blue-400">mes services</span> ?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8">
            Que ce soit pour du développement web/mobile, du conseil technique ou des services IT, je peux vous aider à concrétiser votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <Link
              href="/client/ask"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-xs sm:text-sm md:text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all group flex-1"
            >
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/client/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-gray-800 border border-gray-700 rounded-lg font-medium text-xs sm:text-sm md:text-base hover:bg-gray-700 transition-all flex-1"
            >
              <span>Me contacter</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}