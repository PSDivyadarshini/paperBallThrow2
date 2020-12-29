
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var Ground1;
var ball;
var bin;



function setup() {
	createCanvas(1200, 420);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1=new dustBin(755,310,20,100);
	bin2=new dustBin(1045,310,20,100);
	bin3=new dustBin(900,370,310,20);
	
	
	Ground1=new Ground(600,395,20,1200);

	ball=new paper(100,300,70);
	
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
       Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



function draw() {
  rectMode(CENTER);
  background("white");
  bin1.display();
  bin2.display();
  bin3.display();
  Ground1.display();
  ball.display();
  drawSprites();
 
}

