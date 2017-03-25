var gravity = 10
var speed = 8
var mee;
var pl1;
function setup()
{
  createCanvas(800,600)
  mee = new player();
  pl1 = new wall(400,100,100,300);
}
function draw()
{
  background(72,188,214)
  mee.update()
  mee.show()
  pl1.show()

}

function keyPressed()
{
  if (keyCode == LEFT_ARROW)
  {
    //move left
    mee.velx = -5
  }
  if (keyCode == RIGHT_ARROW)
  {
    //move right
    mee.velx = 5
  }
  if (keyCode == UP_ARROW)
  {
    //do the jump
  if (mee.jumpCount >0)
  {
    mee.vely = -20
    mee.jumpCount --
  }

  }
}
function keyReleased()
{
  //stop moving when release the key
  if (keyCode != UP_ARROW)
  {
    mee.velx = 0
  }
}
