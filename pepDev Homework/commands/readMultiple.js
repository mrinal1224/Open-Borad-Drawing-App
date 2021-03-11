
const fs = require("fs");

function readMultiple(){


for(let i=3 ; i<process.argv.length ; i++){
    let PathPassed = process.argv[i];

    
fs.readFile(PathPassed, 'utf-8', function(err, data) {
  if (err) throw err;
console.log(data);

 

});
}
}

module.exports={
    readMultiplefn : readMultiple
}
