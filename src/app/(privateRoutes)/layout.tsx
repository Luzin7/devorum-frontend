'use client';
import { checkAuth } from 'functions';
import { useEffect } from 'react';
import { refreshSession } from 'services/http/requests/api';
import { useUserStore } from 'store/user';

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookies = document.cookie.split(';');
  checkAuth(cookies);

  const { actions } = useUserStore();

  useEffect(() => {
    refreshSession().then((data) =>
      actions.updateUser({
        name: data?.name,
        notifications: data?.notifications,
        id: data?.id
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
