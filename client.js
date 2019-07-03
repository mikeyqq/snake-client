const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Message from client: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: QQQ!\n');
    conn.write('Hello QQQ!\n');
  });

  /*
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: left');
    }, 3000);
    conn.on('connect', () => {
      setTimeout(() => {
        conn.write('Move: left');
      }, 3000);
      conn.on('connect', () => {
        setTimeout(() => {
          conn.write('Move: left');
        }, 3000);
        conn.on('connect', () => {
          setTimeout(() => {
            conn.write('Move: left');
          }, 3000);
          conn.on('connect', () => {
            setTimeout(() => {
              conn.write('Move: left');
            }, 3000);
            conn.on('connect', () => {
              setTimeout(() => {
                conn.write('Move: left');
              }, 3000);
            });
          });
        });
      });
    });
  });
  */

  return conn;
};

module.exports = {connect};