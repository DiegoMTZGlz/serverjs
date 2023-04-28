const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const data = fs.readFileSync('etapa3.txt', 'utf8');
  res.end(data);
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor en ejecución en http://localhost:3000/');
});