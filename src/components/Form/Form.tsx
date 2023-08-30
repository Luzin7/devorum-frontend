import { useState } from 'react';

export function Form() {
  const [userInfos, setUserInfos] = useState({
    name: '',
    email: '',
  });

  const { name, email } = userInfos;

  const handleSubmit = (name: string, email: string) => {
    console.log({ name, email });
  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex justify-center items-center h-screen bg-background"
    >
      <div className="flex flex-col gap-4 w-4/5 lg:w-2/5 min-h-2/6 bg-text rounded-3xl text-secondary p-6 shadow-2xl shadow-secondary">
        <h2 className="text-primary text-4xl font-bold">Turma QA</h2>
        <p className="text-bg font-medium">Suas informações</p>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="nameInput" className="hover:cursor-pointer">
            Nome
          </label>
          <input
            onChange={({ target }) =>
              setUserInfos({ ...userInfos, name: target.value })
            }
            type="name"
            name="name"
            id="nameInput"
            placeholder="Nome"
            className="bg-bg py-2 px-4 rounded-[7px] border-2 border-bg bg-white outline-none focus:border-2 focus:border-accent placeholder:text-black placeholder:opacity-70"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="mailInput" className="hover:cursor-pointer">
            E-mail
          </label>
          <input
            onChange={({ target }) =>
              setUserInfos({ ...userInfos, email: target.value })
            }
            type="email"
            name="email"
            id="mailInput"
            placeholder="E-mail"
            className="bg-bg mb-4 py-2 px-4 rounded-[7px] border-2 border-bg bg-white outline-none focus:border-2 focus:border-accent placeholder:text-black placeholder:opacity-70"
          />
        </div>
        <div className="flex justify-center items-center h-[100%]">
          <button
            onClick={() => handleSubmit(name, email)}
            type="submit"
            className="bg-secondary rounded-full py-2.5 px-12 text-text hover:scale-110 hover:shadow-md hover:shadow-background duration-100 font-bold"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
