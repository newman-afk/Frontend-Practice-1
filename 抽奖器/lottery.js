let timer = 5000
var start = false
let lis = $('li')
console.log(lis)
var num = 0
$('button').click(function () {
    if (!start) {
        let interval = setInterval(() => {
            timer -= 100
            lis[num].style.backgroundColor = 'antiquewhite'
            num = Math.round(Math.random() * (lis.length - 1))
            console.log(lis[num])
            lis[num].style.backgroundColor = 'red'
            if (!timer) {
                clearInterval(interval)
                timer = 5000
            }
        }, 100)
    }
});