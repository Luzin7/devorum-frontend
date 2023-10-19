'use client';
import { PersistAuth } from 'functions';

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  PersistAuth();

  return <>{children}</>;
}
