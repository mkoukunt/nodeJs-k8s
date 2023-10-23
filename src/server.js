const http=require('http');
const server=http.createServer((req,res) =>{
    console.log('Request made');
    res.setHeader('Content-Type','text/plain');
    res.write('Hello');
    res.end();
});
server.listen(3000,() =>{
    
    console.log('Listening for requests');
})