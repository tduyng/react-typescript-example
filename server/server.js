const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middleware);

server.use('/api', router);

server.listen(port, () => {
  //eslint-disable-next-line
  console.log(`Server started on port ${port}`);
});
