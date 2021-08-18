var bg, snow1;
var boy;
var ground;
var snows=[];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function preload(){
  bg = loadImage("snow1.jpg");
  boy = loadImage("sprite1.png");
}

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
  
  snow1 = new Snow(200,100);

  b = createSprite(250, 550, 50, 50);
  b.addImage(boy);
  b.scale = 0.75
  
  fill("black");
  ground = createSprite(400,780, 800, 40);
}

function draw() {
  background(bg);  

  Engine.update(engine);

  b.setCollider("rectangle",-10,0, 200, 300)
  b.debug = false;

  if(keyDown("space")){
    b.velocityY = -4;
  }

  b.velocityY = b.velocityY + 0.8;

  b.collide(ground);
  drawSprites();
  if(frameCount%5 === 0){
    snows.push(new Snow(random(10, 750),  10)); 
   } 
   for (var k = 0; k < snows.length; k++) {
    snows[k].display();
  } 
  snow1.display();
}