$('#img').mouseover(function () {
    $('#box').css('display', 'block');
    $('#enlarge').css('display', 'block');

});
$('#img').mouseout(function () {
    $('#box').css('display', 'none');
    $('#enlarge').css('display', 'none');
});
$("#img").mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    e.clientX = e.clientX <= 38.4 ? 38.4 : e.clientX >= 345.6 ? 345.6 : e.clientX
    e.clientY = e.clientY <= 21.6 ? 21.6 : e.clientY >= 194.4 ? 194.4 : e.clientY
    $("#box").css('left', e.clientX - 38.4 + 'px')
    $("#box").css('top', e.clientY - 21.6 + "px")

    $("#enlarge img").css('left', -5 * (e.clientX - 38.4) + 'px')
    $("#enlarge img").css('top', -5 * (e.clientY - 21.6) + "px")

});