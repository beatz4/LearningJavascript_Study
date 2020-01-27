const fs = require('fs');
const path = require('path');

// console.log(__dirname);
 console.log(path.join(__dirname, 'hello.txt'));

fs.writeFile(path.join(__dirname, 'hello.txt'), 
'hello from Node!', function(err) {
    if (err) return console.log('Error writing to file.');
});

// Sync 작업
//const result = fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
//console.log(result);