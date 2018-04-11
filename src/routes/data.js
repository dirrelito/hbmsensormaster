const d = require('../dbLib')

module.exports = (request,response) => {
    if(request.method != 'GET'){
        response.writeHead(405,{"Allow": "GET"})
        response.end()
    } else {
        const qString = request.url.slice(5)
        const qParams = parseQuereyString(qString)
        response.writeHead(200, {"Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'});
        d.readAllRows((allRows) => {
            const someRows = allRows.filter(r => qParams.sensorId == undefined ? true : r.sensorId == qParams.sensorId)
                                .filter( r => qParams.sensorLocation == undefined ? true : r.sensorLocation == qParams.sensorLocation)
                                .filter( r => qParams.periodStartDay == undefined ? true : r.periodStart.slice(0,10) == qParams.periodStartDay)
            response.end(JSON.stringify(someRows))
        });
    }
}

const parseQuereyString = qS => {
    let a = qS.slice(1).split('&')
    if (a == "") return {};
    const b = {};
    for (let i = 0; i < a.length; ++i)
    {
        const p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}