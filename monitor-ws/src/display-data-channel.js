const { exec } = require('child_process');

const prod = process.env.PROD;

exports.getSource = function() {
    let sourceString = "";
    if(prod) {
        exec('ddcutil getvcp 60', (err, stdout, stderr) => {
            if(err) {
                throw new Error('Error retrieving Source');
            } else {
                sourceString = stdout;
            }
        });
    } else {
        sourceString = "VCP code 0x60 (Input Source                  ): DisplayPort-1 (sl=0x0f)";
    }
    return sourceString;
}

exports.getSerialNumber = function() {
    let detectString = "";
    if(prod) {
        exec('ddcutil detect', (err, stdout, stderr) => {
            if(err){
                throw new Error('Error receiving seriel number');
            } else {
                detectString = stdout;
            }
        });
    } else {
        detectString = `Display 1
        I2C bus:             /dev/i2c-2
        EDID synopsis:
           Mfg id:           DEL
           Model:            DELL U2415
           Serial number:    CFV9N8A50FTS
           Manufacture year: 2018
           EDID version:     1.3
        VCP version:         2.1`;
    }
    return detectString;
}

exports.setSource = function(sourceHexValue) {
    if(prod) {
        exec(`ddcutil setvcp 60 ${sourceHexValue}`, (err, stdout, stderr) => {
            if(err) {
                throw new Error('Error setting source');
            }
        });
    } else {
        //do nothing
    }
}