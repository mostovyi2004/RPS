function getComputerChoice() {

    let computerChoice = 0;
    runNum = Math.random();

    if (runNum > 0.666666666){
        computerChoice = "камінь";
    } else if (runNum > 0.333333333) {
        computerChoice = "ножиці";
    } else {
        computerChoice = "папір";
    }

    return computerChoice;
}

function getHumanChoice(){

    let humanChoice = "";
    let numHumanChoice = 0;

    numHumanChoice = prompt("Будь ласка, впиши число 1, 2 чи 3, щоб обрати елемент камінь ножиці чи папір відповідно.");

    if (numHumanChoice == 1){
        humanChoice = "камінь";
    } else if (numHumanChoice == 2) {
        humanChoice = "ножиці";
    } else if (numHumanChoice == 3) {
        humanChoice = "папір";
    }

    return humanChoice;
}

function playRound(){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    if (humanChoice == computerChoice){
        console.log("Нічия");
    }

    if (humanChoice == "камінь" && computerChoice == "ножиці"){
        console.log(`Ти переміг ${humanChoice} перемагає ${computerChoice}!`)
        humanScore++;
    } else if (humanChoice == "папір" && computerChoice == "камінь"){
        console.log(`Ти переміг ${humanChoice} перемагає ${computerChoice}!`)
        humanScore++;
    } else if (humanChoice == "ножиці" && computerChoice == "папір"){
        console.log(`Ти переміг ${humanChoice} перемагає ${computerChoice}!`)
        humanScore++;
    }

    if (computerChoice == "камінь" && humanChoice == "ножиці"){
        console.log(`Комп'ютер переміг ${humanChoice} перемагає ${computerChoice}`)
        computerScore++;
    } else if (computerChoice == "папір" && humanChoice == "камінь"){
        console.log(`Комп'ютер переміг ${humanChoice} перемагає ${computerChoice}`)
        computerScore++;
    } else if (computerChoice == "ножиці" && humanChoice == "папір"){
        console.log(`Комп'ютер переміг ${humanChoice} перемагає ${computerChoice}`)
        computerScore++;
    }
}

let runer = 1;
let humanScore = 0;
let computerScore = 0;
console.log("Привіт, це гра камінь, ножиці, папір!")

do{
    for(let i = 0; i < 5; i++){
        playRound()
        console.log(humanScore)
        console.log(computerScore)
    }
    if(humanScore == computerScore){
        console.log("Загальна нічія!!")
        humanScore = 0;
        computerScore = 0;
    }
    if(humanScore > computerScore){
        console.log("Виграла людина!!")
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore > humanScore){
        console.log("Виграв Комп'ютер!!")
        humanScore = 0;
        computerScore = 0;
    }
    if (prompt("Бажаєте почати заново? (так/ні)").toLowerCase() == "ні"){
        runer = 0;
        console.log("До побачення!")
    }
} while(runer);