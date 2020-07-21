const configurations = [];

exports.addConfiguration = function(name, monitorConfiguration, enabled){

    if(configurations.some(e => e['name']===name)) {
        throw new Error("Configuration already added.");
    }

    const config = {
        name: name,
        enabled: enabled,
        configuration: monitorConfiguration
    }
    configurations.push(config);
    return config;
};

exports.getAllConfigurations = function() {
    return configurations;
};

exports.getConfigurationByName = function(name) {
    return configurations.find(e => e.name === name);
};