var num = 0
var intervel = null

move()
function move() {
    intervel = setInterval(() => {
        num++
        if (num > 4) {
            num = 1
            $('#navs').css('left', 0)
        }
        $('#navs').animate({ left: -num * 600 }, 500)

        $('#bots li').eq(num == 4 ? 0 : num).addClass('active').siblings().removeClass('active')
    }, 2000)
}
$('.warp').mouseover(function () {
    clearInterval(intervel)
});

$('.warp').mouseout(function () {
    move()
})
