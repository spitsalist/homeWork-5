const http = require('http')
const port = 3001

server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')

if(req.method === 'PUT'){
    res.statusCode = 200
    res.end('PUT request processed')
    }else if(req.method === 'DELETE') {
        res.statusCode = 200
res.end('DELETE request processed')
}else{
    res.statusCode = 404
    res.end('Internal Server Error')
    }
})
server.listen(port, () => {
    console.log('Server is running')
    })