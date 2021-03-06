const fs = require('fs')

module.exports = (request,response) => {
    if(request.method != 'GET'){
        response.writeHead(405,{"Allow": "GET"})
        response.end()
    } else {
        response.writeHead(200,{"Content-Type": "application/schema+json"})
        fs.readFile('./src/sensorMessageSchemaV2.json','utf8',(err,data) => {
            if(err) {
                throw err
            } else {
                response.end(data)
            }
        })
    }
}