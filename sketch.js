// You could have multiple flags like: start, launch to indicate the state of the game.
/*
const {Engine} = Matter 
is the same as const Engine = Matter.Engine
*/
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var Engine = Matter.Engine;
const World= Matter.World;
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;
Body=Matter.Body;
Mouse=Matter.Mouse;
MouseConstraint=Matter.MouseConstraint;
Constraints=Matter.Constraints;
Composite=Matter.Composite;
Composites=Matter.Composites;
Detector=Matter.Detector;

var engine, world;
var rect1,dome,cir1;
var backgroundImg;
//var bird, slingshot;
var gamestate = "load";
var ground, platform;

var bombCount=4;
//var incline1;
//var angle1=45;

function preload() {
    backgroundImg = loadImage("Images/bg.png");
    bombsA=[];


}

// Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,canvas.height-10,800,20);
    platform = new Ground(150, canvas.height-70, 300, 100);

    cannonBase1 = new BaseClass(200,265,100,30);
    cannonBase2 = new BaseClass(200,234,75,30);
    cannonDome = new BaseBall(200,210,30);
  
    cannonGun=new Cannon(250,200,10,100,65);
    ball1 = new CannonBall(400,200,10);
    
  
    for (let  i = 0; i < bombCount; i++) { // we create the drops 
      var bomb = new EnemyFire();
      bomb.reset();
      bombsA.push(bomb);
    }

    
}

// Remember to update the Matter Engine and set the background.
function draw() {
   background(backgroundImg);
   Engine.update(engine);
   
   ground.display();
   platform.display();
   
   cannonBase1.display();
   cannonGun.display();
   cannonDome.display();
   cannonBase2.display();

   
   ball1.display();

  angle1=map(mouseX,0,700,230,270);
  cannonGun=new Cannon(220,200,10,100,angle1);
  
    for (let  i = 0; i < bombCount; i++) { // we create the drops 
        var bomb = bombsA[i];
        bomb.fall(); // sets the shape and speed of drop
        bomb.show(); // render drop
      }
}


function keyReleased() {
    // Call the shoot method for the cannon.
}

function mouseReleased(){
   // slingshot.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body,{x:200,y:50});
       gamestate="onSling";
       slingshot.attach(bird.body);
    }
}

/*
dropsA=[];//an array
var dropCount=100;

function setup() {
  var canvas = createCanvas(800,600); // size of the window
  for (let  i = 0; i < dropCount; i++) { // we create the drops 
  var drop = new Drop();
    drop.reset();
    dropsA.push(drop);
  }
}

function draw() {
  background(230, 230, 250); // background color in RGB color cordinates
  for (let  i = 0; i < dropCount; i++) { // we create the drops 
    var drop = dropsA[i];
    drop.fall(); // sets the shape and speed of drop
    drop.show(); // render drop
  }
}*/