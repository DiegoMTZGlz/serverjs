const http = require('http');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la extensión del archivo: ', (extension) => {
  rl.close();

  const fileName = `etapa5.${extension}`;

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    });

    server.listen(3000, 'localhost', () => {
      console.log('Servidor en ejecución en http://localhost:3000/');
    });
  });
});