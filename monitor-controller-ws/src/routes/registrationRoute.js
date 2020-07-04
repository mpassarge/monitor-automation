const router = require('express').Router();
const repository = require('../monitorRepository');

router.get('/', (req, res) => {
    res.json(repository.getAllMonitors());
});

router.post('/', (req, res) => {

    // TODO: Validation of req
    // TODO: Send location of resource
    res.status(201).json(repository.addMonitor(req.body.id, req.body.monitorUrl));
});

module.exports = router;