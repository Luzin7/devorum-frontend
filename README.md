# Documentação do Projeto TurmaQA - Frontend

## Visão Geral

Esta é a documentação do projeto TurmaQA, que descreve o frontend do projeto. O TurmaQA é uma plataforma que permite aos usuários fazer perguntas e obter respostas em um ambiente de colaboração. Este documento fornecerá informações sobre a estrutura do projeto, sua arquitetura e como os desenvolvedores podem contribuir para ele.

## Estrutura de Pastas

O projeto frontend está organizado da seguinte forma:

- `components`: Contém componentes reutilizáveis da aplicação.
- `contexts`: Armazena os contextos globais da aplicação.
- `data`: Pode ser utilizado para armazenar dados estáticos, se necessário.
- `functions`: Local para funções utilitárias da aplicação.
- `pages`: Cada página da aplicação possui um arquivo nesta pasta.
- `styles`: Armazena estilos globais, como cores e configurações do Tailwind CSS.
- `types`: Contém definições de tipos TypeScript utilizadas em toda a aplicação.
- `utils`: Utilizado para funções auxiliares e utilitárias.
- `public`: Será utilizada para armazenar arquivos públicos, como um favicon.

## Ferramentas e Tecnologias

- [React](https://reactjs.org/): Biblioteca JavaScript para criação de interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS utilizado para estilização.
- [TypeScript](https://www.typescriptlang.org/): Linguagem de programação para JavaScript tipada.
- [ESLint](https://eslint.org/): Ferramenta para análise de código.
- [Prettier](https://prettier.io/): Formatador de código.
- [Stylelint](https://stylelint.io/): Ferramenta para análise de estilos CSS.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js: [Download aqui](https://nodejs.org/)
- Yarn (recomendado) ou npm
- A extensão EditorConfig no [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) para aplicar automaticamente as configurações do `.editorconfig`.

## Configurações

- Utilize as configurações do `.eslintrc.json`,`.editorconfig` e do `.prettierrc` para manter o código limpo e consistente.
- O arquivo `.stylelint.json` contém configurações para a análise de estilos CSS. Certifique-se de seguir essas diretrizes para manter a consistência nos estilos.
- `tailwind.config.js`: Configuração personalizada do Tailwind CSS.

## Rodando localmente

1. Clone o projeto

```bash
  git clone https://github.com/Luzin7/TurmaQA-Frontend.git
```

2. Entre no diretório do projeto

```bash
  cd turmaQA-Frontend
```

3. Instale as dependências

```bash
  npm install

  ou

  yarn
```

4. Inicie o servidor

```bash
  npm run dev

  ou

  yarn dev
```

6. Acesse a aplicação em `http://localhost:3000` no seu navegador.

7. Faça as alterações necessárias e crie um pull request para contribuir para o projeto.

## Como colaborar

### Passo 1: Fork do Repositório

O primeiro passo é fazer um fork do repositório principal para a sua própria conta no GitHub. Isso criará uma cópia do projeto que você pode modificar sem afetar o repositório original.

1. Acesse o repositório do TurmaQA em https://github.com/Luzin7/TurmaQA-Frontend.
2. No canto superior direito da página, clique no botão "Fork" para criar uma cópia do projeto na sua conta.

### Passo 2: Clone o Repositório

Agora você precisa clonar o seu fork do repositório para a sua máquina local para que você possa fazer alterações.

```bash
git clone https://github.com/Luzin7/TurmaQA-Frontend.git
```

### Passo 3: Crie uma Branch

Antes de fazer alterações, crie uma branch para trabalhar. Use um nome descritivo para a branch que indique a natureza das alterações que você está fazendo.

```bash
git checkout -b minha-tarefa
```

### Passo 4: Faça as Alterações

Antes de fazer alterações, crie uma branch para trabalhar. Use um nome descritivo para a branch que indique a natureza das alterações que você está fazendo.

### Passo 5: Commite Suas Alterações

Quando você estiver satisfeito com suas alterações, faça um commit das mudanças. Lembre-se de utilizar [commits convencionais](https://www.conventionalcommits.org/en/v1.0.0/).

```bash
git commit -m "<type>[scope]: <description>"
```

### Passo 6: Push para o Seu Fork

Envie suas alterações para o seu fork no GitHub.

```bash
git push origin minha-tarefa
```

### Passo 7: Crie um Pull Request

Agora que suas alterações estão no seu fork no GitHub, você pode criar um Pull Request (PR) para enviar as alterações de volta para o repositório original.

1. Acesse a página do seu fork no GitHub.

2. Clique no botão "New Pull Request".

3. Escolha a branch da qual você fez as alterações no seu fork para comparar com a branch principal do repositório original.

4. Dê um título e uma descrição significativa para o seu PR explicando o que você fez.

5. Clique no botão "Create Pull Request" para enviar o PR.

### Passo 8: Revisão e Merge

O codeowner revisará suas alterações e, se estiverem corretas e úteis, o seu PR estará no projeto principal.

Parabéns, você contribuiu para o projeto!

### Passo 9: Não esqueça!

Mantenha seu fork atualizado com as últimas alterações do projeto principal. Para fazer isso, primeiro atualize seu fork localmente:

```bash
git remote add upstream https://github.com/Luzin7/TurmaQA-Frontend.git
git fetch upstream
git checkout main
git merge upstream/main
```

Lembre-se, estamos aqui para colaborar e melhorar o projeto juntos. Se você tiver dúvidas ou precisar de ajuda, não hesite em perguntar.
