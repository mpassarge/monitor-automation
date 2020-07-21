const configurations = {};

exports.addConfiguration = function(name, monitorConfiguration, enabled){

    if(configurations[name]) {
        throw new Error("Configuration already added.");
    }

    const config = {
        name: name,
        enabled: enabled,
        configuration: monitorConfiguration
    }
    configurations[name] = config;
    return config;
}