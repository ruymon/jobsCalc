const { response } = require("express");
const express = require('express');
const server = express();
const routes = require('./routes');

//enable EJS as Template Engine
server.set('view engine', 'ejs')

//enable static Files
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(3000, () => console.log('Server Started!'))