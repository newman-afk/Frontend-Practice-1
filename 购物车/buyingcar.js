
$('.subtract').click(function (e) {
    e.preventDefault();
    $(this).next().text(parseInt($(this).next().text()) <= 0 ? 0 : parseInt($(this).next().text()) - 1)
    $(this).parent().next().text(parseInt($(this).next().text()) * parseInt($(this).parent().prev().text()))
    getSum()
});
$('.add').click(function (e) {
    e.preventDefault();
    $(this).prev().text(parseInt($(this).prev().text()) + 1)
    $(this).parent().next().text(parseInt($(this).prev().text()) * parseInt($(this).parent().prev().text()))
    getSum()
});

$('.allChecked').click(function (e) {
    e.preventDefault();
    $('.checkTheProduct').prop('checked', true);
    getSum()
});
$('.checkTheProduct').click(function (e) {
    // e.preventDefault();
    getSum()
});
function getSum() {
    var sum = 0
    for (let i = 0; i < $('.totalPrice').length; i++) {
        sum += $('.goods').eq(i).find('.checkTheProduct').prop('checked') ? parseInt($('.totalPrice').eq(i).text()) : 0
    }
    $('.sum').text(sum);
}
getSum()