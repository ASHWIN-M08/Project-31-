
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var groundObj;
var divisionHeight=300;

// the arrays 
var particles = [];
var plinkos = [];
var divisions = [];

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	
    //making the ground 
	groundObj = new Ground(240,717,900,10);

	// red borders 
	redBorderRight = createSprite(479,400,3,800);
	redBorderRight.shapeColor=color("red");

	redBorderLeft = createSprite(1,400,3,800);
	redBorderLeft.shapeColor=color("red");

	redBorderTop = createSprite(240,1,480,3);
	redBorderTop.shapeColor=color("red");

	redBorderBottom = createSprite(240,720,480,3);
	redBorderBottom.shapeColor=color("red");

	for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
	}
	
    //row 1 of the plinko dots
	for (var j= 40; j <width; j=j+50)
	{
		plinkos.push(new Plinko(j,75));
	}

    //row 2 of the plinko dots
	for (var j = 15; j <=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,175));
	}
	
	//row 3 of the plinko dots 
	for (var j= 40; j <width; j=j+50)
	{
		plinkos.push(new Plinko(j,275));
	}

    //row 4 of the plinko dots
	for (var j = 15; j <=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,375));
	}



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

  //spawining the particles 
  if(frameCount%60===0){
	  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
	}
	
	// displaying the arrays 
	for (var j = 0; j < particles.length; j++) {

		particles[j].display();
	}
	for (var k = 0; k < divisions.length; k++) {

		divisions[k].display();
	}
	for (var j = 0; j < plinkos.length; j++) {

		plinkos[j].display();
	}
	
  drawSprites();
 
}



