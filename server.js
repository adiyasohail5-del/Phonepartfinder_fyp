const http = require('http');
const routes = require('./routes');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  routes(request, response);
});

server.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
