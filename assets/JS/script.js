// Wait for the DOM to finish loading before runing the game
// get button elements and add event listeners to them
document.addEventListener

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName(`button`);
    for (let button of buttons) {
        button.addEventListener(`click`, function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition")
})

/** 
 * The main game "loop" called when the scrip first landed
 * and after the user's answer has been proceeded
 */

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}. Aborting!`;
    }
}


/**
 * Checks the answer against the first element in 
 * the returned calculeCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById(`answer-box`).value)
    let calulatedAnswer = calculateCorrectAnswer();
    let isCorrrect = userAnswer === calulatedAnswer[0]

    if (isCorrrect) {
        alert(`Hey! the answer ${userAnswer} is correct!`)
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calulatedAnswer[0]}!`)
    }
    runGame(calulatedAnswer[1])
}

/**
 * Gets operands(The numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns corret answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText)
    let operand2 = parseInt(document.getElementById('operand2').innerText)
    let operator = document.getElementById('operator').innerText

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting !`
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}