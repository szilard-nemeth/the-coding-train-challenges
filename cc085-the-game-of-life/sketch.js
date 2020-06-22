//Cellular automaton: System of cells exist in a grid
//Game of life system: 2D
//State of grid called Generation
//Generation 0, Generation 1...
//Cell is alive or dead
//State of a cell is defined by state of its neighbours
//Most cells has 8 neighbours

//Rules: How we move from 1 generation to another, resembles evolution, 
//that's why it's called Game of Life

//Idea 1: Cell that is surrounded by neighbours that are not alive cannot be alive
//Idea 2: Cell that is surrounded by neighbours that are alive can come to life or stay alive
//Idea 3: Cell that is surrounded by too many neighbours that are alive cannot stay alive due to overpopulation

//RULES COPIED FROM WIKIPEDIA

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


//--->
// These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

//RULES SIMPLIFIED
//0 -> 3 live -> 1
//1 -> <2 live OR >3 live -> 0

//1. Data structure to store state: 2D array
//2. Render the grid
//3. Calculate state
//	While checking each cell, we cannot change its value as other cell could depend on this state
//	Create 2*2D arrays

function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
	createCanvas(600, 400);
	cols = width / resolution;
	rows = height / resolution;
	
	grid = make2DArray(cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = floor(random(2));
		}
	}
}

function draw() {
	//white background
	background(255);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let x = i * resolution;
			let y = j * resolution;

			if (grid[i][j] == 1) {
				//set color to black
				fill(0);
				stroke(0)
				//stroke(255);
			}
			rect(x, y, resolution - 1, resolution - 1);
			//reset to white
			fill(255)
		}
	}

	let next = make2DArray(cols, rows);

	//Compute next generation based on grid
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let state = grid[i][j];
		
			//Count live neighbours
			let sum = 0;
			let neighbours = countNeighbours(grid, i, j);
			
			if (state == 0 && neighbours == 3) {
				next[i][j] = 1;
			} else if (state == 1 && (neighbours < 2 || neighbours > 3)) {
				next[i][j] = 0;
			} else {
				next[i][j] = state;
			}
		}
	}

	grid = next;
}

function countNeighbours(grid, x, y) {
	let sum = 0;
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];
		}
	}

	//don't count myself as neighbour
	sum -= grid[x][y];
	return sum;
}