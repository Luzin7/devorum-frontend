import { useRouter } from 'next/navigation';
import { LOGIN } from 'utils';
interface DropdownActionProps {
  btnTitle?: string;
}

export function DropdownAction({ btnTitle = 'Sair' }: DropdownActionProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="text-left text-red-400"
      onClick={() =>
        btnTitle === 'Sair' ? 'Not implemented' : router.push(LOGIN)
      }
    >
      {btnTitle}
    </button>
  );
}

// depois criar um subcomponente de login e logout e trasnformar esse num root desses caba
