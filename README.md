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
  git clone git@github.com:Luzin7/TurmaQA-Frontend.git
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
