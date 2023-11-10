const http = require("http");
const fs = require("fs/promises");
const host = 'localhost'
const port= 8080

let indexFile;
const requestListener = function (req, res) {
    res.setHeader("Conteent-Type", "text/html")
    res.writeHead(200)
    res.end(indexFile)
}

const server = http.createServer(requestListener)
    fs.readFile(__dirname + "/main.html")
      .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`)
        });
      })
      .catch(err => {
        console.error(`Could not read index.html: ${err}`)
        process.exit(1)
      })


