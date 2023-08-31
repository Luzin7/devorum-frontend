import logo from '../../images/logo.png'

export function Login(){
  return (
    <main className='w-screen h-screen flex items-center justify-evenly flex-col'>
      <img src={logo} alt="Logo TurmaQA"/>
      <form action=""
        className='flex items-center justify-evenly w-11/12 md:w-8/12 lg:w-6/12 flex-col min-h-fit gap-4 md:gap-5 lg:gap-6 text-center bg-[#350C4040] rounded-3xl mx-4 p-6 md:py-8 lg:py-10'>
        <h2
        className='font-bold text-4xl my-3'>
          Login
        </h2>

        <div className='flex gap-6 flex-col w-full lg:w-3/4'>
          <input
          type="text" name='name' placeholder='Nome'
          className='w-full rounded-2xl py-4 px-6 placeholder:opacity-70 placeholder:text-black bg-slate-200 focus:border-accent focus:border-2 outline-none text-black bg-opacity-70'/>
          <input
          type="password" name='password' placeholder='Senha'
          className='w-full rounded-2xl py-4 px-6 placeholder:opacity-70 placeholder:text-black bg-slate-200 focus:border-accent focus:border-2 outline-none text-black bg-opacity-70'/>
        </div>

        <button
          type='submit'
          className='font-bold p-2 w-2/3 self-center bg-secondary rounded-full text-2xl sm:w-2/4 lg:w-2/6 hover:scale-110 mt-3 transition-all'>
            Entrar
        </button>

        <a
        href=""
        className='mb-2 mt-5 text-accent underline text-lg hover:opacity-80'>
          Criar uma conta
        </a>
      </form>
    </main>
  )
}
