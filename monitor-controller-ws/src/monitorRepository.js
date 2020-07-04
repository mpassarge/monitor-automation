const monitorIdToUrlMap = {
    1: 'http://monitor-1',
    2: 'http://monitor-2'
}

exports.addMonitor = function(id, monitorUrl) {

    if(monitorIdToUrlMap[id]) {
        // TODO: Should be 409 error not 500
        throw new Error('Monitor already added')
    }

    // TODO: URL validation
    monitorIdToUrlMap[id] = monitorUrl

    return {
        "id": id,
        "monitorUrl": monitorUrl
    };
}

exports.getAllMonitors = function() {
    const monitorsList = [];

    for(key in monitorIdToUrlMap) {
        monitorsList.push({
            "id": key,
            "monitorUrl": monitorIdToUrlMap[key]
        });
    }
    return monitorsList;
}

exports.getMonitorById = function(id) {
    throw new Error('Not supported!')
}