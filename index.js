const server = require('./server');

server.listen(5001, () => {
    console.log("\nServer running at http://localhost:5001 \n");
});