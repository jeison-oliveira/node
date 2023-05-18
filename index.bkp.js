const http = require("http");
const fs = require("fs");
const { toUpper } = require("./utils.js");
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[4];

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
    fs.readdir(folder, (err, files) => {
        if(err) console.error(err)
        else {
            files.forEach(f => res.write(`${toUpper(f)}<br>`));
            res.end("Instituto de Computação");
        }
    })
});

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})