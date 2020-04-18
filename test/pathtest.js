var innerlatDir = "paths\fellows\innerlat.txt";
var innerlongDir = "paths\fellows\innerlong.txt";
var fs = require('fs');
var contents = fs.readFileSync(innerlatDir, 'utf8');
console.log(contents);
