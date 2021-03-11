
const fs = require("fs");


function singleBreak(inputFilePath){



fs.readFile(inputFilePath, 'utf-8', function(err, data) {
  if (err) throw err;
console.log(data.replace(/(\r\n|\r|\n){2,}/g, '$1'));

 

});

}


module.exports = {
    singleBreakfn : singleBreak
}



