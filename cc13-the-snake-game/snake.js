//constructor function
function Snake() {
	this.x = 0;
	this.y = 0;

	//direction
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++;
			return true;
		} else {
			return false;
		}
	}

	this.death = function() {
		//TODO Check if Edge was hit
		// if (this.x == width - scl || this.x == 0 || 
		// 	this.y == height - scl) {
		// 	console.log("death")
		// 	total = 0;
		// 	this.tail = []
		// }

		//Check if body was hit
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				total = 0;
				this.tail = [];
			}
		}
	}

	this.update = function() {
		//no food has been eaten
		if (this.total === this.tail.length) {
			//shift everything over
			for (var i = 0; i < this.tail.length - 1; i++) {
				this.tail[i] = this.tail[i + 1];
			}
		}
		this.tail[this.total - 1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		//https://p5js.org/reference/#/p5/constrain
		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	this.show = function() {
		fill(255);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}

	this.direction = function(x, y) {
		if (x != 0 && this.xspeed == -x || y != 0 && this.yspeed == -y)  {
			// console.log("Moving backwards")
			// console.log("xspeed:" + this.xspeed)
			// console.log("yspeed:" + this.yspeed)
			// console.log("x:" + x)
			// console.log("y:" + y)
			return;
		}
		this.xspeed = x;
		this.yspeed = y;
	}
}