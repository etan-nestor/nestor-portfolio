'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à donner vie à votre <span className="text-blue-400">projet digital</span> ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Que vous ayez une idée précise ou juste une ébauche, je peux vous aider à la concrétiser avec une solution sur mesure.
          </p>
          <Link
            href="#contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
          >
            <span>Commencer maintenant</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}