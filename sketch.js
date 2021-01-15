
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new Hammer(100,100);
	ground = new Ground(400,690,800,20)
	rock1 = new rock(600,200,100,100)
	rubber1 = new Rubber(400,200)
	sand1 = new Sand(200,650)
	sand2 = new Sand(200,650)
	sand3 = new Sand(200,650)
	sand4 = new Sand(200,650)
	sand5 = new Sand(200,650)
	sand6 = new Sand(200,650)
	sand7 = new Sand(200,650)
	iron1 = new iron(100,300,80,80)


  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("cyan");

	hammer1.display();
	ground.display();
	rock1.display();
	rubber1.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	iron1.display()

	
  
  drawSprites();
 
}



