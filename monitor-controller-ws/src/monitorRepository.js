const monitorIdToUrlMap = {
    1: 'http://monitor-1',
    2: 'http://monitor-2'
}

exports.addMonitor = function(id, monitor) {
    throw new Error('Not supported!')
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

}