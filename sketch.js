var PLAY = 1
var END = 0
var Game_state = PLAY

var Trees_group

var Alien 
function preload(){
  Alien1 = loadAnimation("ALIEN.png")
  Tree1 = loadImage("TREE.png")

  Alien_Hit1 = loadAnimation("ALIEN HIT.png")

  Background1 = loadImage("BACKGROUND.png")

}

function setup(){
  createCanvas(400,400)

  //create a trex sprite 
  Alien = createSprite(100,160,10,30)
  Alien.addAnimation("jumping", Alien1)
  Alien_Hit.addAnimation("collided",Alien_Hit1)
  Alien.scale = 0.5
  Alien.setCollider("circle",0,0,20)
Trees_group = createGroup()

Background = createSprite(200,200,500,500)
Background.addImage(Background1)


equator = createSprite(300,180,525,5)
equator.visible = false
}


function draw(){
if(Game_state == PLAY){

  if (touches.length>0 || keyDown("space")&&(Alien.y>140)) {
    Alien.velocityY = -10
    jump.play()
touches = []
  }

  Alien.velocityY = Alien.velocityY + 0.5

Background.velocityX = -(5+score/1000)

if(Background.x < 0) {
  Background.x = ground.width/2

SpawnTrees()
if(Trees_group.isTouching(Alien)){
Game_state = END
}

 if (Game_state === END){
  ground.velocityX = 0
  Trees_group.setVelocityXEach(0)
  Alien.veloctityY = 0
  Alien.changeAnimation("collided")
 }
Trex.collide(equator)



drawSprites()

}



function SpawnTrees(){
if(frameCount%100===0){

  var Trees = createSprite(width,160,10,30) 

  Trees.velocityX = -(5+score/1000)
   var r = Math.round(random)
   switch(r){

       case 1 :
        Trees.addImage(Trees1)
        default: break
   }
Trees.scale=0.4
Trees_group.add(Trees) }}
