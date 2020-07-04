const ddc = require('./display-data-channel');

const monitor_id = Number(process.env.MONITOR_ID);

// TODO: Implement way to retrieve the hexToSource map on startup
const hexToSourceMap = {
    '0f': 'DisplayPort-1',
    '10': 'DisplayPort-2',
    '11': 'HDMI-1',
    '12': 'HDMI-2'
};
const sourceToHexMap = {}

for(let key in hexToSourceMap) {
    sourceToHexMap[hexToSourceMap[key]] = key;
}

exports.getInfo = function() {
    const source = hexToSourceMap[parseSource(ddc.getSource())];
    const serialNumber = parseSerialNumber(ddc.getSerialNumber());
    return {
        "id": monitor_id,
        "serialNumber": serialNumber,
        "configuration": {
            "source": source
        }
    };
};

exports.updateSource = function(newSource) {
    // TODO: Implement check to see if newSource is same as current source

    if(sourceToHexMap[newSource] == undefined) {
        throw new Error('Unknown Source');
    }

    ddc.setSource(sourceToHexMap[newSource]);
}

function parseSource(source) {
    return source.match(/sl=0x([a-f0-9]{2})\)/)[1];
}

function parseSerialNumber(serialNumber) {
    return serialNumber.match(/Serial number:\ +([A-Z0-9]+)\n/)[1];
}