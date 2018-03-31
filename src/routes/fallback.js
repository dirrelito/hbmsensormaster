module.exports = (request,response) => {
    response.writeHead(404,{"Content-type":"text/plain; charset=utf-8"})
    response.end("This is not the page you're looking for. Try the / endpoint!")
}