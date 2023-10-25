import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Devorum - Tópico`,
  description: 'O que é o projeto Devorum?'
};

export default function TopicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
