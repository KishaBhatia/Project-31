const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight=300;

var particles=[];
var divisions=[];
var plinkos=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


 // createSprite(400, 200, 50, 50);
 ground = new Ground(240,height-10,480,20);

 for(var i=0;i<=width;i=i+80){
  divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
};

  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,35,20,20));
  };

  for(var j=10;j<=width-10;j=j+30){
    plinkos.push(new Plinko(j,75,20,20));
  };

  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,115,20,20));
  };

  for(var j=10;j<=width;j=j+30){
    plinkos.push(new Plinko(j,155,20,20));
  };

  if(frameCount%90===0){
    for(var k=0;k<particles.length;k++){
      particles.push(new Particle(random(width/2-10,width/2+10,20)));
    }
  };
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  //divisions.display();
  for(var i=0; i<divisions.length;i++){ 
    divisions[i].display();
   }

   //plinkos.display();
   for(var j=0; j<plinkos.length;j++){ 
    plinkos[j].display();
   }

   for(var j=0; j<plinkos.length;j++){ 
    plinkos[j].display();
   }

   for(var j=0; j<plinkos.length;j++){ 
    plinkos[j].display();
   }

  for(var j=0; j<plinkos.length;j++){ 
    plinkos[j].display();
   }

   for(var k=0;k<particles.length;k++){
    particles[k].display();
  }

  ground.display();
}
