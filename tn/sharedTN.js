
class Cart {
  constructor(num1, num2, region, enterprisestore) {
    this.num1 = num1;
    this.num2 = num2;
    this.region = region;
    this.enterprisestore = enterprisestore;
  }
}

function getToal1(reqObj) {

    let tempObj = reqObj;

    if (typeof tempObj !== 'object') {

        tempObj = JSON.parse(reqObj)

    }
    
    let cartobj = new Cart(tempObj.num1, tempObj.num2, tempObj.region, tempObj.enterprisestore);

    let val = Number(tempObj.num1) *40 + Number(tempObj.num2) * 60;
    
    if(Boolean(tempObj.enterprisestore)){
        val = val - 10;
    }

    val = val ? val : 'error in external JS';

    let data = {type: 'Response from External JS:', val: val};

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
