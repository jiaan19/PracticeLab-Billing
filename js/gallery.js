/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {

    if (document.getElementById('same').checked) {

        var shippingname = document.getElementById('shippingName').value;
        var shippingzip = document.getElementById('shippingZip').value;

        document.getElementById('billingName').value = shippingname;
        document.getElementById('billingZip').value = shippingzip;

    }

    else {

        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";

    }

}

function checkData() {

    var shippingname = document.getElementById('shippingName').value;
    var shippingzip = document.getElementById('shippingZip').value;
    var billingname = document.getElementById('billingName').value;
    var billingzip = document.getElementById('billingZip').value;

    if (shippingname == billingname && shippingzip == billingzip) {

        alert('The data are the same');
    }

    else {

        alert('The data are not the same');
    }
}
    



