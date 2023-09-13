import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ABOUT_US } from '../../utils/routePaths';

export function Footer(): ReactElement {
  return (
    <footer className="bg-secondary flex flex-col min-h-[10vh] justify-center items-center gap-8 pt-4 text-text">
      <ul className="flex gap-7">
        <li className="hover:opacity-50 font-medium transition-all">
          <Link to={ABOUT_US}>Sobre nós</Link>
        </li>
        <li className="hover:opacity-50 font-medium transition-all">
          <Link to={'/about-project'}>Sobre o projeto</Link>
        </li>
      </ul>
      <span>
        Feito com 💖 por <strong>VHN</strong>
      </span>
    </footer>
  );
}
