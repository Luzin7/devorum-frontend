function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-evenly h-2/6">
        <h1 className="text-4xl font-bold underline text-text lg:text-7xl">
          TurmaQA - Frontend
        </h1>
        <p>
          Edite <code>src/App.tsx</code> e salve para testar o hmr update
        </p>
        <p className="text-sm text-center lg:text-xl">
          Acesse o{' '}
          <a
            className="text-primary underline hover:text-accent transition-colors"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Luzin7/TurmaQA-Frontend"
          >
            repositório
          </a>{' '}
          e leia a documentação. Qualquer dúvida basta perguntar!
        </p>
      </div>
    </main>
  );
}

export default App;
