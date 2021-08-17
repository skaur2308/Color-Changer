
function setup() {
  createCanvas(400,400);
  btn_red = createButton("RED, right arrow");
  btn_red.position(20, 50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN, left arrow");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
}

function draw() 
{
  background('grey');
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("green");
  }
}
function red_bg()
{
  r = 255;
  g = 0;
  b = 0;

}

function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
}

function mousePressed()
{
  btn_green.mousePressed(green_bg);
  btn_red.mousePressed(red_bg);   
}
