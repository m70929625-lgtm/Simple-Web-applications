

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");





function result(playerChoice) {
        const gameWeapons = ["Rock", "Paper", "Scissor"];
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = gameWeapons[randomNumber];   
 

       if (playerChoice === computerChoice){
         alert("Tie");
       }

       else if((playerChoice === "Rock" && computerChoice === "Scissor") ||
               (playerChoice === "Paper" && computerChoice === "Rock")||
               (playerChoice === "Scissor" && computerChoice === "Paper")) {
                 alert("You Win");
                }

        else{
            alert("You lose");
        }        

}

rockBtn.addEventListener('click',() => result("Rock"));

paperBtn.addEventListener('click', () =>result("Paper"));

scissorBtn.addEventListener('click', () => result("Scissor"));