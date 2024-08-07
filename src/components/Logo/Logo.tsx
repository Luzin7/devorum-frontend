import { HOME } from 'constants/localRoutePaths';
import Link from 'next/link';

interface LogoProps {
  content: string;
}

export function Logo({ content }: LogoProps) {
  return (
    <Link href={HOME}>
      <h1 className="font-extrabold -tracking-tight text-lg">{content}</h1>
    </Link>
  );
}
