import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Devorum',
  description: 'O que é o projeto Devorum?'
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
