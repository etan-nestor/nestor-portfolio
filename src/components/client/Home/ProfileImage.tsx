'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, FolderKanban, PenTool, Presentation } from 'lucide-react'
import profile from '../../../../public/images/profile1.png'

export default function ProfileImage() {
  const badges = [
    {
      id: 1,
      text: "Dev Full",
      icon: <Code className="w-5 h-5" />,
      position: "-bottom-4 -right-4",
      gradient: "from-blue-600 to-purple-600",
      animation: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }
      }
    },
    {
      id: 2,
      text: "Gestion Projets",
      icon: <FolderKanban className="w-5 h-5" />,
      position: "-top-4 -left-4",
      gradient: "from-emerald-600 to-cyan-600",
      animation: {
        scale: [1, 1.04, 1],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }
      }
    },
    {
      id: 3,
      text: "Formateur",
      icon: <Presentation className="w-5 h-5" />,
      position: "top-1/4 -right-12",
      gradient: "from-orange-600 to-amber-600",
      animation: {
        scale: [1, 1.03, 1],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }
      }
    },
    {
      id: 4,
      text: "UI/UX Designer",
      icon: <PenTool className="w-5 h-5" />,
      position: "bottom-1/4 -left-22",
      gradient: "from-pink-600 to-rose-600",
      animation: {
        scale: [1, 1.02, 1],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }
      }
    }
  ]

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, type: 'spring' }}
      className="lg:w-1/2 flex justify-center"
    >
      <div className="relative">
        {/* Conteneur de l'image de profil */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-900/20 border border-blue-600/30 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="w-[95%] h-[95%] rounded-full bg-gray-800/50 flex items-center justify-center overflow-hidden border border-gray-700/50">
            <Image
              src={profile}
              alt="Photo de profil"
              width={320}
              height={320}
              className="object-cover scale-110"
              priority
            />
          </div>
        </div>

        {/* Badges animés */}
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              ...badge.animation,
              opacity: 1
            }}
            transition={{
              ...badge.animation.transition,
              delay: 1.4 + (badge.id * 0.2),
              type: 'spring'
            }}
            className={`absolute ${badge.position} bg-gradient-to-r ${badge.gradient} px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10`}
          >
            {badge.icon}
            <span className="font-medium">{badge.text}</span>
          </motion.div>
        ))}

        {/* Effet de halo animé */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            delay: 1.3,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-xl -z-10"
        />
      </div>
    </motion.div>
  )
}