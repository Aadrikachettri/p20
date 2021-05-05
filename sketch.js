var tom,jerry
function preload() {
    //load the images here
    bgimage = loadImage("images/garden.png")
    tomImage = loadAnimation("images/cat1.png") 
    tomImage2 = loadAnimation("images/cat2.png") 
    tomImage3 =loadAnimation("images/cat3.png") 
    tomImage4 = loadAnimation("images/cat4.png")
    jerryImage = loadAnimation("images/mouse1.png")
    jerryImage2 = loadAnimation("images/mouse2.png")
    jerryImage3 = loadAnimation("images/mouse3.png")
    jerryImage4 =loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600,20,20)
tom.addAnimation("tomResting",tomImage)
tom.scale = 0.2;
jerry = createSprite(200,600,10,10)
jerry.addAnimation("jerrybringingthegift",jerryImage)
jerry.scale = 0.1
}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation("Happytom",tomImage3)
    tom.x = 300
    tom.changeAnimation("Happytom")
    tom.scale = 0.2
    jerry.addAnimation("Happyjerry",jerryImage3)
    jerry.changeAnimation("Happyjerry")
    jerry.scale = 0.2
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   jerry.addAnimation("mouseteasing",jerryImage2)
   jerry.changeAnimation("mouseteasing") 
   jerry.frameDelay = 25;
   tom.velocityX = -5
   tom.addAnimation("tomrunning",tomImage2)
   tom.changeAnimation("tomrunning")
  }


}
