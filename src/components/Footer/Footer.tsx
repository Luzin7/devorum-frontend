import Link from 'next/link';
import { ABOUT } from 'utils/localRoutePaths';

export function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          {currYear} - Quantum
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-white">
          <li>
            <Link href={ABOUT} className="mr-4 hover:underline md:mr-6 ">
              Sobre
            </Link>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Termos de uso
            </a>
          </li>
          {/* <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}
