'use client';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { ThemeProvider } from '@components/ThemeSwitcher/ThemeSwitcher';
import '@styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});

export default function GlobalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
