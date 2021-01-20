
var movingRect,fixedRect






function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(300, 100, 100, 60);
  fixedRect.shapeColor=("red");

  movingRect= createSprite(300,400,50,100);
  movingRect.shapeColor=("blue");

  fixedRect.velocityY=5;
  movingRect.velocityY=-5;

}

function draw() {
  background("yellow");  

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.widht/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
  
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
    }
  
    if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
      &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    
        fixedRect.velocityY=fixedRect.velocityY*(-1);
        movingRect.velocityY=movingRect.velocityY*(-1);
      }
    
  drawSprites();

}