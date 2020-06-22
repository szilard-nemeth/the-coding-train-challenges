class Bit {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.diameter = d;
    this.state = 0;
  }
  
  setState(state) {
    this.state = parseInt(state);
  }
  
  toggle(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.diameter / 2) {
      this.state = 1 - this.state;
    }
  }
  
  show() {
    stroke(255); //outline white
    fill(255 - 255 * this.state); //white is off, black is on
    ellipse(this.x, this.y, this.diameter);
  }
}