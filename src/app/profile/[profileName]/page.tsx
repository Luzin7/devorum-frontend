'use client';

import { useParams } from 'next/navigation';

export default function ProfileName() {
  const { profileName } = useParams();

  return (
    <div className="w-4/5 lg:w-2/4 m-auto">
      <h1 className="text-2xl font-bold">{profileName}</h1>
      <hr />
      <div className="flex justify-around">
        <p>Lista de tópicos criados</p>
        <p>Lista de comentário</p>
      </div>
      <hr />
    </div>
  );
}
