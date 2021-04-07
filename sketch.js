const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 

var kindman, evilman, helpman, fireball, protection, ground 

function setup() { 
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(800, 800); 
  ground = new Ground(50, 800, 800, 20); 
  kindman = new Kindman(250, 300); 
}

function draw() { 
  ground.display(); 
  kindman.display();
}