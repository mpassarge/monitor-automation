const routes = require('express').Router();
const getInfo = require('./monitor-control').getInfo;

routes.get('/', (req, res) => {
    res.json(getInfo());
});

module.exports = routes;