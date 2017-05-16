var img;
var img2;
var img3;
var img4;
var x = 180;
var y = 180;
var xspeed = 15;
var yspeed = 14;
function preload() {
  img = loadImage("ninja.png");
  img2 = loadImage("shuriken.png");

}

function setup() {
  createCanvas(1000, 800);

}

function draw() {
  background('#a4b8d8');

  image(img,mouseX-50, mouseY-80, img.width/10, img.height/10);
	
  image(img2, x, y, img.width/20, img.height/25);

    x = x + xspeed;

  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

    if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
    }
   if(x>mouseX-50 && x<mouseX+50 && y>mouseY-50 && y<mouseY+50){
      alert('game over');
    }



}
