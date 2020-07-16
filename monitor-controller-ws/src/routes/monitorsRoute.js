const axios = require('axios');
const router = require('express').Router();
const repository = require('../monitorRepository');

//TODO: Possibly remove...
router.get('/', async (req, res, next) => {
    const monitors = repository.getAllMonitors();
    axios.all(monitors.map(m => axios.get(m.monitorUrl + "/monitor")))
        .then(responseArray => {
            const monitorData = [];
            responseArray.map(response => {
                monitorData.push(response.data);
            });
            return res.json(monitorData);
        }).catch(err => {
            return next(err);
        });

});

router.get('/:id', (req, res, next) => {
    try {
        const monitor = repository.getMonitorById(req.params.id);
        axios.get(monitor.monitorUrl + "/monitor").then(response => {
            return res.json(response);
        }).catch(err => {
            return next(err);
        });
    } catch(err) {
        return next(err);
    }
});

module.exports = router;