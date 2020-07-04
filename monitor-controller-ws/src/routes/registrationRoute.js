const router = require('express').Router();
const repository = require('../monitorRepository');

router.get('/', (req, res) => {
    res.json(repository.getAllMonitors());
});

module.exports = router;