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