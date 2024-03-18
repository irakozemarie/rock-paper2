const buttons = document.querySelectorAll("button");
   
 const resultE1 = document.getElementById("result");
 const playScoreE1 = document.getElementById("user-score");
 
 const computerScoreE1 = document.getElementById("computer-score");

 let playScore =0;
 let computerScore =0;

 buttons.forEach((button) =>{
 button.addEventListener("click", () => {
//  console.log("user choice!" , button.id,
//  "computer choice!", computerPlay());
   const result = playRound(button.id, computerPlay());
   resultE1.textContent = result;
   

 });



 });

 function computerPlay(){
    const choices = ["rock", "paper" ,"scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
 }

 function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
   return "It's a tie!";
    } else if(
        (playerSelection === "rock" &&
        computerSelection === "scissors") ||
        (playerSelection === "paper" &&
        computerSelection === "rock") ||
        (playerSelection === "scissors" &&
        computerSelection === "paper") 
    ){  playScore++;
        playScoreE1.textContent = playScore;
        return "you win! " + playerSelection + " beats" + computerSelection;
    }else{
        computerScore++;
        computerScoreE1.textContent = computerScore;
        return "you lose! " + computerSelection + "beats " + playerSelection;
    }




 }