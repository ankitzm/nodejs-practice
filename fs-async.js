// const fs = require('fs');
const { readFile, writeFile } = require("fs")

console.log("start");
readFile("./content/first.txt", 'utf-8',
    (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(res);

        readFile("./content/second.txt", 'utf-8',
            (err, res) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(res);

                writeFile("./content/result.txt", 'writing to file',
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        console.log("in the code");
                    })
            })
    })

console.log("end");