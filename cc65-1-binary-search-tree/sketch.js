var tree;

function setup() {
	noCanvas();
  tree = new Tree();

  for (var i = 0; i < 1000; i++) {
  	tree.addValue(floor(random(0, 100)));
  }
  console.log(tree);
  tree.traverse();
}