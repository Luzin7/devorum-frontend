// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');
const server = jsonServer.create();
const users = jsonServer.router('./src/data/users.json');
const questions = jsonServer.router('./src/data/questions.json');
const middlewares = jsonServer.defaults();

const port = 8080;

server.use(middlewares);
server.use(questions);
server.use(users);

server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
