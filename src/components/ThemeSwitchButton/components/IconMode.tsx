import { type ReactElement } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export function IconMode(): ReactElement {
  const userTheme = localStorage.getItem('userTheme');

  if (userTheme === 'dark') {
    return <MdDarkMode />;
  } else {
    return <MdLightMode />;
  }
}
