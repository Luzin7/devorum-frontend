import { type ReactElement } from 'react';

import * as S from '../components/styleds';
import themeSwitcher from './functions/themeSwitch';
import { IconMode } from './IconMode';

export function Button(): ReactElement {
  return (
    <S.Button onClick={themeSwitcher}>
      <IconMode />
    </S.Button>
  );
}
