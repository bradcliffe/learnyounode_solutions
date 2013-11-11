var filename = process.argv[2];
var fs = require('fs');
var file = fs.readFile(filename, function(err, data) {
  var numLines = (data.toString().split('\n').length-1);
  console.log(numLines)
});
