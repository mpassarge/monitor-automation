const monitorIdToUrlMap = {
    1: 'http://monitor-1',
    2: 'http://monitor-2'
}

// TODO: Have Monitor Class to return not create json on each return

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
    if(!monitorIdToUrlMap[id]) {
        // TODO: Should be 404 error not 500
        throw new Error('Monitor not found');
    }

    return {
        "id": id,
        "monitorUrl": monitorIdToUrlMap[id]
    }
}