import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  label: string;
  description: string;
  status: 'done' | 'running' | 'waiting';
  icon: LucideIcon;
}

/**
 * Renders an individual event milestone in the incident workflow timeline
 */
export default function TimelineItem({ label, description, status, icon: Icon }: TimelineItemProps) {
  const statusStyles = {
    done: 'bg-green-500/20 text-green-400 border-green-500/50',
    running: 'bg-blue-500/20 text-blue-400 border-blue-500/50 animate-pulse',
    waiting: 'bg-[#1a1d27] text-gray-500 border-[#2d3748]',
  }[status];

  return (
    <div className="flex gap-4 items-start">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border ${statusStyles}`}>
        <Icon size={18} />
      </div>
      <div>
        <h4 className={`font-medium ${status === 'waiting' ? 'text-gray-500' : 'text-gray-200'}`}>
          {label}
        </h4>
        <p className="text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
}
