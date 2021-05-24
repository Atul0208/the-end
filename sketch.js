 var bananaImage;
 var obstacleImage;
var obstaclegroup;
var g;
var background;
var score=0;
//pl

//var food;
var foodGroup;

function preload(){
  
 bananaImage=loadImage("banana.png")
  bImage=loadImage("jungle.jpg")
    eImage=loadImage("stone.png")
  plr=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png")
  plq=loadImage("Monkey_01.png")
}
                    //Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_010.png"


function setup() {
  createCanvas(800,500);
  //groups
  foodGroup = new Group();
  obstacleGroup=new Group();
  
  
  //background and ground
  b=createSprite(204,200,400,400)
   b.velocityX=-2;
  b.addImage(bImage)
 
 
  g=createSprite(0,375,600,20)


  g.visible=false;
  
  //player
  pl=createSprite(60,350,30,30)
  pl.addAnimation("mn",plr)
   pl.scale=0.07
}  

function draw() {
  background(rgb(198,135,103));
  // image(bImage, -1000,-500,displayWidth*5,displayHeight*2);
  image.velocityX=-2
  camera.position.x = pl.x
  camera.position.y = pl.y
// reset function
    if(b.x<0){
    b.x=b.width/8
    }
  
  if(keyDown("space")&&pl.y>=200) {
    pl.velocityY=-7
    }
  pl.velocityY=pl.velocityY+1 ;  
  pl.collide(g)
 
  food();
  o();
     if(foodGroup.isTouching(pl)){
      score=score+2; 
       pl.scale=pl.scale+0.01
     foodGroup.destroyEach();
   
      
     }
  if(obstacleGroup.isTouching(pl)){
      score=score-2; 
    pl.scale=pl.scale-0.02
     obstacleGroup.destroyEach();
  }
  if(score===2){
    obstacleGroup.destroyEach();
    foodGroup.destroyEach()
    pl.velocityX=0
    b.velocityX=0
    text("you win ",200,200); 
  }
  drawSprites();
  text("need 40 points to win the game",100,50); 
  textSize(35)
  fill("red")
text("score: "+score,300,50); 
if(score===2){
  obstacleGroup.destroyEach();
  foodGroup.destroyEach()
  pl.velocityX=0
  b.velocityX=0
  textSize(100)
  text("you win ",100,200); 
  pl.changeAnimation("plq");
}
}
function food(){
   if(frameCount%80==0){
    foo=createSprite(400,Math. round(random(300,375)),20,20)
    foo.velocityX=-7;
    foo.addImage(bananaImage)
    foo.liftime=400/7;
    foodGroup.add(foo); 
        foo.scale=0.05;
 
  }
}
function o (){
  if(frameCount%90==Math.round(random(10,30))){
    ob =createSprite(400,345,20,20)
    ob.velocityX=-7
    ob.lifetime=400/7;
    obstacleGroup.add(ob);
    ob.addImage(eImage)
    ob.scale=0.09;
  }
}