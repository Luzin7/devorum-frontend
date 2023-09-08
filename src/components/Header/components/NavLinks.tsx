import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { HOME } from '../../../utils/routePaths';

export default function NavLinks(): ReactElement {
  return (
    <nav className="lg:flex lg:items-center">
      <ul className="flex flex-col gap-8 items-center font-bold text-xl lg:flex-row">
        <li className="text-text hover:text-accent active:text-primary transition-colors">
          <Link to={HOME}>Início</Link>
        </li>
        <li className="text-text hover:text-accent active:text-primary transition-colors">
          <Link to={'/about-us'}>Sobre nós</Link>
        </li>
        <li className="text-text hover:text-accent active:text-primary transition-colors">
          <Link to={'/about-project'}>Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}
