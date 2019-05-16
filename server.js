const express = require('express');
const PostRouter = require('./posts/post-routes');
const server = express();


server.use(express.json());
server.use('/api/posts', PostRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Welcome to the Server</h2>
    <h3>We got fun and games</h3>
    
    `);
})

module.exports = server;