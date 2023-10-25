'use client';

import Logo from '@components/Logo';
import React, { useState } from 'react';
import { CREATE_TOPIC, LOGIN, USER_PROFILE } from 'utils';
import { BiMessageAltAdd, BiSolidUserRectangle } from 'react-icons/bi';
import { Dropdown } from '@components/Dropdown';
import Link from 'next/link';
import { useUserStore } from 'store/user';
import { logout, slugUrlMaker } from 'functions';
import { UUID } from 'crypto';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { userState } = useUserStore();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="flex bg-secondary gap-4 items-center justify-between h-[7vh] px-4 text-whiteText">
      {isDropdownOpen && (
        <Dropdown.Root className="absolute z-50 flex flex-col right-2 top-[6vh] bg-secondary rounded-xl w-2/4 md:w-1/4 lg:w-1/6 xl:w-[10%] py-2 px-4">
          <Dropdown.Links>
            <>
              <Dropdown.Link
                href={`${USER_PROFILE}/${slugUrlMaker(userState.user.name)}`}
                title="Meu perfil"
              />
              <hr />
            </>
            <Dropdown.Link href={CREATE_TOPIC} title="Publicar novo tópico" />
            {/* <Dropdown.Link href={CREATE_TOPIC} title="Editar perfil" /> */}
            {/* <Dropdown.Link
              href={`${USER_PROFILE}/userName`}
              title="Minhas publicações"
            /> */}
            <hr />
            <Dropdown.Action btnTitle="Sair" action={() => logout()} />
          </Dropdown.Links>
        </Dropdown.Root>
      )}

      <Logo content="Devorum" />

      <div className="flex gap-4 items-center">
        <Link href={CREATE_TOPIC}>
          <BiMessageAltAdd className="text-2xl" title="Publicar novo tópico" />
        </Link>
        {userState.user.id !== ('' as UUID) ? (
          <BiSolidUserRectangle
            className="text-4xl cursor-pointer"
            onClick={toggleDropdown}
          />
        ) : (
          <Link href={LOGIN} className="underline">
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
