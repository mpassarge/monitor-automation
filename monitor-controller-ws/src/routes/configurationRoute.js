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

router.get('/:name', (req, res) => {
    const configuration = repository.getConfigurationByName(req.params.name);
    if(configuration) {
        return res.json(repository.getConfigurationByName(req.params.name));
    } else {
        return res.status(404).send();
    }
});

module.exports = router;