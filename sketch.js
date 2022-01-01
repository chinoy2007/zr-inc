var bgIMG , forest , bg2 , bgIMG2;
var z1IMG , z1;
var z2IMG , z2;
var z3IMG , z3;
var z4IMG, z4;
 var runner , runner_running;


function preload() {
bgIMG = loadImage("forest.jpg");
z1IMG = loadImage("z1.png");
//bgIMG2= loadImage("bg2.jpg");
runner_running= loadAnimation("z3.png","z4.png");
}



function setup(){
createCanvas(1200,800);
forest = createSprite(0,300,1200,800);
 forest.addImage(bgIMG);
forest.velocityX=-7;
// forest.x= forest.width/2

// runner.addAnimation("running",runner_running);
// runner.setCollider('circle',0,0,350)
//   runner.scale = 0.08;
 }



function draw() {
background(200);
if (forest.x<550){
    forest.x=650;
}



drawSprites();
}