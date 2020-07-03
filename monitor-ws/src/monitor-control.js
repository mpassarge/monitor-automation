const ddc = require('./display-data-channel');

const monitor_id = Number(process.env.MONITOR_ID);
const sourceMap = {
    '0f': 'DisplayPort-1',
    '10': 'DisplayPort-2',
    '11': 'HDMI-1',
    '12': 'HDMI-2'
};

exports.getInfo = function() {
    const source = sourceMap[parseSource(ddc.getSource())];
    const serialNumber = parseSerialNumber(ddc.getSerialNumber());
    return {
        "id": monitor_id,
        "serialNumber": serialNumber,
        "configuration": {
            "source": source
        }
    };
};

function parseSource(source) {
    return source.match(/sl=0x([a-f0-9]{2})\)/)[1];
}

function parseSerialNumber(serialNumber) {
    return serialNumber.match(/Serial number:\ +([A-Z0-9]+)\n/)[1];
}