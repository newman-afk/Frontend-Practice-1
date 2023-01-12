document.getElementsByTagName('button')[1].onclick = function () {
    console.log(1);
    let res = window.confirm('您确认要支付吗？');
    if (res) {
        location.href = './success.html';

    }
}