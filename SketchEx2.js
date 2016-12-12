//red,blue, green
var x = [];
var r, b, b;

function setup() {
  createCanvas(500, 500);
  //for random colors
  r = random(255);
  g = random(255);
  b = random(255);

  //what the circle will be filled with
  fill(r, b, g);
  for (var i = 0; i < 100; i++) {
    x[i] = random(500, 500);
  }
}

function draw(){
  background(0);
  //draw circles
  for (var i = 0; i < x.lenght; i++) {
    x[i] += i* 0.4;
    ellipse (x[i], y, 100, 100);
  }
}
