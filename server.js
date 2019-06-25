const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const knex = require('knex');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('short'));

server.get('/', (req, res) => {
	res.status(201).send('Rooma Server');
});

module.exports = server;
