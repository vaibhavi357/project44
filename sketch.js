var basket, baketImg;
var egg, eggImg, brokenEggImg;
var backgroundImg;
var ground, groungImg;

function preload(){
baketImg = loadImage("basket.png");
eggImg = loadImage("egg.jpg");
backgroundImg = loadImage("background2.jpg");
groundImg = loadImage("ground.png")
}

function setup() {
	createCanvas(800, 600);

	ground = createSprite(400, 550);
	ground.addImage(groundImg);
	ground.scale = 0.2

	basket = createSprite(400, 450);
	basket.addImage(baketImg);
	basket.scale = 0.2;
}


function draw() {
  background(backgroundImg);
  drawSprites();
}



