let userScore = 0;
let computerScore = 0;
const user_img = document.getElementById("user-img");
const computer_img = document.getElementById("computer-img");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Papper"
    return "Scissors"
}

function wins(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "user".fontsize(3).sup();
    const smallComputerword = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + (smallUserword) + " beats " + convertToWord(computerChoice) + (smallComputerword) + ".You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList
            .remove('green-glow')
    }, 500)


}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "user".fontsize(3).sup();
    const smallComputerword = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + (smallUserword) + " loses " + convertToWord(computerChoice) + (smallComputerword) + ".You lost....!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList
            .remove('red-glow')
    }, 500)
}

function draw(userChoice, computerChoice) {
    const smallUserword = "user".fontsize(3).sup();
    const smallComputerword = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + (smallUserword) + " equals " + convertToWord(computerChoice) + (smallComputerword) + "IIt's a draw.";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList
            .remove('grey-glow')
    }, 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);

            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");

    });
    rock_div.addEventListener('mouseover', function() {
        hovered("r");

    });
    paper_div.addEventListener('click', function() {
        game("p");
    });
    paper_div.addEventListener('mouseover', function() {
        hovered("p");
    });
    scissors_div.addEventListener('click', function() {
        game("s");
    });
    scissors_div.addEventListener('mouseover', function() {
        hovered("s");
    });
}

function fillPreview(userOver) {
    imageUrl = convertToImage(userOver);
    img_tag = '<img width=30px height=30px src="' + imageUrl + '">';
    user_img.innerHTML = img_tag;
}

function convertToImage(userOver) {
    if (userOver === "r") return "avi/4.jpg";
    if (userOver === "p") return "avi/5.png";
    return "avi/3.png";
}

function hovered(userOver) {
    fillPreview(userOver);
}

main();