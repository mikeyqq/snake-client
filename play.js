const { connect } = require('./client');
console.log('Connecting ...');
connect();


const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('Move Up')
  }
  if (key === 's') {
    console.log('Move Down')
  }
  if (key === 'a') {
    console.log('Move Left')
  }
  if (key === 'd') {
    console.log('Move Right')
  }
  };

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  process.stdin.on('data', handleUserInput)
  return stdin;
}

setupInput();