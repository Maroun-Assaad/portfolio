import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: number;
  color: string;
}

export default function SkillBadge({ name, level, color }: SkillBadgeProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`absolute inset-0 ${color} opacity-10 rounded-full`}
      />
      <div className="px-4 py-2 relative z-10">
        <span className="text-sm font-medium">{name}</span>
        <span className="ml-2 text-xs text-gray-400">{level}%</span>
      </div>
    </div>
  );
}