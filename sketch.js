
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dub1, dub2, dub3, ball, ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	dub1 = new Dustbin(1000, 625, 30, 110);
	dub3 = new Dustbin(1200, 625, 30, 110);
	dub2 = new Dustbin(1100, 665,200, 20);
ground = new Ground(800, 700, 1600, 50 );
ball = new Paper(200, 50,50, 50);
sling = new Sling(ball.body, {x:250, y:300});
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  dub1.display();
  dub2.display();
  dub3.display();
 ground.display();
ball.display();
sling.display();
keypressed();

}
function keypressed(){
	if(keyCode === UP_ARROW){
 Matter.Body.applyForce(ball.body, ball.body.position,{x:65,y: -115});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

