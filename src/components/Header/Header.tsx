'use client';

import Logo from '@components/Logo';
import React, { useState } from 'react';
import { CREATE_TOPIC, USER_PROFILE } from 'utils';
import { BiMessageAltAdd, BiSolidUserRectangle } from 'react-icons/bi';
import { Dropdown } from '@components/Dropdown';
import Link from 'next/link';
import { useUserStore } from 'store/user';
import { slugUrlMaker } from 'functions';

export function Header() {
  const ISSERVER = typeof window === 'undefined';
  const [isLoggedIn] = useState<boolean>(
    !ISSERVER ? localStorage.getItem('isLoggedIn') === 'true' : false
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { userState } = useUserStore();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="flex bg-secondary gap-4 items-center justify-between h-[7vh] px-4 text-whiteText">
      {isDropdownOpen && (
        <Dropdown.Root>
          <Dropdown.Links>
            {isLoggedIn && (
              <>
                <Dropdown.Link
                  href={`${USER_PROFILE}/${slugUrlMaker(userState.user.name)}`}
                  title="Meu perfil"
                />
                <hr />
              </>
            )}
            <Dropdown.Link href={CREATE_TOPIC} title="Publicar novo tópico" />
            {/* <Dropdown.Link href={CREATE_TOPIC} title="Editar perfil" /> */}
            {/* <Dropdown.Link
              href={`${USER_PROFILE}/userName`}
              title="Minhas publicações"
            /> */}
            <hr />
            <Dropdown.Action btnTitle={isLoggedIn ? 'Sair' : 'Entrar'} />
          </Dropdown.Links>
        </Dropdown.Root>
      )}

      <Logo content="Devorum" />

      <div className="flex gap-4 items-center">
        <Link href={CREATE_TOPIC}>
          <BiMessageAltAdd className="text-2xl" title="Publicar novo tópico" />
        </Link>
        <BiSolidUserRectangle
          className="text-4xl cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
    </header>
  );
}
