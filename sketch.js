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
var backgroundImg;
var angle=0;
var ground, platform;
var cannonGun,canshot,cannonBall;

var dome;
var bomb;
var bombCount=3;
var flag="loaded";

let beginX = 110.0; // Initial x-coordinate
let beginY = 180.0; // Initial y-coordinate
let endX = 800; // Final x-coordinate
let endY = 0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 1.9; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.04; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)


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
    
    cannonGun=new Cannon(210,220,10,10,45);
    cannonBall = new CannonBall(200,180,10);
   
    canshot=new CanShot(cannonBall.body,{ x:200, y:180});
  
    for (let  i = 0; i < bombCount; i++) { // we create the drops 
      var bomb = new EnemyFire();
      bomb.reset();
      bombsA.push(bomb);
     }
    noStroke();
    load(); 
}

// Remember to update the Matter Engine and set the background.
function draw() {
   background(backgroundImg);
   Engine.update(engine);
   
   ground.display();
   platform.display();
   
   cannonBase1.display();
   angle=map(mouseX,0,700,-2.4,-1.8);//map the mouse movement to angle
   cannonGun=new Cannon(220,200,18,55,angle);
   cannonGun.display();
  // cannonBall.display(); 
   cannonDome.display();
   cannonBase2.display(); 
   arc(200,200,35,35,-3.14 ,0)
      
   canshot.display();
   
   textSize(15);
   stroke(125,100,25);
   fill(25,0,250);
   text('Press "DOWN" Arrow to  ... FIRE',50,25);
   text('Press "SPACE" Arrow to ... RELOAD',50,50);
   
   //reload the gun 
  if (keyIsPressed===true){
    if(keyCode === 32){
      Matter.Body.setPosition(cannonBall.body,{x:200,y:180});
      flag="loaded";                             
      canshot.attach(cannonBall.body);
      load();//initialise the parameters for trajectory
    }
  }
  

  //firing the gun
  if (keyIsDown(DOWN_ARROW)) {
    flag="launched";
    canshot.shoot();
    pct += step;
      if (pct < 2.0) {
        y = beginY + pct * distY;
        x = beginX + pow(pct, exponent) * distX;
      }
     fill(255,0,0);
     ellipse(x, y, 15, 15); 
      
   } 

  for (let  i =  0; i < bombCount; i++) { // we create the drops 
    var bomb = bombsA[i];
    bomb.fall(); // sets the shape and speed of drop
    bomb.show(); // render drop
    }  
  }
  
function load(){
  beginX = 200; // Initial x-coordinate
  beginY = 180; // Initial y-coordinate
  endX = 800; // Final x-coordinate
  endY = 10; // Final y-coordinate
  distX = endX - beginX;//X-axis distance to move
  distY = endY - beginY;//Y-axis distance to move
  exponent = 1.1; // Determines the curve
  x = 0.0; // Current x-coordinate
  y = 0.0; // Current y-coordinate
  step = 0.04; // Size of each step along the path
  pct = 0.0; // Percentage traveled (0.0 to 1.0)
}
