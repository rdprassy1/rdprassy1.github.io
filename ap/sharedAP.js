class Cart {
  constructor(num1, num2, region, primemember) {
    this.num1 = num1;
    this.num2 = num2;
    this.region = region;
    this.primemember = primemember;
  }
}


function getToal1(reqObj) {

    let tempObj = reqObj;

    if (typeof tempObj !== 'object') {

        tempObj = JSON.parse(reqObj)

    }
    
    let cartobj = new Cart(tempObj.num1, tempObj.num2, tempObj.region, tempObj.primemember);
    
    let val = Number(cartobj.num1) + Number(cartobj.num2) + 50 ;

    if(Boolean(tempObj.primemember)){
        val = val - 2;
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

