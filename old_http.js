const http = require('http');
const url = require('url');

var server = http.createServer();
server.on('request', (req, res)=>{
    console.log("server created");
    if (req.method = 'POST'){
        if (req.url == '/')
        res.end('Greeting')
        else if (req.url == '/tr')
        res.end('Good buy')
    }
    else if (req.method == 'GET'){
    var newurl = req.url;
    var parsed = url.parse(req.url, true);
    console.log(parsed);
   if (parsed.pathname == '/test' && !parsed.query.message)
   res.write('<h1>Hello, Anton!</h1><br><h2> Welcome to fairy world!<h2>')
   else 
   if (parsed.pathname == '/test' && parsed.query.message)
   res.end(parsed.query.message)
    else 
    res.write('<h1>Hello, Ann!</h1><br><h2> Welcome to fairy world!<h2>')
    res.end()
}
})

server.listen('8080');


server.on('listening', ()=>{
    console.log('server listen on port 8080')
})