const fs = require('fs');

let  filePath = "../test.txt"

let lineCount = 0;
let wordCount = 0;
let byteCount = 0;
let charCount = 0;
let countEverything = false;
let result = ""
console.log(process.argv);
if(process.argv.length == 3){
    filePath = process.argv[2];
    countEverything = true
} else if (process.argv.includes("|")) {
    console.log("Inside else if");
    filePath = process.argv[1];
} else {
    filePath = process.argv[process.argv.length-1]
}


fs.readFile(filePath,'utf-8', (err,data) => {
    if(err){
        console.log("Faced an error",err);
    }

    if(process.argv.includes("-c") || countEverything){
        byteCount = Buffer.byteLength(data);
        result+=`${byteCount}\t`;
    }

    if(process.argv.includes("-l") || countEverything){
        lineCount = data.trim().split(/\n/);
        result+=`${lineCount.length}\t`;
    }
    // 
    if(process.argv.includes("-w") || countEverything){
        wordCount = data.trim().split(/\s+/);
        result+=`${wordCount.length}\t`;
    }
  
    if(process.argv.includes("-m") ){
        charCount = data.length;
        result+=`${charCount}\t`;
    }
    
    result+=`${filePath}\t`;

    // console.log("Char count is :",charCount)
    // console.log("byte count is :",byteCount)
    // console.log("word count is :",wordCount.length)
    // console.log("line count is :",lineCount.length)
    console.log(result)
    
} )
