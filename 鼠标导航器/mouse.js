var box = document.getElementsByClassName('box')

window.onmousemove = function (e) {
    let event = e || window.event

    box[0].style.left = event.clientX - box[0].clientWidth / 2 + 'px'
    box[0].style.top = event.clientY - box[0].clientHeight / 2 + 'px'
}