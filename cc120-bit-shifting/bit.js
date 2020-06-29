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
    fill(this.state ? 255 : 0); //white is on, black is off
    ellipse(this.x, this.y, this.diameter);
  }
}