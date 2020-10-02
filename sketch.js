var sling1;
var hit;
var platform1, platform2, platform3;
function setup() {
  createCanvas(800,400);
 hit =new Hit(400, 200, 50, 50);

 // sling1 = new SlingShot();




}

function draw() {
  background(255,255,255);  
  hit.display();
  drawSprites();
}