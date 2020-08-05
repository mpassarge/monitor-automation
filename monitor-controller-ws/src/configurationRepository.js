const axios = require('axios');
const monitorRepository = require('./monitorRepository');

const monitorConfigurations = {
    "enabled": "",
    "configurations": []
};

exports.addConfiguration = function (name, monitorConfiguration) {

    if (monitorConfigurations.configurations.some(e => e['name'] === name)) {
        throw new Error("Configuration already added.");
    }

    const config = {
        name: name,
        monitors: monitorConfiguration
    }
    monitorConfigurations.configurations.push(config);
};

exports.getAllConfigurations = function () {
    return monitorConfigurations;
};

exports.getConfigurationByName = function (name) {
    return monitorConfigurations.configurations.find(e => e.name === name);
};

exports.updateEnabledConfiguration = function (name) {

    const monitorConfiguration = monitorConfigurations.configurations.find(e => e.name === name);

    if (!monitorConfiguration) {
        // TODO: Should be 404
        throw new Error(`Monitor Configuration '${name}' not found`);
    }

    if (monitorConfigurations.enabled === name) {
        throw new Error(`Monitor Configuration ${name} already enabled`);
    }

    const monitorArray = monitorConfiguration.monitors;
    const requests = monitorArray.map(m => {
        url = monitorRepository.getMonitorById(m.monitorId).monitorUrl;
        return axios.patch(`${url}/monitor`, {
            configuration: {
                source: m.source
            }
        });
    });
    axios.all(requests).then(axios.spread((...responses) => {
        monitorConfigurations.enabled = name;
        return;
    })).catch(errors => {
        console.error(errors);
        throw new Error("Error Updating Source");
    });
};