'use client'

import { Briefcase, Calendar, FileText, ClipboardCheck, Code, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import AnimatedText from '@/components/client/AnimatedText';

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
        "Conception d’architectures techniques adaptées aux besoins métiers, dans une logique de scalabilité, de sécurité et d’intégration aux infrastructures existantes.",
        "Étude de faisabilité des solutions IT en amont des projets (T-1, T0, T1), avec analyse des enjeux techniques, fonctionnels, et budgétaires.",
        "Recueil et formalisation des besoins via échanges avec les entités métier, rédaction de comptes rendus structurés et validation des hypothèses.",
        "Rédaction de documents techniques et fonctionnels : CDC, COVAL, CI, rapports d’analyse,etc.",
        "Utilisation de la méthode iTTM (Infrastructure Time To Market) pour cadrer et accélérer les projets d’infrastructure.",
        "Appui technique à la sélection des solutions (benchmark, analyse de cohérence, relecture des offres techniques)."
      ],
      technologies: ["Word", "Visio", "Draw.io", "Teams", "Outlook","Excel","PowerPoint","..."]
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
        "Développement d'une application de visualisation des sorties de modèles de prévision",
        "Interaction avec supercalculateur via commandes Linux",
        "Controle de la conformité d'equipements recu (Ordinateurs ,etc.) "
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
        "Développement d'applications web, mobiles et des logiciels sur mesure",
        "Conception UI/UX avec Figma et Adobe Suite",
        "Conception de logo , affiches , etc.",
        "Vente d'ordinateurs etde matériels informatique",
        "Dépannage et configuration de périphériques (imprimantes Canon,ordinateur,etc.)",
        "Consulting et formation technologique",
      ],
      technologies: ["React Native", "Ionic", "Django", "Figma", "UI/UX", "Canon","Nest","Next.js","..."]
    }
  ];

  const toggleExperience = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  // Positions fixes pour les particules pour éviter l'erreur d'hydratation
  const particles = [
    { left: 51.11, top: 20.45 },
    { left: 84.93, top: 82.20 },
    { left: 78.38, top: 25.42 },
    { left: 68.75, top: 67.86 },
    { left: 75.70, top: 26.47 },
    { left: 88.05, top: 28.28 },
    { left: 78.66, top: 39.13 },
    { left: 71.53, top: 57.62 },
    { left: 47.82, top: 46.44 },
    { left: 48.42, top: 74.80 },
    { left: 82.97, top: 90.74 },
    { left: 91.76, top: 23.94 },
    { left: 0.21, top: 61.72 },
    { left: 67.31, top: 70.67 },
    { left: 39.27, top: 24.80 },
    { left: 25.93, top: 39.62 },
    { left: 71.59, top: 63.39 },
    { left: 83.20, top: 82.47 },
    { left: 47.08, top: 80.03 },
    { left: 3.30, top: 17.01 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated title section */}
      <motion.div 
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl mb-4"
        >
          <Briefcase className="w-8 h-8 text-amber-400" />
        </motion.div>
        <AnimatedText 
          text="Parcours Professionnel" 
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 text-center"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '100px' } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 mt-4 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-6 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"
        />

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-6 -ml-2 w-4 h-4 rounded-full bg-amber-400 border-4 border-gray-900 z-10"></div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300`}
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
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-amber-400 font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedExperience === exp.id ? 180 : 0 }}
                      className="text-gray-400 mt-2"
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
                                <span className="text-gray-300">{item}</span>
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
                                  className="px-3 py-1 bg-gray-700/50 text-sm rounded-full text-gray-300 hover:bg-amber-500/20 hover:text-amber-400 transition-all"
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
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{
                x: 0,
                y: 0,
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
                left: `${particle.left}%`,
                top: `${particle.top}%`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}