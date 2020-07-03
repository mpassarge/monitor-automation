const fs = require('fs');
const prod = process.env.PROD;

exports.getSource = function() {
    let sourceString = "";
    if(prod) {
        // Will run ddcutil getvcp 60
    } else {
        sourceString = "VCP code 0x60 (Input Source                  ): DisplayPort-1 (sl=0x0f)";
    }
    return sourceString;
}

exports.getSerialNumber = function() {
    let serialNumberString = "";
    if(prod) {
        // Will run ddcutil detect
    } else {
        serialNumberString = `Display 1
        I2C bus:             /dev/i2c-2
        EDID synopsis:
           Mfg id:           DEL
           Model:            DELL U2415
           Serial number:    CFV9N8A50FTS
           Manufacture year: 2018
           EDID version:     1.3
        VCP version:         2.1`;
    }
    return serialNumberString;
}