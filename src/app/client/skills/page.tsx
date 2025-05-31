'use client'

import { Code, Languages, Star, Sparkles, Cpu, Settings, BookOpen, FileText, Printer, Monitor, Rocket, Database, Paintbrush, GitBranch, Server, CpuIcon, Smartphone, Layers, Terminal, Zap, Figma, ChevronDown } from 'lucide-react';
import AnimatedText from '@/components/client/AnimatedText';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Langages et frameworks
  const programmingLanguages = [
    { 
      name: "JavaScript/TypeScript", 
      level: 90,
      frameworks: ["React", "Next.js", "Angular", "Node.js", "Express", "NestJS", "Astro"]
    },
    { 
      name: "Python", 
      level: 85,
      frameworks: ["Django", "Flask", "QT", "Tkinter", "Pandas", "NumPy"]
    },
    { 
      name: "HTML/CSS", 
      level: 80,
      frameworks: ["Tailwind CSS", "SASS", "Bootstrap"]
    }
  ];

  // Bases de données
  const databases = [
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 70 },
    { name: "SQLite", level: 80 },
    { name: "Supabase", level: 75 }
  ];

  // Mobile
  const mobileTech = [
    { name: "React Native", level: 80 },
    { name: "Ionic", level: 75 },
    { name: "Android", level: 65 }
  ];

  // Outils de développement
  const devTools = [
    { name: "Git/GitHub", level: 85 },
    { name: "Postman", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Linux CLI", level: 75 },
    { name: "Cron", level: 70 }
  ];

  // Design & UI/UX
  const designSkills = [
    { name: "Figma", level: 80 },
    { name: "Adobe Photoshop", level: 75 },
    { name: "Framer", level: 70 },
    { name: "Visme", level: 65 },
    { name: "Canva", level: 85 }
  ];

  // Compétences professionnelles
  const professionalSkills = [
    "Gestion de projet Agile",
    "Analyse des besoins clients",
    "Rédaction de cahiers des charges",
    "Architecture logicielle",
    "Méthodologie iTTM",
    "Planification IT",
    "Conduite de réunion",
    "Formation technique"
  ];

  // Compétences techniques pratiques
  const practicalSkills = [
    "Réparation d'imprimantes/photocopieuses",
    "Installation de pilotes",
    "Configuration réseau",
    "Maintenance hardware",
    "Dépannage système"
  ];

  const languages = [
    { name: "Français", level: 100, levelText: "Langue maternelle" },
    { name: "Anglais", level: 70, levelText: "Technique professionnel" },
    { name: "Espagnol", level: 40, levelText: "Notions" }
  ];

  const softSkills = [
    "Apprentissage rapide",
    "Polyvalence",
    "Autonomie",
    "Résolution de problèmes",
    "Communication efficace",
    "Esprit d'équipe",
    "Gestion du stress",
    "Créativité"
  ];

  const interests = [
    "Veille technologique",
    "Open Source",
    "Intelligence Artificielle",
    "Data Science",
    "Cybersécurité",
    "Photographie",
    "Mentorat",
    "Entrepreneuriat"
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const SkillCategory = ({ 
    title, 
    icon, 
    color, 
    children 
  }: {
    title: string;
    icon: React.ReactNode;
    color: string;
    children: React.ReactNode;
  }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl"
    >
      <div 
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => toggleCategory(title)}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 ${color}/10 rounded-lg`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: expandedCategory === title ? 180 : 0 }}
          className="text-gray-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>

      {expandedCategory === title && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20" ref={ref}>
      <div className="flex items-center gap-3 mb-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Sparkles className="w-8 h-8 text-amber-400" />
        </motion.div>
        <AnimatedText 
          text="Expertise & Compétences" 
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Langages et Frameworks */}
        <SkillCategory 
          title="Langages & Frameworks" 
          icon={<Code className="w-6 h-6 text-blue-400" />} 
          color="bg-blue-500"
        >
          <div className="space-y-5">
            {programmingLanguages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-300">{lang.name}</span>
                  <span className="text-blue-400 font-mono">{lang.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  />
                </div>
                <div className="flex flex-wrap gap-2 pl-2">
                  {lang.frameworks.map((framework, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                    >
                      {framework}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SkillCategory>

        {/* Bases de données */}
        <SkillCategory 
          title="Bases de Données" 
          icon={<Database className="w-6 h-6 text-purple-400" />} 
          color="bg-purple-500"
        >
          <div className="space-y-5">
            {databases.map((db, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-300">{db.name}</span>
                  <span className="text-purple-400 font-mono">{db.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${db.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </SkillCategory>

        {/* Développement Mobile */}
        <SkillCategory 
          title="Développement Mobile" 
          icon={<Smartphone className="w-6 h-6 text-green-400" />} 
          color="bg-green-500"
        >
          <div className="space-y-5">
            {mobileTech.map((tech, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-300">{tech.name}</span>
                  <span className="text-green-400 font-mono">{tech.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </SkillCategory>

        {/* Outils de Développement */}
        <SkillCategory 
          title="Outils de Dev" 
          icon={<Terminal className="w-6 h-6 text-amber-400" />} 
          color="bg-amber-500"
        >
          <div className="space-y-5">
            {devTools.map((tool, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-300">{tool.name}</span>
                  <span className="text-amber-400 font-mono">{tool.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </SkillCategory>

        {/* Design & UI/UX */}
        <SkillCategory 
          title="Design & UI/UX" 
          icon={<Figma className="w-6 h-6 text-red-400" />} 
          color="bg-red-500"
        >
          <div className="space-y-5">
            {designSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="text-red-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </SkillCategory>

        {/* Langues */}
        <SkillCategory 
          title="Langues" 
          icon={<Languages className="w-6 h-6 text-indigo-400" />} 
          color="bg-indigo-500"
        >
          <div className="space-y-5">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-medium text-gray-300">{lang.name}</span>
                    <span className="block text-xs text-gray-500">{lang.levelText}</span>
                  </div>
                  <span className="text-indigo-400 font-mono">{lang.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </SkillCategory>

        {/* Compétences Professionnelles */}
        <SkillCategory 
          title="Compétences Pro" 
          icon={<FileText className="w-6 h-6 text-yellow-400" />} 
          color="bg-yellow-500"
        >
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.03 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </SkillCategory>

        {/* Compétences Techniques Pratiques */}
        <SkillCategory 
          title="Compétences Techniques" 
          icon={<Printer className="w-6 h-6 text-teal-400" />} 
          color="bg-teal-500"
        >
          <div className="flex flex-wrap gap-3">
            {practicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.03 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </SkillCategory>

        {/* Soft Skills */}
        <SkillCategory 
          title="Soft Skills" 
          icon={<Star className="w-6 h-6 text-pink-400" />} 
          color="bg-pink-500"
        >
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.03 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </SkillCategory>

        {/* Centres d'Intérêt */}
        <SkillCategory 
          title="Centres d'Intérêt" 
          icon={<Rocket className="w-6 h-6 text-cyan-400" />} 
          color="bg-cyan-500"
        >
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.03 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <span className="text-gray-300">{interest}</span>
              </motion.div>
            ))}
          </div>
        </SkillCategory>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full bg-amber-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute top-2/3 right-2/3 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"></div>
      </div>
    </div>
  );
}