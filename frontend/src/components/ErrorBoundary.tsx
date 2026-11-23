'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * React Error Boundary capturing rendering exceptions gracefully
 */
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-8 text-center glass-panel rounded-xl m-6 border border-red-500/30">
            <AlertTriangle className="mx-auto text-red-400 mb-3" size={32} />
            <h2 className="text-lg font-bold text-gray-200">Something went wrong</h2>
            <p className="text-sm text-gray-400 mt-1 max-w-md mx-auto">
              {this.state.error?.message || 'An unexpected rendering error occurred.'}
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
