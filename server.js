const http = require("http");
const html = require("fs").readFileSync("./index.html")

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
});

server.listen(process.env.PORT || 8000, () => {
  console.log("server runnning!")
});