let connection;
let direction;


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    clearInterval(direction);
    direction = setInterval(() => {
    connection.write('Move: up');
  }, 10);

  }
  if (key === 's') {
    clearInterval(direction);
    direction = setInterval(() => {
    connection.write('Move: down');
  }, 10);
  }
  if (key === 'a') {
    clearInterval(direction);
    direction = setInterval(() => {
    connection.write('Move: left');
  }, 10);

  if (key === 'd') {
    clearInterval(direction);
    direction = setInterval(() => {
    connection.write('Move: right');
  }, 10);

  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  process.stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};