const fs = require("fs");


(async function(){
    console.log("Before await")
    let frp = fs.promises.readFile("f1.txt")
    let data = await frp
    console.log(data+ " ")
})();

console.log("after function")