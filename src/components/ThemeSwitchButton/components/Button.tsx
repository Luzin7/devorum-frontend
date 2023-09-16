import { useState, type ReactElement } from 'react';

import * as S from '../components/styleds';
import themeSwitcher from './functions/themeSwitch';
import { IconMode } from './IconMode';

export function Button(): ReactElement {
  const userTheme = localStorage.getItem('userTheme') === 'dark';
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(userTheme);
  return (
    <S.Button
      onClick={() => {
        themeSwitcher();
        setIsDarkModeActive(!isDarkModeActive);
      }}
    >
      <IconMode isDarkModeActive={isDarkModeActive} />
    </S.Button>
  );
}
