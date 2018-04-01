const data = require('./data')
const sensorData = require('./sensorData')
const sensorMessageSchema = require('./sensorMessageSchema')
const home = require('./home')
const fallback = require('./fallback')
const visualization = require('./visualization')

module.exports = (request, response) => {
    if(request.url == '/data') {
        data(request,response)
    } else if(request.url == '/schemas/sensorMessage/v2') {
        sensorMessageSchema(request,response)
    } else if (request.url == '/sensorData') {
        sensorData(request,response)
    } else if (request.url == '/visualization') {
        visualization(request,response)
    } else if (request.url == '/') {
        home(request,response)
    } else {
        fallback(request,response)
    }
}