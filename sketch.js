const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,object;

function setup() {
  createCanvas(800,400);
engine= Engine.create();
world = engine.world;

object = new box()



}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  
  box.display();
  drawSprites();
}