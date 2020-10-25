//components
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ball, ground;

function setup() {
  createCanvas(400,400);
 //create an engine
 engine= Engine.create();
 world= engine.world;
 var ball_options= {
   //JSON data type
   restitution: 0.8
 }
 ball= Bodies.circle(200,100,50,ball_options);
 World.add(world, ball);
 var ground_options= {
  //JSON data type
  isStatic: true
}
 ground= Bodies.rectangle(200,370,400,20,ground_options);
 World.add(world, ground);

 /*console.log(object);
 console.log(object.position.x);
 console.log(object.position.y);*/
}

function draw() {
  background(0);  
  Engine.update(engine); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,50,50);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
}