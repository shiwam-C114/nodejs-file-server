const fs = require("fs")
const http = require("http")

const server = http.createServer((req,res)=>{
    fs.readdirSync(`.${req.url}`)?.forEach(e => {
        res.write(`<a href=${e}>${e}</a> </br>`)
    }); 
    res.end("------end------")
})

server.listen(8080)