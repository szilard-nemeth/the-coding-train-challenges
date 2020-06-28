let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];

let startX = 60;
let startY = 20;
let segmentWidth = 20; 
let segmentHSize = 80;
let segmentVSize = 100;
let segmentDistance = segmentVSize + segmentWidth + 15;
let timeUnitDistance = 20;

let segments = [
//hours
new SevenSegment(startX, startY, segmentWidth, segmentHSize, segmentVSize),
new SevenSegment(startX + segmentDistance, startY, segmentWidth, segmentHSize, segmentVSize),

//minutes
new SevenSegment(startX + 2 * segmentDistance + timeUnitDistance, startY, segmentWidth, segmentHSize, segmentVSize),
new SevenSegment(startX + 3 * segmentDistance + timeUnitDistance, startY, segmentWidth, segmentHSize, segmentVSize),

//seconds
new SevenSegment(startX + 4 * segmentDistance + timeUnitDistance, startY, segmentWidth, segmentHSize, segmentVSize),
new SevenSegment(startX + 5 * segmentDistance + timeUnitDistance, startY, segmentWidth, segmentHSize, segmentVSize),
]

function setup() {
  createCanvas(1600, 400);
  frameRate(3);
}

function draw() {
  background(220);
  let d = new Date();
  
  let data = [ d.getHours(), d.getMinutes(), d.getSeconds() ]
  
  let data2 = new Array();
  for (i = 0; i < data.length; i++) {
	data2.push(Math.floor(data[i] / 10));
	data2.push(data[i] % 10);
  }

  console.log(data2)
  for (i = 0; i < data2.length; i++) {
  	segments[i].show(nums[data2[i]])
  }
}