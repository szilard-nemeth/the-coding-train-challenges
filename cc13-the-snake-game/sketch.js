var snake;

//scale
var scl = 20;
var food;
let scoreElem;

function setup() {
	scoreElem = createDiv('Score = 0');
    scoreElem.position(20, 20);
    scoreElem.id = 'score';
    scoreElem.style('color', 'white');

	createCanvas(600, 600);
	snake = new Snake();
	frameRate(10);
	pickLocation();
}

function pickLocation() {
	var cols = floor(width / scl);
	var rows = floor(height / scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);

	if (snake.eat(food)) {
		pickLocation();
	}
	snake.death();
	snake.update();
	snake.show();
	scoreElem.html('Score = ' + (snake.score));

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.direction(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.direction(0, 1);
	} else if (keyCode === LEFT_ARROW) {
		snake.direction(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		snake.direction(1, 0);
	}
}

function gameOver() {
	console.log("Game over called")
	noLoop();
	scoreElem.html('Game over! Your score was : ' + snake.score);
}