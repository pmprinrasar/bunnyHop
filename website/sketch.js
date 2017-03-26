var gravity = 10
var speed = 8
var mee;
var pl= [];

var bunny1 = [[],[]]
var bunny2 = []
var earth = []

function setup()
{
  imageMode(CENTER)
  bunny1[0].push(loadImage("img/bunny111.png"))
  bunny1[0].push(loadImage("img/bunny121.png"))
  bunny1[1].push(loadImage("img/bunny112.png"))
  bunny1[1].push(loadImage("img/bunny122.png"))
  bunny2.push(loadImage("img/bunny21.png"))
  bunny2.push(loadImage("img/bunny22.png"))
  earth.push(loadImage("img/platformBig.png"))
  earth.push(loadImage("img/platformSmall.png"))
  earth.push(loadImage("img/platformBigV.png"))
  earth.push(loadImage("img/platformSmallV.png"))

  createCanvas(800,600)
  mee = new player();
  imageMode(CORNER)
  pl.push(new wall(400,100,false,false));
  pl.push(new wall(0,500,false,false));
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
