//rock, paper and scissors game
const play = ["Rock","Paper","Scissors"];
let player;
let computer;

//variables of player selection
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const startGame = document.getElementById("startGame");

//when click rock
rock.addEventListener("click", rockDraw);
function rockDraw(){
  player = rock.value;
  computer = play[Math.round(Math.random()*(2-0))];
  console.log("Player select " + player + " Computer select " + computer);
}

//when click paper
paper.addEventListener("click", paperDraw);
function paperDraw(){
  player = paper.value;
  computer = play[Math.round(Math.random()*(2-0))];
  console.log("Player select " + player + " Computer select " + computer);
}

//when click scissors
scissors.addEventListener("click", scissorsDraw);
function scissorsDraw(){
  player = scissors.value;
  computer = play[Math.round(Math.random()*(2-0))];
  console.log("Player select " + player + " Computer select " + computer);
}

//to get results
startGame.addEventListener("click", playGame);

//score board functionality
let youWin = 0;
let computerWin = 0;



//function to restart player and computer values
function restartGame(){
  player = undefined;
  computer = undefined;
}

//functions tu easily use in every draw player or computer win to update the score board
function printYouWin(){
  let yourScore = document.getElementById("yourScore")
    youWin++;
    yourScore.innerHTML = youWin;
    restartGame();
}
function printComputerWin(){
  let computerScore = document.getElementById("computerScore")
    computerWin++;
    computerScore.innerHTML = computerWin;
    restartGame();
}


//function to play the game
function playGame(){
  if (player==undefined){
    window.alert("Select Rock, Paper or Scissors.")
  } else if (player==rock.value && computer==paper.value){
    window.alert("Computer Win.");
    printComputerWin();
  } else if (player==paper.value && computer==scissors.value){
    window.alert("Computer Win.");
    printComputerWin();
  } else if (player==scissors.value && computer==rock.value){
    window.alert("Computer Win.");
    printComputerWin();
  } else if (computer==rock.value && player==paper.value){
    window.alert("You Win. Congratulations!");
    printYouWin();
  } else if (computer==paper.value && player==scissors.value){
    window.alert("You Win. Congratulations!");
    printYouWin();
  } else if (computer==scissors.value && player==rock.value){
    window.alert("You Win. Congratulations!");
    printYouWin();
  } else if (player==computer){
    window.alert("Is a Draw! Play Again.")
  }
}



