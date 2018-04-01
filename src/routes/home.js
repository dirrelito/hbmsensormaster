module.exports = (request,response) => {
    if(request.method != 'GET'){
        response.writeHead(405,{"Allow":"GET"})
        response.end()
    } else {
        response.writeHead(200,{"Content-type":"text/plain; charset=utf-8"})
        response.end(
`Welcome to the super duper good API.
Endpoints are:
GET\t/\t\t\t\t=>\tThis page
GET\t/data\t\t\t\t=>\tAll data in the database in JSON
GET\t/schema/sensorMessage/v2\t=>\tThe schema that all posted new data must conform to. Post a body with json in utf8. :)
POST\t/sensorData\t\t\t=>\tRecord a single row of JSON`
        )
    }
}