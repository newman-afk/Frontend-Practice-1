var choices = document.getElementsByTagName('input')

function choice(num) {
    for (let i = 0; i < choices.length; i++) {
        if (num == 0) {
            choices[i].checked = true
        } else if (num == 1) {
            choices[i].checked = false
        } else {
            choices[i].checked = !choices[i].checked
        }
    }
}