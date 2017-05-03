var party = 60;
var r = 30;
var g = 100;
var b = 200;
var shape;

function setup() {
createCanvas(800, 600);
shape = new Jitter();
}
function draw() {
  shape.move();
  shape.display();
  fill(r, mouseY, b);
  ellipse(mouseX, mouseY, party, party);
  rec(60,60,60,60)
  ellipse.displace(rec)
} 
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    rec(this.x, this.y, 10, 10);
  }
};
