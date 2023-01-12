var lists = document.getElementsByTagName('td')

for (let i = 0; i < lists.length; i++) {
    lists[i].onclick = function () {
        if (this.getAttribute('class')) {
            this.removeAttribute('class')
            this.innerText = ''
        } else {
            this.setAttribute('class', 'clicked')
            this.innerText = '座位已选'
        }
    }
}