import { MouseEventHandler } from 'react';

interface DropdownActionProps {
  btnTitle?: string;
  color?: string;
  action: MouseEventHandler<HTMLButtonElement>;
}

export function DropdownAction({
  btnTitle,
  color = 'red-400',
  action
}: DropdownActionProps) {
  return (
    <button
      type="button"
      className={`text-left ${
        btnTitle === 'Sair' ? 'text-red-400' : `text-${color}`
      }`}
      onClick={action}
    >
      {btnTitle}
    </button>
  );
}

// depois criar um subcomponente de login e logout e trasnformar esse num root desses caba
