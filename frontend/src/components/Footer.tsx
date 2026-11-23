import React from 'react';

/**
 * Standard footer with version and system operational indicators
 */
export default function Footer() {
  return (
    <footer className="py-6 px-8 border-t border-[#2d3748] text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
      <p>© {new Date().getFullYear()} Sentinel AI Incident Responder. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <span>v0.1.0-alpha</span>
        <span>LangGraph Orchestrator</span>
        <span>Google Gemini API</span>
      </div>
    </footer>
  );
}
