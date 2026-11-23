import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  index?: number;
}

/**
 * Dashboard metric counter display card with smooth staggered entrance animation
 */
export default function MetricCard({ label, value, icon: Icon, color, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel p-6 rounded-xl flex items-start justify-between border-l-4"
      style={{ borderLeftColor: color.replace('text-', '') }}
    >
      <div>
        <p className="text-sm text-gray-400 font-medium">{label}</p>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
      <div className={`p-3 rounded-lg bg-[#14161f] ${color}`}>
        <Icon size={24} />
      </div>
    </motion.div>
  );
}
