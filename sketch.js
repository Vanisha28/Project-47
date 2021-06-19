var gameState = 0;
var background, backgroundImg;
var level1bg, level1bgImg;
var start, startImg;
var story, storyImg;
var play, playImg;
var home, homeImg;
var infoSlide, infoSlideImg;
var m1, m2, m3, m4;

const accessCode1 = "ZOMBIE";
const accessCode2 = "VAMPIRE";
const accessCode3 = "SKELETON";




function preload(){
backgroundImg = loadImage("images/background.png");
backgroundImg1 = loadImage("images/background.png");
level1bgImg = loadImage("images/level1_bg.jpg");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
playImg = loadImage("images/play.png");
homeImg = loadImage("images/home.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level 1 story.png");
level2Img = loadImage("images/level 2 story.png");
sound1 = loadSound("sounds/halloween_sound1.mp3");
sound2 = loadSound("sounds/level1_sound2.mp3");

}

function setup() {
createCanvas(1000,600);
//sound1.play();
// homeButton = createSprite(750,60);
// homeButton.addImage(homeImg);
// homeButton.scale = 0.5;
// homeButton.visible = false;

startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;

storyButton = createSprite(100,250);
storyButton.addImage(storyImg);
storyButton.scale = 0.5;

// playButton = createSprite(750,150);
// playButton.addImage(playImg);
// playButton.scale = 0.4;
// // playButton.visible = false;



}

function draw() {
background(backgroundImg);  

if(mousePressedOver(startButton)){

startButton.visible = false;
storyButton.visible = false;
background(level1Img);
playButton=createImg('images/play.png')
playButton.position(750,150);
playButton.size(50,50);
playButton.mouseClicked(play1);

homeButton=createImg('images/home.png')
homeButton.position(750,60);
homeButton.size(50,50);
homeButton.mouseClicked(home)
backgroundImg = null;
}

if(mousePressedOver(storyButton)){
backgroundImg = null;
startButton.visible = false;
storyButton.visible = false;
homeButton=createImg('images/home.png')
homeButton.position(750,60);
homeButton.size(50,50);
homeButton.mouseClicked(home)
background(infoSlideImg);
}

drawSprites();

}

function home2(){
background(level2Img );
startButton.visible = false;
storyButton.visible = false;
playButton=createImg('images/play.png')
playButton.position(750,150);
playButton.size(50,50);
playButton.mouseClicked(play2);
}
function play2(){
    background(level1bgImg)
// maze code
var cardboard1=createSprite(10,70,100,20);
cardboard1.shapeColor="brown";

var cardboard2=createSprite(105,35,20,150);
cardboard2.shapeColor="brown";

var cardboard3=createSprite(175,35,120,20);
cardboard3.shapeColor="brown";

var cardboard4=createSprite(150,145,20,120);
cardboard4.shapeColor="brown";

var cardboard5=createSprite(100,220,100,20);
cardboard5.shapeColor="brown";

var cardboard6=createSprite(60,175,20,100);
cardboard6.shapeColor="brown";

var cardboard7=createSprite(210,200,20,150);
cardboard7.shapeColor="brown";

var cardboard8=createSprite(250,95,145,20);
cardboard8.shapeColor="brown";

var cardboard9=createSprite(280,60,20,50);
cardboard9.shapeColor="brown";

var cardboard10=createSprite(75,300,20,100);
cardboard10.shapeColor="brown";

var cardboard11=createSprite(2,160,100,20);
cardboard11.shapeColor="brown";

var cardboard12=createSprite(370,40,100,20);
cardboard12.shapeColor="brown";

var cardboard13=createSprite(370,150,200,20);
cardboard13.shapeColor="brown";

var cardboard14=createSprite(280,260,20,100);
cardboard14.shapeColor="brown";

var cardboard15=createSprite(365,260,100,20);
cardboard15.shapeColor="brown";

var cardboard16=createSprite(295,315,150,20);
cardboard16.shapeColor="brown";

var cardboard17=createSprite(360,95,20,90);
cardboard17.shapeColor="brown";

var cardboard18=createSprite(30,290,80,20);
cardboard18.shapeColor="brown";

var cardboard19=createSprite(150,290,20,100);
cardboard19.shapeColor="brown";

var cardboard20=createSprite(270,360,100,20);
cardboard20.shapeColor="brown";

var cardboard21=createSprite(10,350,20,100);
cardboard21.shapeColor="brown";

var cardboard22=createSprite(215,355,20,100);
cardboard22.shapeColor="brown";
backgroundImg=null;
drawSprites();
}

function play1(){
  
background(level1bgImg);
playButton.hide();
security = new Security();
security.display()
clues()
// console.log(score)
  
backgroundImg=null;
}



function home(){
startButton.visible = true;
storyButton.visible = true;
background(backgroundImg1)
backgroundImg=null;
}



function clues() {
    
fill("white")
textSize(15)
text("I E Z B O M", 100,50)
fill("lightblue")
text("Hint: Always changing, not constant !!", 100,70)

fill("white")
textSize(15)
text("M P R E I V A", 700,150)
fill("lightblue")
text("Hint: Performs a particular task !!", 700,170)

fill("white")
textSize(15)
text("L E S E K O N T", 100,250)
fill("lightblue")
text("Hint: Stores all information !!", 100,270)

}