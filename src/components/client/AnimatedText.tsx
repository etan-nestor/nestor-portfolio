'use client';
import { motion } from 'framer-motion';

export default function AnimatedText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(' ');

  return (
    <div className={`flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: wordIndex * 0.05,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}