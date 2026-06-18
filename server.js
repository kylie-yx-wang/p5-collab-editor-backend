const WebSocket = require('ws');
const http = require('http');
const { setupWSConnection } = require('y-websocket/bin/utils.js');

// Create a basic HTTP server so we can check if it's alive in a browser
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Yjs WebSocket server is running perfectly.');
});

// Attach the WebSocket server to the HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
    setupWSConnection(conn, req);
});

const PORT = process.env.PORT || 1234;
server.listen(PORT, () => {
    console.log(`WebSocket Server running on port ${PORT}`);
});