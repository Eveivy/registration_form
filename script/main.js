let formEl = document.getElementById("form_el")
let btnEl = document.getElementById("btn_el")
let input = document.querySelectorAll("input")
// console.log(formEl)

formEl.addEventListener("submit", function (ev) {
    ev.preventDefault()
    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
        if (input[i].value == '') {
            input[i].placeholder = "Please fill this field"
             input[i].style.border = "2px solid red"
        } else {
            console.log("Okay")
        }
    }

})