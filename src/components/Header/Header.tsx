import { useState, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Logo from './components/Logo';
import NavLinks from './components/NavLinks';
import ThemeSwitchButton from '../ThemeSwitchButton';
import { MenuButton } from './components/MenuButton';
import { CREATE_QUESTION } from '../../utils/routePaths';

export function Header(): ReactElement {
  const [isAriaActive, setIsAriaActive] = useState<boolean>(false);

  const handleMobileMenu = (): void => {
    setIsAriaActive(!isAriaActive);
  };
  return (
    <header className={'h-[7vh] w-full bg-secondary flex justify-between px-2'}>
      <Logo />
      <MenuButton isAriaActive={isAriaActive} onClick={handleMobileMenu} />
      <div
        className={`${
          isAriaActive ? 'block' : 'hidden'
        } bg-secondary flex flex-col justify-between h-[93vh] w-screen z-10 right-0 top-[7vh] absolute`}
      >
        <div className="h-full flex flex-col justify-evenly">
          <NavLinks />
          <div className="flex items-center justify-around">
            <ThemeSwitchButton />
            <Link to={CREATE_QUESTION}>
              <button
                type="button"
                className="bg-primary rounded-full w-[7vh] h-[7vh] flex items-center
             justify-center text-2xl font-bold"
              >
                ?
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <NavLinks />
      </div>
      <div className="hidden lg:flex">
        <ThemeSwitchButton />
      </div>
    </header>
  );
}
