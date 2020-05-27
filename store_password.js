// First install bcrypt package on terminal
// npm install bcrypt

const bcrypt = require('bcrypt');
const fs = require('fs');

const input = process.argv[2];

bcrypt.hash(input, 10, (err, hash) => {
  fs.writeFile('./hash.txt', hash, (err) => {
    console.log('wrote password hash to file: ./hash.txt')
  });
});

// node store_password.js "your password goes in here"
// node store_password.js "hunter15"
