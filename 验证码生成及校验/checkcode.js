var checkcode_length = 6;
var totalnumofletters = 26;
var lowercasestart = 97;
var uppercasestart = 65;

window.onload = getcode();
function getcode() {
    var checkcode = '';
    for (let i = 0; i < checkcode_length; i++) {
        if (Math.random() >= 0.5) {
            checkcode += Math.round(Math.random() * 9);
        }
        else {
            if (Math.random() >= 0.5) {
                checkcode += String.fromCharCode(Math.round(Math.random() * (totalnumofletters - 1)) + lowercasestart)
            }
            else {
                checkcode += String.fromCharCode(Math.round(Math.random() * (totalnumofletters - 1)) + uppercasestart)
            }

        }
    }
    console.log(checkcode);
    document.getElementById('checkcode').innerText = checkcode;
}
// document.getElementById('linkbt').onclick = function () {
//     getcode();
// }
function confirm() {
    if (document.getElementById('checkcode').innerText != document.getElementById('inputcode').value) {
        alert('验证码输入有误')
        document.getElementById('inputcode').value = '';
        getcode();
    }
    else {
        console.log('输入正确')
    }
}