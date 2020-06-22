let num = "10101001";

let byte = [];
let decimalP;

function mousePressed() {
  for (let i = 0; i < byte.length; i++) {
    byte[i].toggle(mouseX, mouseY);
  }
}

function setup() {
	createCanvas(400, 100);
    binaryToDecimal(num);
    decimalP = createDiv('');
  
    let w = width / 8;
    for (let i = 0; i < 8; i++) {
      let bit = new Bit(w/2 + i * w, 50, w-4);
      byte[i] = bit;
      byte[i].setState(num.charAt(i));
    }
}

function draw() {
	background(220);
  
    num = '';
    for (let i = 0; i < 8; i++) {
      byte[i].show();
      num += byte[i].state ? '1' : '0';
    }
  
  decimalP.html(binaryToDecimal(num));
}

function binaryToDecimal(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    let bit = val.charAt(val.length - i - 1);
    sum += parseInt(bit) * pow(2, i);
  }
  return sum;
}