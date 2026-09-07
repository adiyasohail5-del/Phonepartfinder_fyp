const middleware = require('./middleware');

module.exports = (request, response) => {
  middleware(request, response);

  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Backend API is running' }));
    return;
  }

  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ error: 'Route not found' }));
};
