var numberOfSquares = 6; 

colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];

var colorDisplay = document.querySelector(".colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var bg1 = document.querySelector(".bg-1");
var playAgain = document.querySelector(".playAgain");
var easy = document.querySelector(".easyBtn");
var hard = document.querySelector(".hardBtn");

playAgain.addEventListener("click",function() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

easy.addEventListener("click",function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function () {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }    
});


for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            bg1.style.backgroundColor = pickedColor; 
            message.textContent = "Correct!!";
            changeColors(clickedColor);
            playAgain.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!!!";
        }
    });
}

function  changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() *  colors.length);
    return random;
}

function  generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256 );
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
