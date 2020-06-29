function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function(n) {
  //equal values are not added to the tree
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);  
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;  
    } else {
      this.right.addNode(n);  
    }
  }

}

Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right != null) {
    this.right.visit();
  }
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}