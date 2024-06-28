'use client';

import Logo from '@components/Logo';
import ThemeModeToggle from '@components/ThemeModeToggle';
import { Button } from '@components/ui/button';
import { LOGIN } from 'constants/localRoutePaths';
import { UUID } from 'crypto';
import Link from 'next/link';
import { useUserStore } from 'store/user';
import DropdownMenuUserAvatar from './components/DropdownMenuUserAvatar';

export function Header() {
  const { userState } = useUserStore();
  return (
    <header className="flex  gap-4 items-center justify-between h-[7vh] px-4">
      <Logo content="Devorum" />

      <div className="flex gap-4 items-center">
        {userState.user.id !== ('' as UUID) ? (
          <>
            <DropdownMenuUserAvatar />
          </>
        ) : (
          <Link href={LOGIN}>
            <Button className="text-base font-semibold text-white">
              Entrar
            </Button>
          </Link>
        )}
        <ThemeModeToggle />
      </div>
    </header>
  );
}
