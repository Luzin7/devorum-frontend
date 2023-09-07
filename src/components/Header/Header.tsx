import React, { useState, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitchButton from '../ThemeSwitchButton';
import { HOME } from '../../utils/routePaths';
import logo from '../../assets/images/logo.png';

export function Header(): ReactElement {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  if (openMenu && window.innerWidth > 640) {
    setOpenMenu(false);
  }

  return (
    <header className={`h-[7vh] relative w-full bg-footerUp`}>
      <div
        className={`flex px-2 justify-between ${
          openMenu
            ? 'h-[100vh] w-[50vw] z-10 absolute right-0 bg-footerUp'
            : 'h-[7vh]'
        }`}
      >
        <div
          className={`flex justify-center item-center my-auto h-[7vh] w-[40px] ${
            openMenu ? 'absolute -left-full ml-6' : ''
          }`}
        >
          <img src={logo} alt="Logo" className={`w-[40px] h-[40px] my-auto`} />
        </div>
        <div
          className={`w-screen items-center justify-center ${
            openMenu ? '' : 'hidden'
          } sm:flex`}
        >
          <ul
            className={`gap-3 flex ${
              openMenu ? 'flex-col text-center my-[50vh]' : ''
            }`}
          >
            <li>
              <Link
                className="hover:bg-background px-4 py-1 rounded-lg"
                to={HOME}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className={`hover:bg-background px-3 py-1 rounded-lg`}
                to={HOME}
              >
                Sobre nós
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`items-center ${
            openMenu ? 'absolute bottom-6' : 'hidden'
          } sm:flex`}
        >
          <ThemeSwitchButton></ThemeSwitchButton>
        </div>
        <figure
          className={`items-center text-center sm:flex justify-center flex-col ${
            openMenu ? 'flex absolute bottom-2 right-2' : 'hidden'
          }`}
        >
          <img
            src={logo}
            alt="Foto de perfil"
            className="w-[30px] h-[30px] rounded-full cursor-pointer"
          />
          <figcaption className="cursor-pointer">Perfil</figcaption>
        </figure>
        <button className="sm:hidden text-4xl" onClick={toggleMenu}>
          <i
            className={`bx mt-2 ${
              openMenu ? 'bx-x absolute right-0 top-0' : 'bx-menu'
            }`}
          ></i>
        </button>
      </div>
    </header>
  );
}
