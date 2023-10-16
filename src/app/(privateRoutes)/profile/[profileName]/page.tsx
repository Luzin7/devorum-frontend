'use client';

import { useUserStore } from 'store/user';

export default function ProfileName() {
  const { userState } = useUserStore();

  return (
    <div className="w-4/5 lg:w-2/4 m-auto">
      <h1 className="text-2xl font-bold">{userState.user.name}</h1>
      <hr />
      <div className="flex justify-around">
        <p>Lista de tópicos criados</p>
        <p>Lista de comentário</p>
      </div>
      <hr />
    </div>
  );
}
