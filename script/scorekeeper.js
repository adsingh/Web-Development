var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");

var player1Button = document.querySelectorAll("button")[0];
var player2Button = document.querySelectorAll("button")[1];
var resetButton = document.querySelectorAll("button")[2];
var numInput = document.querySelector("input");
var winningScoreBoard = document.querySelector("#winning_score");

var playerOneScore = 0;
var playerTwoScore = 0;
var winningScore = 5; //Number(document.querySelector("input").value);
var winner;

function disableButtons(value){
	player1Button.disabled = value;
	player2Button.disabled = value;
}

player1Button.addEventListener("click", function(){
	playerOneScore += 1;
	p1display.textContent =  playerOneScore;
	if(playerOneScore >= winningScore){
		disableButtons(true);
		p1display.classList.add("winner");
		winner = p1display;
	}
});

player2Button.addEventListener("click", function(){

	playerTwoScore += 1;
	p2display.textContent =  playerTwoScore;
	if(playerTwoScore >= winningScore){
		disableButtons(true);
		p2display.classList.add("winner");
		winner = p2display;
	}
});

function reset(){
	p1display.textContent = "0";
	p2display.textContent = "0";
	playerOneScore = 0;
	playerTwoScore = 0;
	disableButtons(false);
	winner.classList.remove("winner");
}

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function(){

	winningScoreBoard.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});