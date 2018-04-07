const d = require('../dbLib')

module.exports = (request,response) => {
    if(request.method != 'GET'){
        response.writeHead(405,{"Allow": "GET"})
        response.end()
    } else {    
        response.writeHead(200, {"Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'});
        d.readAllRows((allRows) => {
            response.end(JSON.stringify(allRows))
        });
    }
}