const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello node js from http module");
  } else if (url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Projects route");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not found!!");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Listening at port 3000");
});
