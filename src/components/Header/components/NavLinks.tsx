import { useContext, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { CREATE_QUESTION, HOME, LOGIN } from '../../../utils/routePaths';
import { UserDataContext } from '../../../contexts/userData';

export default function NavLinks(): ReactElement {
  const { userData, isUserLoggedIn } = useContext(UserDataContext);

  const { name } = userData;
  return (
    <nav className="lg:flex lg:items-center">
      <ul className="flex flex-col gap-8 items-center text-lg lg:flex-row">
        {isUserLoggedIn ? (
          <>
            <li className="text-acwhite hover:text-accent active:text-primary transition-colors">
              <Link to={HOME}>Início</Link>
            </li>
            <li className="text-white hover:text-accent active:text-primary transition-colors">
              <Link to={CREATE_QUESTION}>Publicar</Link>
            </li>
            <li className="text-white hover:text-accent active:text-primary transition-colors">
              <Link to={`/profile/${name}`}>Perfil</Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-white hover:text-accent active:text-primary transition-colors">
              <Link to={HOME}>Início</Link>
            </li>
            <li className="text-white hover:text-accent active:text-primary transition-colors">
              <Link to={LOGIN}>Entrar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
