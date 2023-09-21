import Header from '@components/Header'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devorum',
  description: 'Fórum para devs!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
