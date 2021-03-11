
let lineNoObj = require("./commands/lineNo");
let singleBreakObj = require('./commands/singleBreak')
let nonEmptyNoObj = require("./commands/nonEmptyNo")
let readMultipleObj = require("./commands/readMultiple")
let inputFilePath = process.argv[3];
let command = process.argv[2];



switch (command) {
    case "-n":
        lineNoObj.lineNofn(inputFilePath);
        break;
    case "-b":
        console.log("numbering to non empty lines");
         nonEmptyNoObj.nonEmptyNofn(inputFilePath)
         break;
    case "-s":
        singleBreakObj.singleBreakfn(inputFilePath)
        break;
    case "-b-s":
          nonEmptyNoObj.nonEmptyNofn(inputFilePath);
          break;
    case "rmf":
        readMultipleObj.readMultiplefn();
        break;


    default:
        console.log("Wrong command");
}







