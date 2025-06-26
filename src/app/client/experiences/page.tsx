'use client'

import { Briefcase, Calendar, FileText, ClipboardCheck, Code, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import AnimatedText from '@/components/client/AnimatedText';
import Particles from '@/components/client/Home/Particles';

export default function ExperiencePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Prestataire : Chargé d'étude et d'ingénierie",
      company: "Orange Burkina Faso",
      period: "Depuis le 26/06/2024",
      icon: <FileText className="w-5 h-5" />,
      description: [
        "Conception d'architectures techniques adaptées aux besoins métiers",
        "Étude de faisabilité des solutions IT en amont des projets",
        "Recueil et formalisation des besoins via échanges avec les entités métier",
        "Rédaction de documents techniques et fonctionnels",
        "Utilisation de la méthode iTTM pour cadrer les projets",
        "Appui technique à la sélection des solutions"
      ],
      technologies: ["Word", "Visio", "Draw.io", "Teams", "Outlook", "Excel", "PowerPoint", "..."]
    },
    {
      id: 2,
      role: "Stagiaire : Assistant en Informatique",
      company: "Noticom Holding (VAS PMUB)",
      period: "22/04/2024 - 22/06/2024",
      icon: <ClipboardCheck className="w-5 h-5" />,
      description: [
        "Analyse des résultats de pronostics PMUB",
        "Optimisation des processus métiers",
        "Gestion de base de données clients",
        "Reporting et analyse des performances"
      ],
      technologies: ["Analyse de données", "Excel", "Reporting", "..."]
    },
    {
      id: 3,
      role: "Stagiaire : Assistant et Développeur Web",
      company: "ANAM (Agence Nationale de la Météorologie)",
      period: "03/07/2023 - 03/10/2023",
      icon: <Code className="w-5 h-5" />,
      description: [
        "Développement d'une application de visualisation",
        "Interaction avec supercalculateur via commandes Linux",
        "Contrôle de conformité d'équipements"
      ],
      technologies: ["React", "Express.js", "MySQL", "Linux", "Data Visualization"]
    },
    {
      id: 4,
      role: "Freelance & Entrepreneur",
      company: "OpenNumeric",
      period: "2022 - Présent",
      icon: <Cpu className="w-5 h-5" />,
      description: [
        "Développement d'applications web, mobiles et logiciels",
        "Conception UI/UX avec Figma et Adobe Suite",
        "Conception de logo et affiches",
        "Vente de matériel informatique",
        "Dépannage et configuration de périphériques",
        "Consulting et formation technologique"
      ],
      technologies: ["React Native", "Ionic", "Django", "Figma", "UI/UX", "Canon", "Nest", "Next.js", "..."]
    }
  ];

  const toggleExperience = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-gray-950/80 to-gray-950" />
        <Particles />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Animated title section - Fixed spacing for all devices */}
      <motion.div
        className="flex flex-col items-center mb-16 px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="p-4 mt-12 lg:mt-1 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl mb-6"
        >
          <Briefcase className="w-8 h-8 text-amber-400" />
        </motion.div>
        <AnimatedText
          text="Parcours Professionnel"
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 text-center px-2"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '100px' } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 mt-6 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-4 sm:left-6 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"
        />

        {/* Experience items */}
        <div className="space-y-12 pl-8 sm:pl-12 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot - Adjusted positioning */}
              <div className="absolute left-0 sm:left-2 md:left-1/2 top-6 -ml-2 w-4 h-4 rounded-full bg-amber-400 border-4 border-gray-900 z-10"></div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`md:w-[calc(50%-28px)] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300`}
              >
                <motion.div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExperience(exp.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg mt-1"
                        style={{
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.2) 100%)'
                        }}
                        whileHover={{ rotate: 5 }}
                      >
                        {exp.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white break-words">{exp.role}</h3>
                        <p className="text-amber-400 font-medium truncate">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-2 text-gray-400">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm truncate">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedExperience === exp.id ? 180 : 0 }}
                      className="text-gray-400 mt-2 flex-shrink-0"
                    >
                      {expandedExperience === exp.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {expandedExperience === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-amber-400 mb-4">Missions réalisées :</h4>
                          <ul className="space-y-3">
                            {exp.description.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm break-words">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {exp.technologies && (
                          <div>
                            <h4 className="text-sm font-semibold text-amber-400 mb-3">Technologies utilisées :</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.05 * idx }}
                                  whileHover={{ y: -2 }}
                                  className="px-3 py-1 bg-gray-700/50 text-sm rounded-full text-gray-300 hover:bg-amber-500/20 hover:text-amber-400 transition-all break-words"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating particles decoration - Only render on client side */}
      {isClient && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: [0, 0.2, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 rounded-full bg-amber-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}