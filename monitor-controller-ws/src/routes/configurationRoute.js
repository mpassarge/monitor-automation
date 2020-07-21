const router = require('express').Router();
const repository = require('../configurationRepository');

router.post('/', (req, res, next) => {
    //TODO: Validate req.body against configuration
    const name = req.body.name;
    const configuration = req.body.configuration;
    const enabled = false;
    try {
        const addedConfiguration = repository.addConfiguration(name, configuration, enabled);
        return res.json(addedConfiguration);
    } catch (err){
        return next(err);
    }
});

module.exports = router;