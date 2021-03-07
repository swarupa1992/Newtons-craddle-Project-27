
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;


function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300,300); 
    bob2 = new Bob(350,300);//250
	bob3 = new Bob(400,300); //300
    bob4 = new Bob(450,300);//350
	bob5 = new Bob(500,300);  //400
    
	roof1 = new Roof();
	
	rope1 = new Rope(bob1.body,roof1.body,-100);
    rope2 = new Rope(bob2.body,roof1.body,-50);
    rope3 = new Rope(bob3.body,roof1.body,0);
    rope4 = new Rope(bob4.body,roof1.body,50);
    rope5 = new Rope(bob5.body,roof1.body,100);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(220);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 }

function keyPressed() {
    if (keyCode === UP_ARROW) {
        console.log("Testing move");
        console.log(bob1.body.position);

      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

    }
}




