const express = require('express');
const morgan = require('morgan');
const noteRoutes = require('./notes/noteRoutes.js');
const server = express();

server.use(express.json());
server.use(morgan);
server.use('notes', noteRoutes);

module.exports = server;
