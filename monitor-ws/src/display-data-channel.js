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