import { type ReactElement } from 'react';
import { FaGithub, FaMusic, FaLinkedin } from 'react-icons/fa';

interface PersonCardProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  musicName: string;
  musicLink: string;
  quote: string;
  gitHub: string;
  linkedin: string;
}

export function PersonCard({
  name,
  role,
  imageUrl,
  description,
  musicName,
  musicLink,
  quote,
  gitHub,
  linkedin,
}: PersonCardProps): ReactElement {
  return (
    <article className="flex flex-col text-center m-6 bg-secondary rounded-lg max-w-xs">
      <div className="group h-96">
        <div className="resume flex flex-col items-center p-6 group-hover:hidden">
          <img
            src={imageUrl}
            className="rounded-full border-4 border-text w-36"
            alt={`Foto de ${name}`}
          />
          <h2 className="text-text font-bold text-3xl mt-8 mb-2">{name}</h2>
          <div className="w-10/12">
            <hr className="border-primary border-2" />
            <p className="text-text text-xl tracking-widest mt-2">{role}</p>
          </div>
        </div>
        <article
          className="flex-col max-h-96 text-center items-center p-6 gap-7 hidden ease-in group-hover:flex
          group-hover:duration-200"
          aria-describedby="resume"
        >
          <p className="text-text tracking-wide">{description}</p>
          <div className="flex gap-6 items-center">
            <FaMusic className="text-text" />
            <a
              href={musicLink}
              className="text-text underline hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              {musicName}
            </a>
          </div>
          <hr className="border-primary border-2 m-2 w-10/12" />
          <div className="flex flex-col items-center gap-6">
            <q className="text-text">
              <i>{quote}</i>
            </q>
          </div>
        </article>
      </div>
      <ul
        className="bg-secondary flex justify-center gap-4 p-5 text-3xl rounded-b-md
       border-x-2 border-b-2 border-input"
      >
        <li>
          <a href={gitHub} target="_blank" rel="noreferrer">
            <FaGithub className="text-text hover:text-accent transition-colors" />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="text-text hover:text-accent transition-colors" />
          </a>
        </li>
      </ul>
    </article>
  );
}
