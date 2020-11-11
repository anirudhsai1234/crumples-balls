
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    ground=new Ground(400,380,800,20);
	paper=new Paper(100,370,25)
  
}


function draw() {
  
  background("blue");
  Engine.update(engine);
  paper.display();
  ground.display();
 
}



