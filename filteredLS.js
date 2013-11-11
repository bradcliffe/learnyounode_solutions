var directory = process.argv[2];
var extension = process.argv[3];
var pattern = RegExp('\\.' + extension + '$');

var fs = require('fs')
var filteredList = fs.readdir(directory, function(err, contents) {
  for (var i = 0; i < contents.length; i++) {
    if (pattern.test(contents[i])) {
      console.log(contents[i]);
    }
  }
});
