const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

// Создаем сервер
const server = jsonServer.create();

// Подключаем middleware CORS
server.use(cors());

// Используем стандартные middleware json-server
server.use(jsonServer.defaults());

// Роутер для db.json
const router = jsonServer.router(path.join(__dirname, 'db.json'));
server.use(router);

// Запускаем сервер
server.listen(5555, () => {
    console.log('JSON Server is running on port 5555');
});