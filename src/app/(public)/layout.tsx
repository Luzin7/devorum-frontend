'use client';

import { getLocalStorage } from 'functions';
import React, { useEffect } from 'react';
import { useUserStore } from 'store/user';
import { UserProps } from 'types/IUser';

export default function PersistAuthInClientSideLayout({
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

  return <>{children}</>;
}
