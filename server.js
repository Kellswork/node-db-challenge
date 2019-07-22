const express = require('express');
const server = express();
const projects = require('./projectTracker/projects/projectsRoutes');

server.use(express.json());
server.use('/api/projects', projects);

module.exports = server;