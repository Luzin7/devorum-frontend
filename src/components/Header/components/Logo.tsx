import { type ReactElement } from 'react';

import logo from '../../../assets/images/logo.png';

export default function Logo(): ReactElement {
  return (
    <div className="grid place-items-center max-w-[5vh] h-auto">
      <img src={logo} alt="logotipo do site" />
    </div>
  );
}
