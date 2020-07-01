var tree;

function setup() {

tree = new Tree();
	createCanvas(600, 400);
	background(51);
	for (var i = 0; i < 30; i++) {
		tree.addValue(floor(random(0, 100)));
	}
	console.log(tree);
	tree.traverse();
}