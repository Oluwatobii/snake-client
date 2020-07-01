// THIS IS THE CLIENT SIDE

const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: OTB");
    conn.write("Move: up");
    setTimeout(() => {
      conn.write("Move: up");
    }, 50);
    setInterval(() => {
      conn.write("Move: left");
    }, 50);
  });

  return conn;
};

module.exports = connect;
