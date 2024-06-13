import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devorum',
  description: 'Para quem sabe e quem quer aprender!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
