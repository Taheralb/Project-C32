const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage;
var engine,world;
var createSnow=[];

function preload () {
  backgroundImage = loadImage("snow1.jpg");

}

function setup() {
  engine = Engine.create ()
  world=engine.world 
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
if (frameCount%50===0){
  for (var i =0; i<200;i++ ){
  createSnow.push(new snow(random(0,800),random(0,800)))
  }
}
}

function draw() {
  background(backgroundImage); 
  Engine.update(engine) ;
  for(var i = 0 ; i<200;i++){
    createSnow[i].showDrop()
    createSnow[i].updateY()
  }
  drawSprites();
}