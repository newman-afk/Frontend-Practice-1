var li = document.getElementsByTagName('li')
var img = document.getElementsByTagName('img')
let last = 0;
for (let i = 0; i < li.length; i++) {

    li[i].onmouseover = function () {
        this.style.backgroundColor = 'pink'
        img[last].style.display = 'none'
        img[i].style.display = 'block'
        last = i
    }
    li[i].onmouseout = function () {
        this.style.backgroundColor = 'aliceblue'
    }
}