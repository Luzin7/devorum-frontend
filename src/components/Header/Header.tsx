'use client';

import Logo from '@components/Logo';
import React from 'react';
import { CREATE_TOPIC, LOGIN } from 'utils';
import { BiMessageAltAdd } from 'react-icons/bi';
import Link from 'next/link';
import { useUserStore } from 'store/user';
import { UUID } from 'crypto';
import ThemeModeToggle from '@components/ThemeModeToggle';
import DropdownMenuUserAvatar from './components/DropdownMenuUserAvatar';

export function Header() {
  const { userState } = useUserStore();
  return (
    <header className="flex bg-secondary gap-4 items-center justify-between h-[7vh] px-4">
      <Logo content="Devorum" />

      <div className="flex gap-4 items-center">
        {userState.user.id !== ('' as UUID) ? (
          <>
            <Link href={CREATE_TOPIC}>
              <BiMessageAltAdd
                className="text-2xl"
                title="Publicar novo tópico"
              />
            </Link>
            <DropdownMenuUserAvatar />
          </>
        ) : (
          <Link href={LOGIN} className="font-semibold">
            Entrar
          </Link>
        )}
        <ThemeModeToggle />
      </div>
    </header>
  );
}
