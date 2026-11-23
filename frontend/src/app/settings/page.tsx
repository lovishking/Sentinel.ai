'use client';

import React from 'react';
import { Sliders, Key, Webhook, Shield } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Platform Settings</h1>
        <p className="text-gray-400 mt-1">Configure LLM parameters, webhook targets, and security preferences.</p>
      </div>

      <div className="glass-panel p-6 rounded-xl space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Key className="text-indigo-400" size={20} /> AI Model Configuration
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Google Gemini Model</label>
            <input
              type="text"
              readOnly
              value="gemini-1.5-pro"
              className="mt-1 w-full bg-[#14161f] border border-[#2d3748] rounded-lg px-4 py-2 text-sm text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Max Analysis Tokens</label>
            <input
              type="number"
              defaultValue={4096}
              className="mt-1 w-full bg-[#14161f] border border-[#2d3748] rounded-lg px-4 py-2 text-sm text-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
