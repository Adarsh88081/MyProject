let userScore = 0;
let computerscore = 0; // fixed spelling to match properly

const userScoreParagraph = document.querySelector("#user-score");
const computerScoreParagraph = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScoreParagraph.innerText = userScore;
        console.log("Congrats! YOU WON");
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++; // fixed here
        computerScoreParagraph.innerText = computerscore; // fixed here
        console.log("You Lose!");
        msg.innerText = `You Lose ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3) // math.random generates random number between 0 to 1 here we have array of 0 based index so we will multiply it by number of elements our array has and then take it floor value so here we are multiplying it by 3 it will give us 0 to 2
    // rock, paper, scissors
    return options[randIdx];
}

const drawGame = () => {
    console.log("GAME DRAW");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "black"; // added black color for draw
}

const playGame = (userchoice) => {
    console.log("userchoice =", userchoice)
    // Generate computer choice;
    const compChoice = genCompChoice();
    console.log("computerchoice =", compChoice)

    if (userchoice === compChoice) {
        // draw game
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            // scissors, paper
            userwin = compChoice === "paper" ? false : true; // agar computer paper dega to statement false ho jaega warna true rahega
        }
        else if (userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        console.log(userchoice)
        playGame(userchoice);
    });
});
