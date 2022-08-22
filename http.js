const http = require('http');

const server = http.createServer((req, res) => {
    // res.write("hello from node")
    // res.end()
    if (req.url !== '/') {
        res.end(`subpage is ${req.url}`);
        return
    }
    res.end("hello from nodejs")
})

server.listen(5000)