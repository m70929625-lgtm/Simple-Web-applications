

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

const displayMessage = document.getElementById("displayMessage");


  
function result(playerChoice) {
        const gameWeapons = ["Rock", "Paper", "Scissor"];
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = gameWeapons[randomNumber];   
 

       if (playerChoice === computerChoice){
         displayMessage.textContent = `Computer chose ${computerChoice}. It's a tie!`;
         displayMessage.className ="tie-message";
       }

       else if((playerChoice === "Rock" && computerChoice === "Scissor") ||
               (playerChoice === "Paper" && computerChoice === "Rock")||
               (playerChoice === "Scissor" && computerChoice === "Paper")) {
                 displayMessage.textContent = `Computer chose ${computerChoice}. You win!`;
                 displayMessage.className = "win-message";
                }

        else{
            displayMessage.textContent = `Computer chose ${computerChoice}. You lose`;
            displayMessage.className = "lose-message";
        }        

}

rockBtn.addEventListener('click',() => result("Rock"));

paperBtn.addEventListener('click', () =>result("Paper"));

scissorBtn.addEventListener('click', () => result("Scissor"));