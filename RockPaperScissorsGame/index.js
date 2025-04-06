const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById('result');

const userSocreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');


let yourScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('user choice ', button.id);
        let result = playRound(button.id, compterPlay());
        console.log(result)
        resultEl.textContent = result;
        userSocreEl.textContent = yourScore;
        computerScoreEl.textContent = computerScore;
    });
})

function compterPlay() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!' 
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' 
        || playerSelection === 'paper' && computerSelection === 'rock' 
        || playerSelection === 'scissors' && computerSelection === 'paper') {
            yourScore++
            return 'You win!' // player wins
    } else {
        computerScore++
        return 'You lose!' // computer wins
    }
}