const ddc = require('./display-data-channel');

const sourceMap = {
    '0f': 'DisplayPort-1',
    '10': 'DisplayPort-2',
    '11': 'HDMI-1',
    '12': 'HDMI-2'
};

exports.getInfo = function() {
    const source = sourceMap[parseSource(ddc.getSource())];
    return {
        "id": 1,
        "serialNumber": "ABCD1234",
        "configuration": {
            "source": source
        }
    };
};

function parseSource(source) {
    return source.match(/.*\(sl=0x([a-f0-9]{2})\)/)[1];
}