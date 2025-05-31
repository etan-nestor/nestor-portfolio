// components/SkillBar.tsx
import { motion } from 'framer-motion';

export default function SkillBar({
  name,
  level,
  color = 'light-blue',
}: {
  name: string;
  level: number;
  color?: string;
}) {
  const colorClasses = {
    'light-blue': 'bg-light-blue',
    'orange': 'bg-orange',
    'orange-red': 'bg-orange-red',
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]}`}
        />
      </div>
    </div>
  );
}