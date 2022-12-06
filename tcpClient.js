var net = require("net");
const prompt = require("prompt-sync")({ sigint: true });

var port = 54321;
var host = "127.0.0.1";

var client = new net.Socket();

client.connect(port, host, () => {
  console.log("Client: Connected to Server");
});

const string = prompt("Enter a string: ");
client.write(string);

client.on("data", (data) => {
  console.log(`Server: ${data}`);
  client.end();
});

client.on("close", () => {
  console.log("Client: Disconnected from Server");
});
