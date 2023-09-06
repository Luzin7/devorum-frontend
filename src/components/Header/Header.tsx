import React, { useState, type ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitchButton from '../ThemeSwitchButton';
import { HOME } from '../../utils/routePaths';
import logo from '../../assets/images/logo.png';

export function Header(): ReactElement {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = (): void => {
    !menuAberto ? setMenuAberto(!menuAberto) : setMenuAberto(false);
  };

  const closeMenu = (): void => {
    setMenuAberto(false);
  };

  useEffect(() => {
    const handleResize = (): void => {
      if (menuAberto && window.innerWidth > 640) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuAberto]);

  return (
    <header
      className={`h-[7vh] relative w-screen bg-footerUp ${
        menuAberto ? '' : ''
      }`}
    >
      <div
        className={`flex px-2 justify-between ${
          menuAberto
            ? 'h-[100vh] w-[50vw] z-10 absolute right-0 bg-footerUp'
            : 'h-[7vh]'
        }`}
      >
        <div
          className={`flex justify-center item-center my-auto h-[7vh] w-[40px] ${
            menuAberto ? 'absolute -left-full ml-2' : ''
          }`}
        >
          <img src={logo} alt="Logo" className={`w-[40px] h-[40px] my-auto`} />
        </div>
        <div
          className={`w-screen items-center justify-center ${
            menuAberto ? '' : 'hidden'
          } sm:flex`}
        >
          <ul
            className={`gap-3 flex ${
              menuAberto ? 'flex-col text-center my-[50vh]' : ''
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
            menuAberto ? 'absolute bottom-6' : 'hidden'
          } sm:flex`}
        >
          <ThemeSwitchButton></ThemeSwitchButton>
        </div>
        <figure
          className={`items-center text-center sm:flex justify-end flex-col ${
            menuAberto ? 'flex absolute bottom-2 right-2' : 'hidden'
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
              menuAberto ? 'bx-x absolute right-1 top-0' : 'bx-menu'
            }`}
          ></i>
        </button>
      </div>
    </header>
  );
}
