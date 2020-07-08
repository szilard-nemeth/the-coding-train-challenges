var vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function setup() {
	createCanvas(400, 300);
}

function draw() {
	background(0);
	console.log(vals);

	//ALGORITHM: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
	
	//STEP 1
	var largestI = -1;
	for (var i = 0; i < vals.length; i++) {
		if (vals[i] < vals[i + 1]) {
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
	for (var j = 0; j < vals.length; j++) {
		if (vals[largestI] < vals[j]) {
			largestJ = j;
		}
	}
	// console.log("largestJ: ", largestJ);

	//STEP 3
	swap(vals, largestI, largestJ);

	//STEP 4: Reverse from largestI + 1 to the end
	var endArray = vals.splice(largestI + 1);
	endArray.reverse();
	vals = vals.concat(endArray);


	//VISUALIZE
	textSize(64);
	var s = '';
	for (var i = 0; i < vals.length; i++) {
		s += vals[i];
	}
	fill(255);
	text(s, 20, height / 2);

}


function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}