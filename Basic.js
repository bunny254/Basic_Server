const http= require ("http");

const hostname="127.0.0.1";
const port=8080

//creating a server
const server=http.createServer(function(req,res){
    // Setting the response header HTTP header with HTTP status and Context type

    res.writeHead(200,{'Context-Type':'text/plain'});

    //Send the response body "Hello Kimani"
    res.end('Hello Kimani! \n');
} );

// Prints a long once server starts listening

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
})