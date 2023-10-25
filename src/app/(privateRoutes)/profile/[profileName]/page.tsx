'use client';

import { useUserStore } from 'store/user';

export default function ProfileName() {
  const { userState } = useUserStore();

  return (
    <div className="w-4/5 m-auto text-center h-full lg:w-2/4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Oi, {userState.user.name}!</h1>
      <p>
        Em breve iremos rechear essa página com todos os tópicos que você criou
        e comentários que fez!
      </p>
    </div>
  );
}
