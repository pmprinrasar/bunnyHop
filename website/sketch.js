var gravity = 10
var speed = 8
var mee;
var pl= [];

var bunny1 = []
var bunny2 = []


function setup()
{
  bunny1.push(loadImage("img/bunny11.png"))
  bunny1.push(loadImage("img/bunny12.png"))
  bunny2.push(loadImage("img/bunny21.png"))
  bunny2.push(loadImage("img/bunny22.png"))

  createCanvas(800,600)
  mee = new player();
  pl.push(new wall(400,100,100,300));
  pl.push(new wall(0,500,600,100));
}
function draw()
{
  background(72,188,214)
  mee.update()
  mee.show()
  for (var i =0; i<pl.length; i++)
  {
    pl[i].show()
  }
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
