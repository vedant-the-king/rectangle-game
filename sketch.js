var fixedrect , movingrect;

var answer;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,400,80,30);
  movingrect.shapeColor = "green";
 // movingrect.velocityY = -3;
  movingrect.velocityX = 3;

}

function draw() {
  background(0); 
 

 answer = isTouching(movingrect,fixedrect);
  if(answer){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
    bounceOff(movingrect,fixedrect)

  drawSprites();
}
