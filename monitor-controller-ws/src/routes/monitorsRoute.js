const axios = require('axios');
const router = require('express').Router();
const repository = require('../monitorRepository');

router.get('/', async (req, res, next) => {

    console.log('get request');

    const monitors = repository.getAllMonitors();
    axios.all(monitors.map(m => axios.get(m.monitorUrl + "/monitor")))
        .then(responseArray => {
            const monitorData = [];
            responseArray.map(response => {
                monitorData.push(response.data);
            });
            return res.json(monitorData);
        }).catch(err => {
            next(err);
        });

});

module.exports = router;