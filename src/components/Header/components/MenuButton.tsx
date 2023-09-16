import { type ReactElement } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

interface MenuProps {
  isAriaActive: boolean;
  onClick: () => void;
}

export function MenuButton({ isAriaActive, onClick }: MenuProps): ReactElement {
  return (
    <button
      className="text-[7vh] rounded-md lg:hidden"
      aria-expanded={isAriaActive}
      onClick={onClick}
    >
      {isAriaActive ? <IoCloseOutline /> : <BiMenu />}
    </button>
  );
}
