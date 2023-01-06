
class Cart {
  constructor(num1, num2, region, enterprisestore) {
    this.num1 = num1;
    this.num2 = num2;
    this.region = region;
    this.enterprisestore = enterprisestore;
  }
}


function getTax(val1, val2) {
    let val = val1 + val2 + 10;    
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getToal1(reqObj) {

    let tempObj = reqObj;

    if (typeof tempObj !== 'object') {

        tempObj = JSON.parse(reqObj)

    }
    
    let cartobj = new Cart(tempObj.num1, tempObj.num2, tempObj.region, tempObj.enterprisestore);

    let val = Number(tempObj.num1) + Number(tempObj.num2) + 60;
    
    if(Boolean(tempObj.enterprisestore)){
        val = val - 1;
    }

    val = val ? val : 'error in external JS';

    let data = {type: 'Response from External JS:', val: val};

    sendToMobile(data);

}

function getToal(val1, val2) {
    let val = val1 + val2 + 100;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getBasicData(reqObj) {
    console.log(reqObj);
    let val = reqObj.region;
    let data = {type: 'Response from External JS:', val};
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
