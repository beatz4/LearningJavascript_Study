const fs = require('fs');
// const rs = fs.createReadStream('stream.txt', {encoding:'utf8'});
// rs.on('data', function(data) {
//     console.log('>> data: ' + data.replace('\n', '\\n'));
// });

// rs.on('end', function(data) {
//     console.log('>> end');
// });

// pipe
const rs = fs.createReadStream('stream.txt');
const ws = fs.createWriteStream('stream_copy.txt');
rs.pipe(ws);