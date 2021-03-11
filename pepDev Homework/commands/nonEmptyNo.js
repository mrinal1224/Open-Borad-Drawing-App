const fs = require("fs");


function nonEmptyNo(inputFilePath){



fs.readFile(inputFilePath, 'utf-8', function(err, data) {
  if (err) throw err;

 
 
 let nonEmptyLines = data.replace(/(\r\n|\r|\n){2,}/g, '$1');

 var numbered = nonEmptyLines.split('\n').map((line, index) => `${index+1}. ${line}`).join('\n');

 console.log(numbered);

 

});

}


module.exports = {
    nonEmptyNofn : nonEmptyNo
}



