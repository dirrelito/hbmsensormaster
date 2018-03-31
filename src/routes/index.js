const data = require('./data')
const sensorData = require('./sensorData')
const sensorMessageSchema = require('./sensorMessageSchema')
const home = require('./home')
const fallback = require('./fallback')

module.exports = (request, response) => {
    if(request.url == '/data') {
        data(request,response)
    } else if(request.url == '/sensorMessageSchema') {
        sensorMessageSchema(request,response)
    } else if (request.url == '/sensorData') {
        sensorData(request,response)
    } else if (request.url == '/') {
        home(request,response)
    } else {
        fallback(request,response)
    }
}