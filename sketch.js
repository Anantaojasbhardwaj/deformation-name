var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(60,50,45);
  weight = random(2260,1522,3000);

  car=createSprite(200, 200, 30, 30);
  car.shapeColor="white";
  wall = createSprite(770,200,40,200);
  wall.shapeColor="grey";

  car.velocityX = Math.round(random(50,45,60))
}

function draw() {
  background("black");
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180)
    {
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }
    if(deformation < 100)
    {
      car.shapeColor = "green";
    }
  }
 
  drawSprites();
}