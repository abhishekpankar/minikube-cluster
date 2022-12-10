const http = require('http');
const express = require('express');
const router = require('./routes');
const app = express();
const server = http.createServer(app);

app.use(router);

server.listen(3001, '0.0.0.0', () => {
    console.log(`Task Service listening on ${server.address().address}:${server.address().port}`);
});
