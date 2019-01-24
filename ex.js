var fs = require('fs');

fs.appendFile('ukinode.txt', 'uki is a coding school.', function (err) {
 if (err) throw err;
 console.log('Saved!');
});
