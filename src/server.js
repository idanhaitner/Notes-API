const app = require('./app');
const http = require('http');

const { connectToMongo } = require('./services/mongo');

const PORT = process.env.PORT || 3000
const server = http.createServer(app);

async function startServer() {
    await connectToMongo();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();