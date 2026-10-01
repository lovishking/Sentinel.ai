import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sentinel AI | Autonomous Incident Resolution',
  description: 'AI-powered production incident resolution platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex h-screen overflow-hidden bg-background text-foreground`}>
        <Providers>
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-[#0a0a0f]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
