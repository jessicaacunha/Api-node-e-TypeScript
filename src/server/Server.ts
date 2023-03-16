import express from 'express';

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

export { server };