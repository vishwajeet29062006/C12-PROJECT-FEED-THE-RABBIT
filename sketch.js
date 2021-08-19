var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg
function preload(){
  gardenImg = loadImage("garden.png");
   rabbitImg = loadImage("rabbit.png");
   appleimg=loadImage("apple.png")
 }

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function createapples(){
if(frameCount%80===0){
apple=createSprite(200,-10,10,10)
apple.velocityY=2
apple.addImage("apple",appleimg)
apple.scale=0.07
apple.x=Math.round(random(120,350))
  }
}

function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createapples()
  drawSprites();
}