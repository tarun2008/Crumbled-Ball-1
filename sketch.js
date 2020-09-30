
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ground,ball;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(455,367,20,100);
    box2 = new Box(545,367,20,100);
    box3 = new Box(500,385,200,20);
    ground= new Ground(600,790,1200,20);
    ball= new Circle(100,700);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   ground.display();
   ball.display();
//keyPressed();
   
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(ballObject.Body,ballObject.Body.position,{x:85,y:-85});

}
}

