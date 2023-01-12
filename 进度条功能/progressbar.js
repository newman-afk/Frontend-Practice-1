var son = document.getElementById('son')
var num = document.getElementsByTagName('span')
var isNotInstall = true

function install() {
    if (isNotInstall) {
        isNotInstall = false
        var timer = 0
        let interval = setInterval(() => {
            timer += 10

            son.style.width = timer + 'px'
            let rate = Math.ceil(timer / 400 * 100)
            num[0].innerText = rate + '%'
            if (rate == 100) {
                clearInterval(interval)
            }
        }, 100)
    }

}