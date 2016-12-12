//reference from Daniel Shiffman from rainbw coding on youtube
// https://github.com/CodingRainbow/Rainbow-Code/blob/master/p5.js/6.3_p5.js_arrays_of_objects/sketch.js
// https://p5js.org/examples/hello-p5-interactivity-1.html
var cirlces = [];
var r,g, b;


function setup() {
  createCanvas(600, 400);
  //random colors

  for (var i = 0; i < 100; i++) {
    cirlces[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        //draw and color the cirlce
        strokeWeight(2);
        stroke(255);
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, random(50), random(50));
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }

}

function draw() {
  background(0);
  for (var i = 0; i < cirlces.length; i++) {
    cirlces[i].move();
    cirlces[i].display();
  }
}
