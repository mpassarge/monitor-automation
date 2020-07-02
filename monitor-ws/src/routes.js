const routes = require('express').Router();

routes.get('/', (req, res) => {
    console.log(req);
    res.json({
        "hello": "world"
    });
});

module.exports = routes;