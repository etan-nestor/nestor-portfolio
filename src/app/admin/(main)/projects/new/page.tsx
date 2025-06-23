'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addProject } from '@/services/projects.service'
import { Project } from '@/types/projects'

type ProjectFormData = Omit<Project, 'id' | 'created_at' | 'updated_at'>

export default function NewProjectPage() {
  const router = useRouter()
  const [project, setProject] = useState<ProjectFormData>({
    title: '',
    description: '',
    tags: [],
    image: '',
    live: '',
    client: '',
    type: '',
    category: '',
    status: 'En cours'
  })
  const [newTag, setNewTag] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      // Validation des champs requis
      if (!project.title || !project.description || !project.image || !project.live || !project.client || !project.type || !project.category) {
        throw new Error('Tous les champs marqués d\'un * sont obligatoires')
      }

      await addProject(project)
      router.push('/admin/projects')
    } catch (err) {
      console.error("Erreur lors de l'ajout du projet:", err)
      setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue')
    } finally {
      setLoading(false)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !project.tags.includes(newTag.trim())) {
      setProject({
        ...project,
        tags: [...project.tags, newTag.trim()]
      })
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setProject({
      ...project,
      tags: project.tags.filter(tag => tag !== tagToRemove)
    })
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Nouveau Projet</h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Titre */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Titre*</label>
            <input
              type="text"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.title}
              onChange={(e) => setProject({...project, title: e.target.value})}
              placeholder="Nom du projet"
            />
          </div>
          
          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description*</label>
            <textarea
              required
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.description}
              onChange={(e) => setProject({...project, description: e.target.value})}
              placeholder="Décrivez le projet en détail..."
            />
          </div>
          
          {/* Tags */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Tags</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Ajouter un tag"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <button
                type="button"
                onClick={addTag}
                className="bg-gray-700 hover:bg-gray-600 px-4 rounded-lg"
              >
                Ajouter
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                  <button 
                    type="button" 
                    onClick={() => removeTag(tag)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">URL de l'image*</label>
            <input
              type="url"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.image}
              onChange={(e) => setProject({...project, image: e.target.value})}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          {/* URL Live */}
          <div>
            <label className="block text-sm font-medium mb-1">URL Live*</label>
            <input
              type="url"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.live}
              onChange={(e) => setProject({...project, live: e.target.value})}
              placeholder="https://example.com"
            />
          </div>
          
          {/* Client */}
          <div>
            <label className="block text-sm font-medium mb-1">Client*</label>
            <input
              type="text"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.client}
              onChange={(e) => setProject({...project, client: e.target.value})}
              placeholder="Nom du client"
            />
          </div>
          
          {/* Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Type*</label>
            <input
              type="text"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.type}
              onChange={(e) => setProject({...project, type: e.target.value})}
              placeholder="frontend, backend, fullstack, etc."
            />
          </div>
          
          {/* Catégorie */}
          <div>
            <label className="block text-sm font-medium mb-1">Catégorie*</label>
            <input
              type="text"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.category}
              onChange={(e) => setProject({...project, category: e.target.value})}
              placeholder="Web, Mobile, Data, etc."
            />
          </div>
          
          {/* Statut */}
          <div>
            <label className="block text-sm font-medium mb-1">Statut*</label>
            <input
              type="text"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
              value={project.status}
              onChange={(e) => setProject({...project, status: e.target.value})}
              placeholder="En cours, Terminé, Arrêté"
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-4 pt-6">
          <button
            type="button"
            onClick={() => router.push('/admin/projects')}
            className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50"
          >
            {loading ? 'Enregistrement...' : 'Créer le projet'}
          </button>
        </div>
      </form>
    </div>
  )
}