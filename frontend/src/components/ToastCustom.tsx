import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface ToastCustomProps {
  type: 'success' | 'error';
  title: string;
  message?: string;
}

/**
 * Standard styled alert toast container
 */
export default function ToastCustom({ type, title, message }: ToastCustomProps) {
  const isSuccess = type === 'success';

  return (
    <div className="flex items-start gap-3 bg-[#1e212b] border border-[#2d3748] p-4 rounded-xl shadow-xl max-w-sm">
      {isSuccess ? (
        <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} />
      ) : (
        <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
      )}
      <div>
        <h5 className="text-sm font-medium text-gray-200">{title}</h5>
        {message && <p className="text-xs text-gray-400 mt-1">{message}</p>}
      </div>
    </div>
  );
}
