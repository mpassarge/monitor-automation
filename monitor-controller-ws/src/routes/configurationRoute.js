const router = require('express').Router();
const repository = require('../configurationRepository');

router.get('/', (req, res) => {
    res.json(repository.getAllConfigurations());
});

router.get('/:name', (req, res) => {
    const configuration = repository.getConfigurationByName(req.params.name);
    if(configuration) {
        return res.json(configuration);
    } else {
        return res.status(404).send();
    }
});

router.post('/', (req, res, next) => {
    //TODO: Validate req.body against configuration
    const name = req.body.name;
    const configuration = req.body.configuration;
    try {
        const addedConfiguration = repository.addConfiguration(name, configuration);
        //TODO: Send location of newly created configuration
        return res.status(201).send();
    } catch (err){
        return next(err);
    }
});

module.exports = router;