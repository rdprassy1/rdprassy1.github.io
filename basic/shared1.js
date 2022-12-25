function calculateTaxM1(val1, val2) {
    let val = val1 + val2 + 20;    
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function calculateTotalM1(val1, val2) {
    let val = val1 + val2;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function sendToMobile1(data) {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}

 // For Web

window.calculateTax1 = (val1, val2) => {
    return  val1 + val2 + 20;
}

window.calculateVals1 = (val1, val2) => {
    return val1 + val2;
}
