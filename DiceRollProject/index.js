
const buttonE1 = document.getElementById("roll-dice")

const diceE1 = document.getElementById("dice")

const rollHistoryE1 = document.getElementById("roll-history") //history sectio

let history = []

function getDiceImage(diceIndex) {
   switch(diceIndex) {
        case 1:
            return "&#9856"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;" 
        case 4:
            return "&#9859;"
        case 5: 
            return "&#9860;"
        case 6:
            return "&#9861;"
   } 
}

function rollDice() {
    const diceResult = Math.floor((Math.random() * 6)) + 1
    const diceFace = getDiceImage(diceResult)
    diceE1.innerHTML = diceFace
    history.push(diceResult)
    updateRollHistory()
}

function updateRollHistory() {
    rollHistoryE1.innerHTML = ""
    for (let i = 0; i < history.length; i++) {
        const item = document.createElement("li")
        item.innerHTML = `Roll ${i + 1}: <span>${getDiceImage(history[i])}</span>`
        rollHistoryE1.appendChild(item)
    }
}

buttonE1.addEventListener("click", function(){

    console.log("button clicked")
    diceE1.classList.add("roll-animation")

    setTimeout(()=>{
        diceE1.classList.remove("roll-animation")
        rollDice()
    }, 1000)

})