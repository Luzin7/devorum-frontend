'use client';

import Footer from '@components/Footer';
import Header from '@components/Header';
import '@styles/globals.css';
import { getThemeBySystem } from 'functions/getUserSystemTheme';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  getThemeBySystem();
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
