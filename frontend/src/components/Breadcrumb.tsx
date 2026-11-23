import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Hierarchical breadcrumb navigation trail
 */
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-gray-200 font-medium' : ''}>{item.label}</span>
            )}
            {!isLast && <ChevronRight size={14} className="text-gray-600" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
