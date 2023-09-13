import { useContext, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { CREATE_QUESTION, HOME } from '../../../utils/routePaths';
import { UserDataContext } from '../../../contexts/userData';

export default function NavLinks(): ReactElement {
  const { userData } = useContext(UserDataContext);

  const { name } = userData;
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
          <Link to={`/profile/${name}`}>Perfil</Link>
        </li>
        <li className="text-text hover:text-accent active:text-primary transition-colors">
          <Link to={CREATE_QUESTION}>Perguntar</Link>
        </li>
      </ul>
    </nav>
  );
}
