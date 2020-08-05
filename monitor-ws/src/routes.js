const routes = require('express').Router();
const monitorControl = require('./monitor-control');

routes.get('/', (req, res) => {
    try {
        res.json(monitorControl.getInfo());
    } catch(err){
        res.status(500).json({ message: err.message });
    }
});


routes.patch('/', (req, res) => {

    if(req.body == undefined) {
        res.status(400).json({ message: 'No body' });
        return;
    }

    const configuration = req.body.configuration;
    
    if(configuration == undefined) {
        res.status(400).json({ message: 'No Configuration' });
        return;
    }

    try {
        if(configuration.source != null || undefined) {
            monitorControl.updateSource(configuration.source);
        }
    } catch(err) {
        
        res.status(500).json({ message: err.message });
        return;
    }

    res.json(monitorControl.getInfo());
});

module.exports = routes;