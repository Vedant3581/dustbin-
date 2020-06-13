var paper;
var dustbin,dustbin2,dustbin3,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	dustbinSprite=createSprite(600,650,200,20)
	dustbinSprite.shapeColor="black"
	
	dustbin1Sprite=createSprite(700,600,20,100)
	dustbin1Sprite.shapeColor="black"

	dustbin2Sprite=createSprite(500,600,20,100)
	dustbin2Sprite.shapeColor="black"

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, paperBody);
    ellipse(100,600, 55, 55);


    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("white")
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBody, position, force)
	 }
   }
   



