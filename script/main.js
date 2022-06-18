let formEl = document.getElementById("form_el")
let btnEl = document.getElementById("btn_el")
let input = document.querySelectorAll("input")
let errorText = document.createElement("span")
let errorIcon = document.querySelectorAll("img")
let error = document.querySelectorAll(".err_msg")
console.log(error)

formEl.addEventListener("submit", function (ev) {
    ev.preventDefault()
    for (let i = 0; i < input.length; i++) {

        for (let icon = 0; icon < errorIcon.length; icon++) {
          
            for(let msg = 0; msg < error.length; msg++){

                if (input[i].value == '') {

                    input[i].style.border = "1px solid red";

                    input[2].style.color = "red"

                    input[i].placeholder = ""

                    input[2].value = "email.example/com"

                    input[2].style.border = "1px solid red";
                    
                    error[msg].classList.remove("hide") 

                    errorIcon[icon].classList.remove("hide")
    
    
                } else {
                    input[i].style.border = "1px solid green";

                    input[i].style.color = "black"
                    
                    error[msg].classList.add("hide") 
    
                    errorIcon[icon].classList.add("hide")
    
                }
            }

        }


    }

})