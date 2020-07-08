var cities = [];
var totalCities = 4;
var recordDistance;
var bestEver;

function setup() {
	createCanvas(400, 300);

	for (var i = 0; i < totalCities; i++) {
		var v = createVector(random(width), random(height));
		cities[i] = v;
	}

	var d = calcDistance(cities);
	recordDistance = d;
	bestEver = cities.slice();
}

function draw() {
	background(0);
	fill(255);
	for (var i = 0; i < cities.length; i++) {
		ellipse(cities[i].x, cities[i].y, 8, 8);
	}

	drawCitiesNetwork(cities, [255, 255, 255], 1);

	//Draw best path with pink color
	drawCitiesNetwork(bestEver, [255, 0, 255], 4);
	

	//shuffle cities
	var i = floor(random(cities.length));
	var j = floor(random(cities.length));
	swap(cities, i, j);
	var d = calcDistance(cities);
	if (d < recordDistance) {
		recordDistance = d;
		bestEver = cities.slice();
		console.log(recordDistance);
	}
}

function drawCitiesNetwork(cities, color, thickness) {
	stroke(color);
	strokeWeight(thickness);
	noFill();
	beginShape();
	for (var i = 0; i < cities.length; i++) {
		vertex(cities[i].x, cities[i].y);
	}
	endShape();
}

function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function calcDistance(points) {
	var sum = 0;
	for (var i = 0; i < points.length - 1; i++ ) {
		var p1 = points[i];
		var p2 = points[i + 1];
		var d = dist(p1.x, p1.y, p2.x, p2.y);
		sum += d;
	}

	return sum;
}