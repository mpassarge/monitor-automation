const router = require('express').Router();
const repository = require('../configurationRepository');

router.post('/', (req, res, next) => {
    //TODO: Validate req.body against configuration
    const name = req.body.name;
    const configuration = req.body.configuration;
    const enabled = false;
    try {
        const addedConfiguration = repository.addConfiguration(name, configuration, enabled);
        //TODO: Send location of newly created configuration
        return res.json(addedConfiguration);
    } catch (err){
        return next(err);
    }
});

router.get('/', (req, res) => {
    res.json(repository.getAllConfigurations());
});

module.exports = router;