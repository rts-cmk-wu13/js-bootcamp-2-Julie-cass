
let buttons = document.querySelectorAll("#buttons button")

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        buttons.forEach(function (button) {
            button.style.backgroundColor = "#eee"
        })
        button.style.backgroundColor = "#7f7"
    })


})