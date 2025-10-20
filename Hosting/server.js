const http = require('http');
const fs = require('fs');
const path = require('path');

let connections = 0;

const server = http.createServer((req, res) => {
  connections++;
  console.log(`New connection! Total connections: ${connections}`);

  req.on('close', () => {
    connections--;
    console.log(`Connection closed. Total connections: ${connections}`);
  });

  let filePath = path.join(__dirname, 'LumaPlayer.html');
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading file');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

server.listen(ENTER_YOUR_PORT_HERE, () => {
  console.log('Server running');
});

