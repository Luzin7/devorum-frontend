const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/data/users.json');
const middlewares = jsonServer.defaults();

const port = 8080;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
