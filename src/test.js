function setup() {
  createCanvas(640, 480);
}
function draw() {
  // draw outline
  noFill();
  rect(0, 0, width-1, height-1);
  
  if (mouseIsPressed) {
    if(mouseButton == LEFT){
      fill(0);
    }
    else if(mouseButton == RIGHT){
      background(255);
    }
  }else{
    fill(255);
  }
  ellipse(mouseX, mouseY, 20, 20);
}
