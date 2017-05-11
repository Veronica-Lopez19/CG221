var img;
var img2;
var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10
function preload() {
  img = loadImage("ninja.png");
  img2 = loadImage("shuriken.png");

}

function setup() {
  createCanvas(1000, 800);

}

function draw() {
  background('#a4b8d8');

  image(img,mouseX-50, mouseY-80, img.width/20, img.height/20);

  image(img2, x, y, img.width/40, img.height/45);

    x = x + xspeed;

  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
    }

}
