const fs = require('fs');
function list(path) {
    console.log( fs.readdirSync(path))
    let tre = fs.readdirSync(path, ()=>{})
    tre.forEach(e => {
        console.log(e)
    });
    console.log("first")
}

list(".")