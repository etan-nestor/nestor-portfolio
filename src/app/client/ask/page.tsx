'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Briefcase, User, ArrowRight, Phone, ClipboardList } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'recruiter' | 'client'>('recruiter')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    projectType: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous ajouterez la logique Firebase
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-12 md:py-24 px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-900/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.2, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900/20 text-blue-400 rounded-full mb-6"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Contact Professionnel</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Discutons
            </span> de votre projet
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Que vous soyez recruteur ou client, je suis à votre écoute pour répondre à vos besoins.
          </p>
        </motion.section>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab('recruiter')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'recruiter'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Recruteur</span>
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'client'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Client</span>
            </button>
          </div>
        </motion.div>

        {/* Form Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden max-w-3xl mx-auto"
        >
          {activeTab === 'recruiter' ? (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold">Opportunité de recrutement</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">Votre nom / entreprise</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email professionnel</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Téléphone (optionnel)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    placeholder="Décrivez l'opportunité, le poste, les compétences recherchées..."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
                  >
                    <span>Envoyer ma proposition</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </form>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <ClipboardList className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">Demande de service</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">Votre nom / entreprise</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Type de projet</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="web">Développement Web</option>
                      <option value="mobile">Application Mobile</option>
                      <option value="consulting">Consulting Technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">Détails du projet</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    placeholder="Décrivez votre projet, vos besoins, vos contraintes..."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
                  >
                    <span>Envoyer ma demande</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}