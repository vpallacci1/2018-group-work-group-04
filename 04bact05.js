var myImg;
var myText;

function preload(){
  // put preload code here
  myImg = loadImage("./assets/bact05.png");
  myText = loadImage("./assets/04bact5.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(193, 241, 255);

  mic = new p5.AudioIn();

  mic.start();

}

function draw() {
  // put drawing code here
  background(193, 241, 255);
  var vol = mic.getLevel() * 50;
  console.log(vol);

  noStroke();
  imageMode(CENTER);
  image(myImg, windowWidth/3*1, windowHeight/2, myImg.width/2.1, myImg.height/2.1);

  fill(color(193, 241, 255, vol*120));
  ellipse(windowWidth/3*1,windowHeight/2,900);

  imageMode(CENTER);
  image(myText, windowWidth/2 + 400, windowHeight/2 - 20, myText.width/4, myText.height/4);

  push();
  if (vol >= 4) {
    fill("#C1F1FF");
    ellipse(windowWidth/3*1,windowHeight/2,900);
    noLoop();
  }
  pop();

  var rx = windowWidth/2 + 322;
  var ry = windowHeight/2 + 287;
  var rw = 180;
  var rh = 40;
  var c = 20;

  if(mouseX > rx && mouseX < (rx + rw) && mouseY > ry && mouseY < (ry + rh) && mouseIsPressed == true){
  window.location.href="03colonieBatt.html";
  }
  fill(color(193, 241, 255));
  stroke(color(52, 113, 164));
  strokeWeight(2);
  rect(rx, ry, rw, rh, c);

  push();
  fill(color(52, 113, 164));
  textFont('Josefin Sans');
  textAlign(CENTER);
  textSize(17);
  noStroke();
  text("Go back to the map", windowWidth/2 + 410, windowHeight/2 + 313);
  pop();
}

function mousePressed() {
  loop();
}
