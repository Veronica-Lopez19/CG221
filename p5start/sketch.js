var party = 60;
var r = 30;
var g = 100;
var b = 200;
function setup() {

  //changed background color to black

}
function draw() {
  //make my canvas
  createCanvas(windowWidth, windowHeight);

  fill(r, mouseY, b);
  ellipse(mouseX, mouseY, party, party);
  push()
  

}
