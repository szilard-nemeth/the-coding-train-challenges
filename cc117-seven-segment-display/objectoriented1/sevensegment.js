class SevenSegment {
  constructor(height, horizSegmentSize, vertSegmentSize) {
    //x,y,w,h
    var startX = 60;
    var startY = 20;
    this.a = [startX, startY, this.offset(horizSegmentSize), this.offset(height)];
    this.b = [startX + horizSegmentSize, startY + height, this.offset(height), this.offset(vertSegmentSize)]
    this.c = [startX + horizSegmentSize, startY + height*2 + vertSegmentSize, this.offset(height), this.offset(vertSegmentSize)]
    this.d = [startX, startY + height * 2 + vertSegmentSize*2, this.offset(horizSegmentSize), this.offset(height)];
    this.e = [startX - height, startY + height * 2 + vertSegmentSize, this.offset(height), this.offset(vertSegmentSize)]
    this.f = [startX - height, startY + height, this.offset(height), this.offset(vertSegmentSize)]
    this.g = [startX, startY + height + vertSegmentSize, this.offset(horizSegmentSize), this.offset(height)];
  }
  
  offset(v) {
    console.log(v);
    return v - 2;
  }

  getColor(val, shift) {
    let r = 255;
    let g = 0;
    let b = 0;
    let alpha = 255 * ((val >> shift) & 1);
    return color(r,g,b,alpha);
  }
  
  show(val) {
    stroke(0);
    noFill();

    fill(this.getColor(val, 6));
    rect(...this.a);
    
    fill(this.getColor(val, 5));
    rect(...this.b);
    
    fill(this.getColor(val, 4));
    rect(...this.c);
    
    fill(this.getColor(val, 3));
    rect(...this.d);
    
    fill(this.getColor(val, 2));
    rect(...this.e);
    
    fill(this.getColor(val, 1));
    rect(...this.f);
    
    fill(this.getColor(val, 0));
    rect(...this.g);
  }
}