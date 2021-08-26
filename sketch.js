var garden,rabbit;
var gardenImg,rabbitImg;
var leaf
var leafImage
var apple
var appleImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

var raselect_spritesnd =  Math.round(random(1,2));

if(frameCount % 80 == 0){
  if (select_sprites == 1){
    createApple();
  }
  else {
    createLeave();
  }
}
console.log(rand)


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  function createApple(){
    apple = createSprite(random(50,350),40,10,10)
    apple.addImage(appleImage);
    apple.scale=0.5
    apple.velocityY=2
  }

  function createLeave(){
    leaves = createSprite(random(50,350),40,10,10)
    leaves.addImage(appleImage);
    leaves.scale=0.5
    leaves.velocityY=2
  }
}