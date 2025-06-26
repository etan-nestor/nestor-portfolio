'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
  };

  const inputClasses = "w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-white text-sm sm:text-base"

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6 bg-gray-900/70 p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl w-full"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
        <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
          Envoyez un message
        </span>
      </h3>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-1 sm:space-y-2"
      >
        <label htmlFor="name" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
          Nom complet
        </label>
        <input
          id="name"
          {...register('name', { required: 'Ce champ est requis' })}
          className={inputClasses}
          placeholder="Votre nom complet"
          style={{ pointerEvents: 'auto' }}
        />
        {errors.name && <p className="text-amber-400 text-xs sm:text-sm mt-1">{(errors.name as any).message}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-1 sm:space-y-2"
      >
        <label htmlFor="email" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: 'Ce champ est requis',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Adresse email invalide'
            }
          })}
          className={inputClasses}
          placeholder="votre@email.com"
        />
        {errors.email && <p className="text-amber-400 text-xs sm:text-sm mt-1">{(errors.email as any).message}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-1 sm:space-y-2"
      >
        <label htmlFor="message" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
          <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Ce champ est requis' })}
          className={inputClasses}
          placeholder="Votre message..."
        />
        {errors.message && <p className="text-amber-400 text-xs sm:text-sm mt-1">{(errors.message as any).message}</p>}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </>
        )}
      </motion.button>
    </motion.form>
  );
}