// 搜索
function search() {

}

function input_onblur() {
    document.getElementById('show').style.display = 'none'
}

var array = ['你妈妈的', '你爸爸的', '你爷爷的', '你奶奶的']
function input_onkeyup() {
    var str = ''
    var input = document.getElementById('input')
    var show = document.getElementById('show')
    // show.style.display = 'block'
    if (input.value) {
        array.forEach(element => {
            if (element.indexOf(input.value) != -1) {
                str += '<p>' + element + '</p>'
            }
        })
        console.log(str)
        show.innerHTML = str
    }
}























































































































