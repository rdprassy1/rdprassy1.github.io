function getTax(val1, val2) {
    let val = val1 + val2 + 20;    
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getToal(val1, val2) {
    let val = val1 + val2;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getBasicData(reqObj) {
    let reqObj1 = JSON.parse(reqObj);
    let val = reqObj.num1 + reqObj.num2;
    let data = {type: 'Response from External JS:', value: val};
    sendToMobile(data);
}

function sendToMobile(data) {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}

 // For Web

window.calculateTax = (val1, val2) => {
    return  val1 + val2 + 20;
}

window.calculateVals = (val1, val2) => {
    return val1 + val2;
}


window.getBasicData = (reqObj) => {
    console.log(typeof(reqObj));
    return reqObj.num1;
}
