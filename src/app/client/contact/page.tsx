
'use client'

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Zap } from 'lucide-react';
import AnimatedText from '@/components/client/AnimatedText';
import ContactForm from '@/components/client/ContactForm';
import SocialIcons from '@/components/client/SocialIcons';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      content: "tech00.02in@gmail.com",
      href: "mailto:tech00.02in@gmail.com",
      color: "hover:border-blue-400",
      bg: "bg-blue-900/20"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Téléphone",
      content: "+226 61 78 03 91",
      href: "tel:+22661780391",
      color: "hover:border-green-400",
      bg: "bg-green-900/20"
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      title: "Localisation",
      content: "Ouagadougou, Burkina Faso",
      color: "hover:border-amber-400",
      bg: "bg-amber-900/20"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Freelance",
      content: "Disponible pour missions",
      color: "hover:border-purple-400",
      bg: "bg-purple-900/20"
    }
  ];

  return (
    <div className="min-h-100 py-12 pt-22 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedText 
            text="Contactez-moi" 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Vous avez un projet ou une question ? Je suis disponible pour discuter de vos besoins en développement, design ou conseil technique.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Colonne Informations */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex items-start gap-5 p-6 bg-gray-800/50 rounded-xl border border-gray-700 ${method.color} transition-colors`}
              >
                <div className={`p-3 ${method.bg} rounded-lg`}>
                  {method.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">{method.title}</h4>
                  {method.href ? (
                    <a href={method.href} className="text-gray-300 hover:text-white transition-colors">
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{method.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-800/60 p-6 rounded-xl border border-gray-700"
            >
              <h4 className="font-semibold text-lg text-white mb-4">Réseaux sociaux</h4>
              <div className="flex justify-center">
                <SocialIcons />
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="sticky top-28"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Send className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                  Envoyez un message
                </h3>
              </div>
              <ContactForm />
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-start gap-3"
            >
              <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                Je m'engage à répondre à tous les messages dans un délai de 24 heures. Pour les demandes urgentes, privilégiez l'appel téléphonique.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}