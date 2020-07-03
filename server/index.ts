
import * as express from 'express';
import * as path from 'path';

const server = express();
const port = 3000;

server.use(express.static(path.resolve(__dirname, '../dist')))
server.listen(port, () => {
    console.log(`Started listening at http://localhost:${port}`)
});