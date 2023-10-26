import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Devorum - Tópico`,
  description: 'Participe da comunidade!'
};

export default function TopicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
