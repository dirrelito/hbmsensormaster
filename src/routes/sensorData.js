const fs = require('fs')
const validate = require('jsonschema').validate
const postOneRow = require('../dbLib').postOneRow

module.exports = (request,response) => {
    if(request.method != 'POST'){
        response.writeHead(405,{"Allow": "POST"})
        response.end()
    } else {
        var data = ""
        //event listener that constructs the message body - assuming it is utf8 encoded....
        request.on('data', (chunk) => {
            data = data + chunk.toString('utf8')
        });

        //event listener for when the whole body has been recieved
        request.on('end', () => {
            const jsonObj = JSON.parse(data)
            fs.readFile('./src/sensorMessageSchemaV2.json','utf8',(err,schemaRaw) => {
                if(err) {
                    throw err
                } else {
                    const schema = JSON.parse(schemaRaw)
                    const valRes = validate(jsonObj,schema)
                    if(!valRes.valid) {
                        response.writeHead(422,{"Content-Type": "text/plain"})
                        response.end(`The posted message did not conform to the schema for sensor messages. Check ${schema.$id} for details.`)
                    } else {
                        postOneRow(jsonObj, () => {
                            response.writeHead(201,{"Content-Type": "text/plain"})
                            response.end()
                        })
                    }
                }
            })
        })
    }
}