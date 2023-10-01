'use client';

import Logo from '@components/Logo';
import React, { useState } from 'react';
import { CREATE_TOPIC } from 'utils';
import { BiMessageAltAdd, BiSolidUserRectangle } from 'react-icons/bi';
import { Dropdown } from '@components/Dropdown';
import Link from 'next/link';
import { getThemeBySystem } from 'functions/getUserSystemTheme';

export function Header() {
  getThemeBySystem();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="flex bg-secondary gap-4 items-center justify-between h-[7vh] px-4 text-whiteText">
      {isDropdownOpen && (
        <Dropdown.Root>
          <Dropdown.Links>
            <Dropdown.Link href={`/profile/Luzin`} title="Meu perfil" />
            <hr />
            <Dropdown.Link href={CREATE_TOPIC} title="Publicar novo tópico" />
            <Dropdown.Link href={CREATE_TOPIC} title="Editar perfil" />
            <Dropdown.Link href={CREATE_TOPIC} title="Minhas publicações" />
            <hr />
            <Dropdown.Action />
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
