//Make an item that would go with something appearing a lot
//no bubbles.....maybe school of fish?
//Make the sky and moon in photoshop and then make stars appearing
//To make an array just set this as theresulting variable []
var x = [];

function setup() {
  createCanvas(600, 500);
  noStroke();
  fill(255, 200);
  for (var i = 0; i < 3000; i++) {
    x[i] = random(-1000, 200);
  }
}

function draw() {
  background (0);
  for (var i = 0; i < x.length; i++) {
    x[i] += 0.5;
    var y = i * 0.4;
    arc(x[i], y, 12, 12, 0.52, 5.76)
  }
}
