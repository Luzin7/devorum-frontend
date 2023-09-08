import { type ReactElement } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

interface IconModeProps {
  isDarkModeActive: boolean;
}

export function IconMode({ isDarkModeActive }: IconModeProps): ReactElement {
  if (isDarkModeActive) {
    return <MdLightMode />;
  } else {
    return <MdDarkMode />;
  }
}
