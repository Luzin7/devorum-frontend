import { Button } from 'components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'components/ui/dropdown-menu';
import { CREATE_TOPIC } from 'constants/localRoutePaths';
import { logout } from 'functions';
import Link from 'next/link';
import { BiSolidUserRectangle } from 'react-icons/bi';

export function DropdownMenuUserAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0">
          <BiSolidUserRectangle className="text-4xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>Perfil</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={CREATE_TOPIC}>
            <DropdownMenuItem>Novo Tópico</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500" onClick={() => logout()}>
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
