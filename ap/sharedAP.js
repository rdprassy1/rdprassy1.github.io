function getTax(val1, val2) {
    let val = val1 + val2 + 20;    
    let data = {type: 'Response from External JS:', val: val};
    sendToMobile(data);
}

function getToal2(val1) {
  let val = val1;
  let price = 0;
  if (typeof val !== 'object') {
    val = JSON.parse(val1);
  }
  price = parseInt(val.num1) * 100 + parseInt(val.num2) * 200;
  val = price ? price : 'error in external JS'

  let data = {
    type: 'Response from External JS:',
    val: price
  };
  sendToMobile(data);
}

function getOToal1(reqObj) {

    let tempObj = reqObj;

    if (typeof tempObj !== 'object') {

        tempObj = JSON.parse(reqObj)

    }

    let val = Number(tempObj.num1) + Number(tempObj.num2) + 50;

    val = val ? val : 'error in external JS';

    let data = {type: 'Response from External JS:', val};

    sendToMobile(data);

}

function getToal(val1, val2) {
    let val = val1 + val2;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getBasicData(val1) {
    let data = {type: 'Response from External JS:', val: 25};
    sendToMobile(data);
}

function getBasicData1(reqObj) {
//     let reqObj1 = JSON.parse(reqObj);
//     let val = reqObj1.num1 + reqObj1.num2;
    let data = 25;
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
    console.log(reqObj);
    console.log(reqObj.num1);
    console.log(reqObj.num2);
    console.log(typeof(reqObj));
    let reqObj1 = JSON.parse(reqObj);
    let val = reqObj.num1 + reqObj.num2;
    let data = {type: 'Response from External JS:', value: val};
    return reqObj.value;
}
