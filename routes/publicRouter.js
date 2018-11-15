const express = require('express');
const bodyParser = require('body-parser');

const publicRouter = express.Router();

publicRouter.use(bodyParser.json());

publicRouter.route('/').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('This is the end.');
})

module.exports = publicRouter;