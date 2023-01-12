function submit() {
    var res = document.getElementById('res')
    var input = document.getElementById('input')

    let reg = /杀|近平/g

    res.innerText = input.value.replace(reg, '*')
}