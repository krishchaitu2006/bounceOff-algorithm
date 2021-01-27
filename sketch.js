var still;
var move;



function setup() {
  createCanvas(800,400);

  still = createSprite(200,200,50,50);

  still.shapeColor = "yellow"

  move = createSprite(600,200,50,50);

  move.shapeColor = "red"



}

function draw() {

  background(0);  


  if(keyDown("left")) {

    move.velocityX = -6;


  }




  if(move.x - still.x < move.width/2 + still.width/2) {

     move.velocityX = move.velocityX - 2*move.velocityX


    }





  drawSprites();
}