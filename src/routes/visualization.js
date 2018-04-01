const fs = require('fs')

module.exports = (request,response) => {
    if(request.method != 'GET'){
        response.writeHead(405,{"Allow": "GET"})
        response.end()
    } else {
        response.writeHead(200,{"Content-Type": "text/html"})
        fs.readFile('./src/visualization.html','utf8',(err,data) => {
            if(err) {
                throw err
            } else {
                response.end(data)
            }
        })
    }
}