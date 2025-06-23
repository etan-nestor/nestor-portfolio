'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PlusCircle, Trash2, Edit, ExternalLink } from 'lucide-react'
import { getProjects, deleteProject } from '@/services/projects.service'
import { Project } from '@/types/projects'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    try {
      const projects = await getProjects()
      setProjects(projects)
    } catch (error) {
      console.error("Erreur:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Supprimer ce projet définitivement?")) {
      try {
        await deleteProject(id)
        setProjects(projects.filter(p => p.id !== id))
      } catch (error) {
        console.error("Erreur:", error)
      }
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Projets</h1>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <PlusCircle size={18} />
          Nouveau Projet
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Chargement...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Aucun projet trouvé</p>
        </div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-3 px-4 text-left">Titre</th>
                <th className="py-3 px-4 text-left">Client</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Statut</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-4 px-4">
                    <div className="font-medium">{project.title}</div>
                    <div className="text-sm text-gray-400">{project.category}</div>
                  </td>
                  <td className="py-4 px-4">{project.client}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-600/20 text-purple-400">
                      {project.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.status === 'Terminé' ? 'bg-green-600/20 text-green-400' :
                      project.status === 'En cours' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-red-600/20 text-red-400'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener"
                          className="text-gray-400 hover:text-blue-400 p-1"
                          title="Voir en ligne"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <Link
                        href={`/admin/projects/edit/${project.id}`}
                        className="text-gray-400 hover:text-yellow-400 p-1"
                        title="Modifier"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-gray-400 hover:text-red-400 p-1"
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}