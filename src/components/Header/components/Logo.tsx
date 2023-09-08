import { type ReactElement } from 'react';

import logo from '../../../assets/images/logo.png';

export default function Logo(): ReactElement {
  return (
    <div className="max-w-[7vh] h-auto">
      <img src={logo} alt="logotipo do site" />
    </div>
  );
}
