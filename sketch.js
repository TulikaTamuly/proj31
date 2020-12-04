const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var Plinko=[]
var Division=[]
var Particles=[]
function setup() {
  createCanvas(600,600);
  engine=Engine.create()
  world=engine.world
  op_options={
    isStatic:true
  }
 // Particle=new particle(200,100)
  for(var i=70;i<600;i=i+60){
    Plinko.push(new plinko(i,200))
  }
  for(var i=50;i<600;i=i+60){
    Plinko.push(new plinko(i,250))
  }
  for(var i=70;i<600;i=i+60){
    Plinko.push(new plinko(i,300))
  }
  for(var i=50;i<600;i=i+60){
    Plinko.push(new plinko(i,350))
  }
  for(var i=50;i<600;i=i+60){
    Plinko.push(new plinko(i,150))
  }
  for(var i=0;i<600;i=i+80){
    Division.push(new ground(i,500))
  }
  land=Bodies.rectangle(300,600,600,10,op_options)
  World.add(world,land)
  

}

function draw() {
  Engine.update(engine)
  rectMode(CENTER)
  background("black");
  if(frameCount%30===0){
    Particles.push(new particle(random(280,320),-10))
  }
  for(var i=0;i<Plinko.length;i++){
  Plinko[i].display()
  }
  for(var i=0;i<Division.length;i++){
    Division[i].display()
    }
    for(var i=0;i<Particles.length;i++){
      Particles[i].display()
      }
 // Particle.display()
  rect(land.position.x,land.position.y,600,10)
  drawSprites();
}

