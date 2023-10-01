interface DropdownActionProps {
  btnTitle?: string;
}

export function DropdownAction({ btnTitle = 'Sair' }: DropdownActionProps) {
  return (
    <button type="button" className="text-left text-red-400">
      {btnTitle}
    </button>
  );
}

// depois criar um subcomponente de login e logout e trasnformar esse num root desses caba
