var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //colors[2];
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	squares.forEach(function(square,i){
		if(colors[i]){
			square.style.backgroundColor = colors[i];
		}
		else{
			square.style.display = "none";
		}
	});
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	squares.forEach(function(square,i){
		
		square.style.display = "block";
		square.style.backgroundColor = colors[i];

	});
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
});

colordisplay.textContent = pickedColor;
squares.forEach(function(square, i){
	square.style.backgroundColor = colors[i];
	square.addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(pickedColor === clickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = "Try again!";
		}
	});
});

resetButton.addEventListener("click", function(){

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	squares.forEach(function(square, i){
		square.style.backgroundColor = colors[i];
	});
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
});

function changeColors(color){

	squares.forEach(function(square){
		square.style.backgroundColor = color;
	});
	h1.style.backgroundColor = color;

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numColors){
	var colors = [];
	for(var i = 0 ; i < numColors; i++){
		colors.push(randomColor());
	}

	return colors;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256	);
	var g = Math.floor(Math.random() * 256	);
	var b = Math.floor(Math.random() * 256	);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
				