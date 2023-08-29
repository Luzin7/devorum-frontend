function App() {
  const armazenarInputs = () => {
    const mailInput = document.getElementById('mailInput') as HTMLInputElement
    const nameInput = document.getElementById('nameInput') as HTMLInputElement

    const mailValue = mailInput.value
    const nameValue = nameInput.value

    console.log({
      nome: nameValue,
      email: mailValue
    });
  }
  return (
    <form className="flex justify-center items-center h-screen bg-background">
      <div className="flex flex-col gap-4 w-[400px] h-[400px] bg-text rounded-3xl text-secondary p-6 shadow-2xl shadow-secondary">
        <h2 className="text-accent text-4xl font-bold">Turma QA</h2>
        <h3 className="text-3xl text-bg">Suas informações</h3>

        <div className="flex flex-col gap-[10px]">
          <label htmlFor="mailInput" className="hover:cursor-pointer">E-mail</label>
          <input type="email" name="email" id="mailInput" placeholder="E-mail" className="bg-bg rounded-[7px] border-2 border-bg bg-white pl-2"/>
        </div>

        <div className="flex flex-col gap-[10px]">
          <label htmlFor="nameInput" className="hover:cursor-pointer">Nome</label>
          <input type="name" name="name" id="nameInput" placeholder="Nome" className="bg-bg rounded-[7px] border-2 border-bg bg-white pl-2"/>
        </div>

        <div className="flex justify-center items-center h-[100%]">
          <button type="submit" onClick={armazenarInputs} className="bg-secondary rounded-[53px] w-[107px] h-[34px] text-text hover:scale-110 hover:shadow-md hover:shadow-background duration-100">ENVIAR</button>
        </div>
      </div>
    </form>
  );
}

export default App;
