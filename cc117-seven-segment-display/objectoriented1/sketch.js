let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;
let sevenSegment = new SevenSegment(20, 80, 100);

function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  background(220);
  sevenSegment.show(nums[index]);
  index = (index + 1) % nums.length;
}