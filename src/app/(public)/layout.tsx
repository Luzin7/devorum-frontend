'use client';

import { getLocalStorage } from 'functions';
import { useUserStore } from 'store/user';
import { UserProps } from 'types/IUser';

export default function PersistAuthInClientSideLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const userDataCached = getLocalStorage({ storageKey: 'u_i' }) as Pick<
    UserProps,
    'id' | 'name'
  >;

  useUserStore.setState({
    userState: {
      user: {
        id: userDataCached.id ?? '',
        name: userDataCached.name ?? '',
        notifications: []
      }
    }
  });

  return <>{children}</>;
}
