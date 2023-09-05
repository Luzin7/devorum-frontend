import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { HOME } from '../../utils/routePaths';
import logo from '../../assets/images/logo.png';

export function Footer(): ReactElement {
  return (
    <footer className="flex flex-col w-screen h-1/5 relative">
      <div className="flex h-full w-full items-center bg-footerUp md:p-5 p-2">
        <img src={logo} alt="Logo" className="w-[70px] h-[70px]" />
        <ul className="flex gap-10 my-0 mx-auto sm:pr-[35px]">
          <li>
            <Link className="hover:opacity-50" to={HOME}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to={HOME}>
              Sobre o projeto
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex w-full justify-center bg-footerMid border-t-4 border-footerDown text-center p-1">
        <p>
          &copy; 2023 Copyright - Feito com 💖 por&nbsp;<strong>VHN</strong>
        </p>
      </div>
    </footer>
  );
}
