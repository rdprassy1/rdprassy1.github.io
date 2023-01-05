function calculateTaxM(val1, val2) {
    let val = val1 + val2 + 2;    
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function calculateTotalM(val1, val2) {
    let val = val1 + val2+5;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function sendToMobile(data) {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}

 // For Web

window.calculateTax = (val1, val2) => {
    return  val1 + val2 + 2;
}

window.calculateVals = (val1, val2) => {
    return val1 + val2 + 5;
}