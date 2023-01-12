let img = document.getElementsByTagName('img')
let big = document.getElementById('big')

for (let i = 0; i < img.length; i++) {
    img[i].onmouseover = function () {
        big.src = img[i].src
    }
}