
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg);
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x = sea.width/2;
  }






    drawSprites();

 
}
