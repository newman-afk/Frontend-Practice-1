var butn = document.getElementsByTagName('button')
var stusname = document.getElementsByName('stusName')
var age = document.getElementsByName('age')
var gender = document.getElementsByName('gender')
var phone = document.getElementsByName('phone')
var tbody = document.getElementsByTagName('tbody')


var lists = []
butn[0].onclick = function () {
    var obj = { name: stusname[0].value, age: age[0].value, gender: gender[0].value, phone: phone[0].value }
    lists.push(obj)
    console.log(lists)

    var tr = ''
    lists.forEach((item, index) => {
        tr += "<tr class='child'>" +
            "<td>" + item.name + "</td>" +
            "<td>" + item.age + "</td>" +
            "<td>" + item.gender + "</td>" +
            "<td>" + item.phone + "</td>" +
            "<td onclick='del(" + index + ")'>删除</td>" +
            "</td>"
    })
    tbody[0].innerHTML = tr
}

function del(index) {
    lists.splice(index, 1)
    var child = document.getElementsByClassName('child')[index]
    tbody[0].removeChild(child)

    var tr = ''
    lists.forEach((item, index) => {
        tr += "<tr class='child'>" +
            "<td>" + item.name + "</td>" +
            "<td>" + item.age + "</td>" +
            "<td>" + item.gender + "</td>" +
            "<td>" + item.phone + "</td>" +
            "<td onclick='del(" + index + ")'>删除</td>" +
            "</td>"
    })
    tbody[0].innerHTML = tr
}