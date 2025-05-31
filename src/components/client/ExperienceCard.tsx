// components/ExperienceCard.tsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-dark-blue p-6 rounded-lg border border-gray-800 shadow-lg hover:shadow-light-blue/10 transition"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-light-blue/10 rounded-full">
          <Briefcase className="text-orange" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-light-blue">{experience.role}</h3>
          <div className="flex items-center gap-2 text-orange mt-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
          <p className="font-medium mt-2">{experience.company}</p>
          
          <ul className="mt-4 space-y-2">
            {experience.description.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}