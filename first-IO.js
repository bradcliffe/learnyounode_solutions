var filename = process.argv[2];
var fs = require('fs');
var file = fs.readFileSync(filename);
var contents = file.toString();
console.log(contents.split('\n').length-1);
