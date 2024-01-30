'use client';

import { CheckAuth } from 'functions';

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== 'undefined') {
    const lastFetchCacheKey = 'LAST_FETCH_CACHE_KEY';
    const fetchInterval = 300000;
    const lastFetchTime = localStorage.getItem(lastFetchCacheKey);
    const currentTime = new Date().getTime();

    if (currentTime - Number(lastFetchTime) >= fetchInterval) {
      const cookies = document.cookie.split(';');
      CheckAuth(cookies);
    }
  }

  return <>{children}</>;
}
