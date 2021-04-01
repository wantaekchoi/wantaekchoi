const http = require('http');

const hostname = 'https://pfft-test-app.herokuapp.com'
const port = process.env.PORT || 5000; 

console.log("!!");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World !!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});