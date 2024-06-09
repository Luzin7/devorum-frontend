import Link from 'next/link';
import { ABOUT } from 'utils/localRoutePaths';

export function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="flex items-center">
      <div className="w-full text-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          {currYear} - Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-white">
          <li>
            <Link href={ABOUT} className="mr-4 hover:underline md:mr-6 ">
              Sobre
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1OIwFCChciXQ3TWCTmOoYho7HFXriQBXE/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Termos de uso
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/18GS-gzn4GlNPJB1nROOcq6R-8d30dXLp/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacidade
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
