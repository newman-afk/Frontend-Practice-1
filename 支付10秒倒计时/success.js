window.onload = function () {
    let timer = 10;
    setInterval(() => {
        timer--;
        document.getElementById('jumpto').innerText = timer;
        if (timer == 0) {
            location.href = 'http://baidu.com';
        }
    }, 1000)
    document.getElementsByTagName('button')[0].onclick = function () {
        location.href = 'http://baidu.com';
    }
}