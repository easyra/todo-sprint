const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const noteRoutes = require('./notes/noteRoutes.js');
const server = express();
server.use(cors());
server.use(express.json());

//server.use(morgan('default'));
server.use('/notes', noteRoutes);

module.exports = server;
