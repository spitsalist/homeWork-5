const http = require('http')
const port = 3001


const server = http.createServer((req, res) => {
    const auth = req.headers['authorization']
    if (!auth) {
    res.statusCode = 401
    res.setHeader('Content-Type', 'text/plain')
    // res.setHeader('Cache-Control', 'public, max-age=3600');
    res.end('Unauthorized\n')
    return
    } 
    console.log('Authorization:', auth)
    res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Authorization header received\n')
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    })

