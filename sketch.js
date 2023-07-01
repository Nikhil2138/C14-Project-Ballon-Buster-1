var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }

  gubara();
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.depth = arrow.depth + 1;
}

function gubara(){
  if(frameCount%40===0){
    var ballonz = createSprite(-20,40,20,20);
    ballonz.velocityX = 4;
    ballonz.lifetime = 110;

    var bas = Math.round(random(1,4));
    switch(bas){
      case 1: ballonz.addImage("blue",blue_balloonImage);
              ballonz.scale = 0.1;
              break;
      case 2: ballonz.addImage("green",green_balloonImage);
              ballonz.scale = 0.1;
              break;
      case 3: ballonz.addImage("red",red_balloonImage);
              ballonz.scale = 0.1;
              break;
      case 4: ballonz.addImage("pink",pink_balloonImage);
              ballonz.scale = 1.1;
              break;
      default: break;
    }

    var das = Math.round(random(1,4));
    switch(das){
      case 1: ballonz.y = 50;
              break;
      case 2: ballonz.y = 150;
              break;
      case 3: ballonz.y = 250;
              break;
      case 4: ballonz.y = 350;
              break;
      default: break;
    }

  }

}