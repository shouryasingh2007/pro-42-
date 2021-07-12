var spacecraft1
var spacecraft2
var spacecraft3
var spacecraft4
var hasDocked = false;


function preload(){
 spacecraft1 = loadImage("spacecraft1.png");
 spacecraft2 = loadImage("spacecraft2.png");
 spacecraft3 = loadImage("spacecraft3.png");
 spacecraft4 = loadImage("spacecraft4.png");
 issImg = loadImage("iss.png");
 bgimg =loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  spacecraft = createSprite(350,150,50,50);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale =0.15;
  iss.scale = 0.25;
}

function draw() {
  background(bgimg);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 2
      }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft1);
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3)
      spacecraft.x = spacecraft.x - 1
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft2)
      spacecraft.x = spacecraft.x + 1
    }
    
  }
  if(spacecraft.y <=(iss.y + 70) && spacecraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("docking successful",200,300);
  }
  drawSprites();
}