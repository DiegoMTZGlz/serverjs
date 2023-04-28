const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  fs.readFile('etapa4.txt', 'utf8', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor en ejecución en http://localhost:3000/');
});