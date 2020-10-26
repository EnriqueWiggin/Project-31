
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450,390,900,20);
	for(var k = 0; k <=width; k = k + 80) {
		divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
	}
	for(var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,75));
	}
	for(var j = 15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,175));
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  drawSprites();
  

 
}



