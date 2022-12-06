var net = require("net");

var port = 54321;
var host = "127.0.0.1";

var server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(`Server: Received ${data}`);
    socket.write(data + " Back to you");
    socket.pipe(socket);
  });
  socket.on("end", () => {
    console.log("Server: Client Disconnected");
  });
});

server.on("connection", (socket) => {
  console.log(
    `Server: ${socket.remoteAddress}:${socket.remotePort} has connected`
  );
});

server.on("error", (err) => {
  throw err;
});

server.on("listening", () => {
  var address = server.address();
  console.log(`opened server on ${address.address}:${address.port}`);
});

server.listen(port, host);
