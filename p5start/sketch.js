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
  if(mouseIsPressed){
    background('#ff9999');
  } else {
    background('#9999ff');
  }

  fill(r, mouseY, b);
  ellipse(mouseX, mouseY, party, party);
  rect(200, 200, party*2, party*3);
  line(mouseX, mouseY, mouseX + 100, mouseY + 100);
}
