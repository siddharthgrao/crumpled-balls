const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
//var box1, box2, box3;
var paperObject;
var ground;
var dustbin, dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1200,20);

	paperObject = new Paper(800,100,50);

	//box1 = new Dustbin(700,height - 35,150,20);
	//box2 = new Dustbin(620,height - 75,20,100);
	//box3 = new Dustbin(780,height - 75,20,100);

	dustbin = createSprite(800, height-160, 100, 100);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.8;
 
}


function draw() {
  background(255);

  Engine.update(engine);

  ground.display();

  paperObject.display();

  //box1.display();
  //box2.display();
  //box3.display();

  //dustbin.display();

  drawSprites();
  
  
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:35,y:-45});
	}
}

