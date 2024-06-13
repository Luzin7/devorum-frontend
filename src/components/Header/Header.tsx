'use client';

import Logo from '@components/Logo';
import ThemeModeToggle from '@components/ThemeModeToggle';
import { CREATE_TOPIC, LOGIN } from 'constants/localRoutePaths';
import { UUID } from 'crypto';
import Link from 'next/link';
import { BiMessageAltAdd } from 'react-icons/bi';
import { useUserStore } from 'store/user';
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
