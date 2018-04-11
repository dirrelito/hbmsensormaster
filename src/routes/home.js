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
GET\t/data\t\t\t\t=>\tAll data in the database in JSON. use querey parameters to filter the response:
\t\t\t\t\t\t> sensorId (format as in the schema)
\t\t\t\t\t\t> sensorLocation (format as in the schema)
\t\t\t\t\t\t> periodStartDay (YYYY-MM-DD matching date part of UTC timestamps in messages)
\t\t\t\t\t\t>>> /date?sensorId={id}&sensorLocation={location}&periodStartDay={YYYY-MM-DD}
GET\t/schema/sensorMessage/v2\t=>\tThe schema that all posted new data must conform to. Post a body with json in utf8. :)
GET\t/visualization\t\t\t=>\tA graph showing all the data available
POST\t/sensorData\t\t\t=>\tRecord a single row of JSON`
        )
    }
}