// First install bcrpyt package on terminal
// npm install bcrypt

const bcrypt = require('bcrypt');
const fs = require('fs');

const password = process.argv[2];

fs.readFile('./hash.txt', { encoding: 'utf8' }, (err, hash) => {
  bcrypt.compare(password, hash, (err, passwordMatch) => {
    console.log('Password matches hash:', passwordMatch);
  });
});

// node check_password.js your password follows here
// node check_password.js $2b$10$lw1EUq8JZOLHAQv7ZNUkd.s6X/7tn7OyOWlbUv1116lEioqKwQKTu //undefined
// node check_password.js hunter99 //false
// node check_password.js hunter15 //true
