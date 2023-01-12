var block = document.getElementsByClassName('block')

var speed = 50
var move = false
var timer = null
var num = 0
function startmove() {
    if (!move) {
        move = true
        timer = setInterval(() => {
            num += speed
            console.log(num)
            block[0].style.left = num + 'px'
            if (num >= document.body.offsetWidth - block[0].offsetWidth || num <= 0) {
                speed = -speed
            }
        }, 100)
    }

}
function stopmove() {
    clearInterval(timer)
    move = false
}