var fs = require('fs');

fs.unlink('ukinodeexercise1.txt', function (err) {
  if (err) throw err;
  console.log('Deleted!');
});
