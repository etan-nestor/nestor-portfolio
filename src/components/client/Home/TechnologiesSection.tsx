'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cpu, Smartphone, Paintbrush, GitBranch, Server, Layers, Terminal, Figma } from 'lucide-react'

const technologies = [
  { 
    name: "JavaScript/TypeScript", 
    category: "Langages", 
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
    items: ["ES6+", "TypeScript", "Node.js"]
  },
  { 
    name: "React/Next.js", 
    category: "Frontend", 
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
    items: ["React Hooks", "Context API", "SSR/SSG"]
  },
  { 
    name: "Node.js/NestJS", 
    category: "Backend", 
    icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
    items: ["Express", "REST APIs", "Microservices"]
  },
  { 
    name: "Python/Django", 
    category: "Backend", 
    icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
    items: ["Flask", "Pandas", "Automation"]
  },
  { 
    name: "React Native/Ionic", 
    category: "Mobile", 
    icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />,
    items: ["Cross-platform", "Capacitor", "UI Components"]
  },
  { 
    name: "PostgreSQL/MySQL", 
    category: "Bases de données", 
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
    items: ["MongoDB", "Firebase", "Supabase"]
  },
  { 
    name: "Docker/Linux CLI", 
    category: "DevOps", 
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
    items: ["CI/CD", "Cron", "Bash Scripting"]
  },
  { 
    name: "Figma/Photoshop", 
    category: "Design", 
    icon: <Figma className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
    items: ["UI/UX", "Prototyping", "Framer"]
  },
  { 
    name: "Git/GitHub", 
    category: "Outils", 
    icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />,
    items: ["Version Control", "Collaboration", "Actions"]
  },
  { 
    name: "QT/Tkinter/Electron", 
    category: "Desktop", 
    icon: <Paintbrush className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />,
    items: ["GUI Development", "Cross-platform", "Python Bindings"]
  }
]

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-purple-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stack Technologique</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            L'ensemble des technologies que je maîtrise pour créer des solutions complètes et performantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-blue-600/30 transition-all backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                  {tech.icon}
                </div>
                <div>
                  <div className="text-blue-400 mb-1 text-xs font-medium bg-blue-900/20 px-2 py-1 sm:px-3 sm:py-1 rounded-full w-max">
                    {tech.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{tech.name}</h3>
                </div>
              </div>

              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 'auto', opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                viewport={{ once: true }}
                className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800"
              >
                <h4 className="text-xs text-gray-500 mb-1 sm:mb-2 uppercase tracking-wider">Concepts maîtrisés :</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {tech.items.map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05 + idx * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-gray-800/50 text-xs rounded-full text-gray-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 text-gray-500 text-xs sm:text-sm"
        >
          Et bien d'autres outils et technologies selon les besoins spécifiques de chaque projet.
        </motion.div>
      </div>
    </section>
  )
}