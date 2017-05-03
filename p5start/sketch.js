var cloud, circle;

function setup() {
  createCanvas(windowWidth, windowHeight);  
 
  cloud = createSprite(600, 200);

  circle = createSprite(600, 200);
 
  
  
}

function draw() {
  background('#8e9aad');  
  
  circle.position.x = mouseX;
  circle.position.y = mouseY;

  circle.displace(cloud);
    
  //if debug is set to true bounding boxes, centers and depths are visualized
  circle.debug = mouseIsPressed;
  cloud.debug = mouseIsPressed;
  
  drawSprites();
}
