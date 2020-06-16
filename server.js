const http = require("http"); // 1

const server = http.createServer((req, res) => {
  // 2
  res.end("Hello World\n"); // 3
}); // 4

server.listen(4242, () => {
  // 5
  console.log("Server is running..."); // 6
});
