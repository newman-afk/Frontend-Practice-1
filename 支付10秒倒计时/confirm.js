document.getElementsByTagName('button')[1].onclick = function () {
    console.log(1);
    let res = window.confirm('��ȷ��Ҫ֧����');
    if (res) {
        location.href = './success.html';

    }
}