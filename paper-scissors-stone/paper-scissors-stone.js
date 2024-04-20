let computerChoice = "";
function getComputerchoice() {
    const random = Math.random() * 3;
    // console.log(random);
    if (0 <= random && random < 1) {
        computerChoice = "scissors";
    } else if (1 <= random && random <= 2) {
        computerChoice = "stone";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}


function getResult(userChoice, computerChoice) {
    let score;
    if (userChoice === computerChoice) {
        score = 0
    } else if (userChoice === 'stone' && computerChoice === 'scissors') {
        score = 1
    } else if (userChoice === 'paper' && computerChoice === 'stone') {
        score = 1
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        score = 1
    } else {
        score = -1
    }
    return score;
}

function showResult(score, userChoice, computerChoice) {
    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = `你輸了!\n你出了${userChoice}\n電腦出了${computerChoice}`
            break;
        case 0:
            result.innerText = `平手!\n你出了${userChoice}\n電腦出了${computerChoice}`
            break;
        case 1:
            result.innerText = `你贏了!\n你出了${userChoice}\n電腦出了${computerChoice}`
            break;
    }
}

function onclickPss(userChoice) {
    const computerChoice = getComputerchoice();
    const score = getResult(userChoice, computerChoice)
    showResult(score, userChoice, computerChoice)
}

function playGame() {
    let pssButtons = document.querySelectorAll('.pssButton');
    pssButtons.forEach(pssButton => {
        pssButton.onclick = () => onclickPss(pssButton.innerText); 
    });
}
playGame()

