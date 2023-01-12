let xml = new XMLHttpRequest()
xml.open('get', 'nav.json', true)
xml.send()
xml.onreadystatechange = function () {

    if (xml.status == 200 && xml.readyState == 4) {
        let datas = JSON.parse(xml.responseText).data

        let li1 = ''
        datas.forEach((first) => {
            let li2 = ''
            first.content.forEach((second) => {
                let li3 = ''
                second.content.forEach((third) => {
                    li3 += `<li class = "li3">
                    <a href = "##">${third}</a>
                    </li>`
                })
                li2 += `<li class = "li2">
                    <a href = "##">${second.title}</a>
                    <ul class = "ul3">
                    ${li3}
                    </ul>
                    </li>`
            })
            li1 += `<li class = "li1">
                    <a href = "##">${first.title}</a>
                    <ul class = "ul2">
                    ${li2}
                    </ul>
                    </li>`
        });
        document.getElementsByClassName('ul1')[0].innerHTML = li1
    }
    var one = document.getElementsByClassName('li1')
    var ul2 = document.getElementsByClassName('ul2')
    var two = document.getElementsByClassName('li2')
    var ul3 = document.getElementsByClassName('ul3')
    show(one, ul2)
    show(two, ul3)
}
function show(lis, uls) {
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            uls[i].style.display = 'block'
        }
        lis[i].onmouseout = function () {
            uls[i].style.display = 'none'
        }
    }
}