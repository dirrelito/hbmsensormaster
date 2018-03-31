const http = require('http');
const fs = require('fs')
const dbLib = require('./src/dbLib')
const routes = require('./src/routes')

const setupAndRunServer = () => {
    const server = http.createServer(routes);
    const port = process.env.PORT || 1337;
    server.listen(port);
    console.log("Server running at http://localhost:%d", port);
}

if(!fs.existsSync(dbLib.DB_NAME)) {
    dbLib.createDB(setupAndRunServer)
} else {
    setupAndRunServer()
}