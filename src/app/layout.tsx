'use client';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { ThemeProvider } from '@components/ThemeSwitcher/ThemeSwitcher';
import '@styles/globals.css';
import { getLocalStorage } from 'functions';
import { Roboto } from 'next/font/google';
import { useEffect } from 'react';
import { useUserStore } from 'store/user';
import { UserProps } from 'types/IUser';

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
  useEffect(() => {
    const userDataCached = getLocalStorage({ storageKey: 'u_i' }) as Pick<
      UserProps,
      'id' | 'name'
    >;

    if (userDataCached) {
      useUserStore.setState({
        userState: {
          user: {
            id: userDataCached.id ?? '',
            name: userDataCached.name ?? '',
            notifications: []
          }
        }
      });
    }
  }, []);
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
