

var innerlatDir :string = "paths\fellows\innerlat.txt"
var innerlongDir : string = "paths\fellows\innerlong.txt"
var fs = require('fs');
var contents = fs.readFileSync(innerlatDir, 'utf8');
console.log(contents);