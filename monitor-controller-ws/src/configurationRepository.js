const axios = require('axios');

const monitorConfigurations = {
    "enabled": "",
    "configurations": []
};

exports.addConfiguration = function(name, monitorConfiguration){

    if(monitorConfigurations.configurations.some(e => e['name']===name)) {
        throw new Error("Configuration already added.");
    }

    const config = {
        name: name,
        monitors: monitorConfiguration
    }
    monitorConfigurations.configurations.push(config);
};

exports.getAllConfigurations = function() {
    return monitorConfigurations;
};

exports.getConfigurationByName = function(name) {
    return monitorConfigurations.configurations.find(e => e.name === name);
};

exports.updateEnabledConfiguration = function(name) {

    const monitorConfiguration = monitorConfigurations.configurations.find(e => e.name === name);

    if(!monitorConfiguration) {
        // TODO: Should be 404
        throw new Error(`Monitor Configuration '${name}' not found`);
    }
    
    if(monitorConfigurations.enabled === name) {
        throw new Error(`Monitor Configuration ${name} already enabled`);
    }

    // TODO: Update each individual monitor-ws in matching configuration
    // on successful update for each update enabled to be name
    const monitorArray = monitorConfiguration.monitors;
    // - for each monitor go from monitorId to url
    // - send patch to each endpoint with source
    // - if all successful set monitorConfigurations.enable to name
    // -    otherwise throw Error();
    // - return
    monitorConfigurations.enabled = name;
};