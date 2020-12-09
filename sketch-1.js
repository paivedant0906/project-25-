const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Ball;
var dustbin1,dustbin2,dustbin3;
var dustbini

function preload()
{
  dustbini=loadImage("dustbin.jpg");
}

function setup() {
  createCanvas(1800, 700);
      rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  Engine.run(engine);
  
  ground= new Ground(400,670,1900,10);

  Ball= new Paperball(200,500,70,70);

  
  dustbin1= new Dustbin(1100,660,200,18);
	dustbin2= new Dustbin(1000,580,18,150)
	dustbin3= new Dustbin(1200,580,18,150);

}

function draw() {
  rectMode(CENTER);

  if(keyDown("up")){
    Matter.Body.applyForce(Ball.body,Ball.body.position,{x:110,y:-110})
  }

  background("210,230,230");
  
  drawSprites();

  ground.display();

  

  
  image(dustbini,1000,462,200,200)
  
  Ball.display();
}




