
var space,spaceImg
var spaceship,spaceshipImg
var starsImg,asteroidsImg 
var score=0;
var gameState="play";


function preload(){
spaceImg=loadImage('space.png')
  spaceshipImg=loadImage('spaceship.png')
  starsImg=loadImage('Star.png')
  asteroidsImg=loadImage('asteroids.png')

}

function setup() {
 createCanvas(400,400);


 space=createSprite(400,200)
space.addImage(spaceImg)
  space.scale=2
  space.velocityY=4
 spaceship=createSprite(100,300);
spaceship.addImage (spaceshipImg)
  spaceship.scale= 0.3
  

  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  
  edges=createEdgeSprites();

  starG = new Group();
  asteroidG= new Group();
}

function draw() {
 background("white");
spaceship.x=mouseX
  
  if(gameState==="play") {
  spawnStars()
  spawnAsteroids()
 if (space.y>400){
     space.y=space.width/10
 }
  drawSprites();
  fill("orange")
  text("𝕊ℂ𝕆ℝ𝔼:"+score,170,10);
  }
  
}

function spawnStars()
{
if(frameCount%100===0){
    var star= createSprite(Math.round(random(50,350)),40,10,10)
    star.addImage(starsImg)
    star.scale=0.1
    star.velocityY= 5
}
}


function spawnAsteroids()
{
    if(frameCount%100===0){
        var asteroids= createSprite(Math.round(random(50,350)),40,10,10)
        asteroids.addImage(asteroidsImg)
        asteroids.scale=0.1
        asteroids.velocityY= 5
    }

}

