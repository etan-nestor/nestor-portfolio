'use client';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

export default function SocialIcons() {
  const socials = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'www.linkedin.com/in/nestor-compaore-5a9200247',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://github.com/etan-nestor',
      color: 'bg-gray-700 hover:bg-gray-600'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: 'https://www.facebook.com/EtanNestoria?_rdc=1&_rdr#',
      color: 'bg-sky-500 hover:bg-sky-600'
    }
  ];

  return (
    <div className="flex gap-2 sm:gap-3">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 sm:p-2.5 rounded-full text-white transition ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}