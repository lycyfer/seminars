const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');


const server = jsonServer.create();


server.use(cors());


server.use(jsonServer.defaults());


const router = jsonServer.router(path.join(__dirname, 'db.json'));
server.use(router);


server.listen(5555, () => {
    console.log('JSON Server is running on port 5555');
});