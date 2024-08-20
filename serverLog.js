const http = require('http')
const fs = require('fs')
const port = 3001

const server = http.createServer((req, res) => {
    try {
        res.statusCode = 20
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello, World!')
    }catch(err) {
        fs.appendFile('error.log', `${new Date().toString()} - ${err.message}\n`, (err) => {
            if (err) 
                throw err
            
        })
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain')
                res.end('Internal Server Error')
       
    }
})
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    })