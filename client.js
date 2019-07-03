const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Message from client: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: QQQ!');
    conn.write('Say: GGWPP PEWPEW!');
  });



  return conn;
};

module.exports = {connect};