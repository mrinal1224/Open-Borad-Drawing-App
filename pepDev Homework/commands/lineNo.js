
const fs = require("fs");

let inputFilePath = process.argv[2];


function lineNo(inputFilePath){

fs.readFile(inputFilePath, 'utf-8', function(err, data) {
  if (err) throw err;

 var numbered = data.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
 

 
 console.log(numbered);
 

 
});

}




module.exports = {
    lineNofn : lineNo
}
