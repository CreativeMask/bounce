var tall;
var short;

function setup() {
  createCanvas(1536,720);
  tall = createSprite(400, 200, 50, 80);
  tall.shapeColor = "green";
  short =  createSprite(400, 800, 80, 50);
  short.shapeColor = "yellow";
  tall.velocityY = 5;
  short.velocityY = -10;
}

function draw() {
  background("black");
  //short.x = World.mouseX;
  //short.y = World.mouseY;

  if(short.y - tall.y < tall.width/2 + short.width/2 && tall.y - short.y < tall.width/2 + short.width/2){
    tall.velocityY = tall.velocityY*(-1);
    short.velocityY = short.velocityY*(-1);
  }
    
    
  

  drawSprites();
  //short.y - tall.y < tall.width/2 + short.width/2 && tall.y - short.y < tall.width/2 + short.width/2
}