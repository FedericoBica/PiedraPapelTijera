let rounds = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let eleccion;
    let x = (Math.random() * 10);
    if (x >= 0 && x <= 3){
        eleccion = "piedra";
    } else if (x > 3 && x <= 6) {
        eleccion = "papel";
    } else if (x >6 && x <= 9) {
        eleccion = "tijera";
    }
    return eleccion;
}

function getHumanChoice (){
    let choice; 
    let resp = prompt("Elige PIEDRA PAPEL O TIJERA").trim().toLowerCase();
     
    if (resp === "piedra") {
        choice = "piedra";
    } else if (resp === "papel"){
        choice = "papel";
    } else if (resp === "tijera"){
        choice = "tijera";
    } else {
        alert("Entrada invalida");
        return getHumanChoice();
    }
    return choice;
}
let humanSel = getHumanChoice();
let computerSel = getComputerChoice();

function playRound (computerSel, humanSel ) {
    if (((computerSel === "piedra") && (humanSel === "tijera")) ||
        (computerSel === "papel") && (humanSel === "piedra") ||
        (computerSel === "tijera") && (humanSel === "papel")) {
            computerScore++;
            alert(`Compu gana. ${computerSel} le gana a ${humanSel}`);
        } else if (((humanSel === "piedra") && (computerSel === "tijera")) ||
               (humanSel === "papel") && (computerSel === "piedra") ||
                (humanSel === "tijera") && (computerSel === "papel")){
                    humanScore++;
                    alert(`Jugador gana. ${humanSel} le gana a ${computerSel}`);
    } else {
        alert(`Empate. Ambos eligieron ${humanSel}`);
    }
}

function playGame (){
    for (rounds = 0; rounds < 5; rounds++){
        let computerSel = getComputerChoice();
        let humanSel = getHumanChoice();

        playRound (computerSel, humanSel);    
    }
    if (humanScore > computerScore){
        alert(`Jugador gana la partida ${humanScore} a ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`computadora gana la partida ${computerScore} a ${humanScore}`);
    } else  {
        alert("Empate total");
    }
}

playGame();