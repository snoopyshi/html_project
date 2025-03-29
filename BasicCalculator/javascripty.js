const buttonEl = document.querySelectorAll("button")

const inputEl = document.getElementById("result")

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", function () {
        const buttonValue = buttonEl[i].textContent
        if (buttonValue === 'C') {
            clearResult()
        } else if (buttonValue === '=') {
           calculateResult() 
        } else {
            appendValue(buttonValue)
        }
    })
}


function clearResult() {
    document.getElementById("result").value = '' //clears the result on the calculator when you click the clear button on the men
}

function calculateResult() {
    inputEl.value = eval(inputEl.value)
}

function appendValue(value) {
    inputEl.value += value //appends the value of the button clicked to the result on the calculator when you click the number buttons on the calculator
}

