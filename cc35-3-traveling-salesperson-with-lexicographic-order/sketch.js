var cities = [];
var totalCities = 5;
var order = [];
var totalPermutations;
var count = 0;

var recordDistance;
var bestEver;

function setup() {
	createCanvas(400, 600);

	for (var i = 0; i < totalCities; i++) {
		var v = createVector(random(width), random(height/2));
		cities[i] = v;
		order[i] = i;
	}

	var d = calcDistance(cities, order);
	recordDistance = d;
	bestEver = order.slice();

	totalPermutations = factorial(totalCities);
}

function draw() {
	background(0);
	// frameRate(5);


	fill(255);
	for (var i = 0; i < totalCities; i++) {
		ellipse(cities[i].x, cities[i].y, 8, 8);
	}

	//Draw best path
	stroke(255, 0, 255);
	strokeWeight(4);
	noFill();
	beginShape();
	for (var i = 0; i < order.length; i++) {
		var n = bestEver[i];
		vertex(cities[n].x, cities[n].y);
	}
	endShape();

	//Draw path
	translate(0, height / 2);
	stroke(255);
	strokeWeight(1);
	noFill();
	beginShape();
	for (var i = 0; i < order.length; i++) {
		var n = order[i];
		vertex(cities[n].x, cities[n].y);
	}
	endShape();

	
	var d = calcDistance(cities, order);
	if (d < recordDistance) {
		recordDistance = d;
		bestEver = order.slice();
		console.log(recordDistance);
	}

	
	//Print ordering
	// var s = '';
	// for (var i = 0; i < order.length; i++) {
	// 	s += order[i];
	// }
	// text(s, 20, height / 2 - 50);
	
	textSize(32);
	fill(255);

	var percent = 100 * (count / totalPermutations);
	text(nf(percent, 0, 2) + "% completed", 20,  height / 2 - 50);

	nextOrder();
}

function drawCitiesNetwork(cities, color, thickness) {
	//TODO
}

function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function calcDistance(points, order) {
	var sum = 0;
	for (var i = 0; i < order.length - 1; i++) {
		var cityAIndex = order[i];
		var cityBIndex = order[i + 1];
		var cityA = points[cityAIndex];
		var cityB = points[cityBIndex];
		var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
		sum += d;
	}

	return sum;
}

function nextOrder() {
	count++;
	//ALGORITHM: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
	
	//STEP 1
	var largestI = -1;
	for (var i = 0; i < order.length; i++) {
		if (order[i] < order[i + 1]) {
			largestI = i;
		}
	}
	if (largestI == -1) {
		console.log("finished");
		noLoop();
	}
	// console.log("largestI: ", largestI);

	//STEP 2 of the algorithm
	var largestJ = -1;
	for (var j = 0; j < order.length; j++) {
		if (order[largestI] < order[j]) {
			largestJ = j;
		}
	}
	// console.log("largestJ: ", largestJ);

	//STEP 3
	swap(order, largestI, largestJ);

	//STEP 4: Reverse from largestI + 1 to the end
	var endArray = order.splice(largestI + 1);
	endArray.reverse();
	order = order.concat(endArray);
}

function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * factorial(n -1);
	}
}