let formEl = document.getElementById("form_el")
let btnEl = document.getElementById("btn_el")
let input = document.querySelectorAll("input")
let errorText = document.createElement("span")
let errorIcon = document.querySelectorAll("img")

formEl.addEventListener("submit", function (ev) {
    ev.preventDefault()
    for (let i = 0; i < input.length; i++) {

        errorText.textContent = "Field is empty"
        errorText.style.color = "red"
        
        for(let icon = 0; icon < errorIcon.length; icon++){
           errorIcon[icon].classList.remove("hide")
        }
        
        if (input[i].value == '') {
            input[i].placeholder = "Please fill this field"
            input[i].style.border = "1px solid red"
            input[i].append(errorText)
        } else {
            console.log("Okay")
        }
    }

})