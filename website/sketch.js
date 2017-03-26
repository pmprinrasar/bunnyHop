var stage = {width:window.innerWidth, height:window.innerHeight}
var gravity = 10
var speed = 8
var mee;
var mee2;
var pl= [];
var dif = 0
var minDistance = 200
var bunny1 = [[],[]]
var bunny2 = [[],[]]
var earth = []

function setup()
{
  imageMode(CENTER)
  bunny1[0].push(loadImage("img/bunny111.png"))
  bunny1[0].push(loadImage("img/bunny121.png"))
  bunny1[1].push(loadImage("img/bunny112.png"))
  bunny1[1].push(loadImage("img/bunny122.png"))
  bunny2[0].push(loadImage("img/bunny211.png"))
  bunny2[0].push(loadImage("img/bunny221.png"))
  bunny2[1].push(loadImage("img/bunny212.png"))
  bunny2[1].push(loadImage("img/bunny222.png"))
  earth.push(loadImage("img/platformBig.png"))
  earth.push(loadImage("img/platformSmall.png"))
  earth.push(loadImage("img/platformBigV.png"))
  earth.push(loadImage("img/platformSmallV.png"))

  createCanvas(stage.width,stage.height-30)
  mee = new player(1);
  mee2 = new player(2)
  imageMode(CORNER)
  pl.push(new wall(stage.width/2-50,500,false,false));
  pl.push(new wall(200,500,false,false));
  pl.push(new wall(stage.width-70,300,true,false));
  pl.push(new wall(stage.width/2-50,150,false,true));

  makePlat();
}
function makePlat()
{
  var x = Math.floor(Math.random() * (stage.width-380))
  console.log(x)
  var y = -150
  pl.push(new wall(x, y,false,false))
  var tmp = Math.floor(Math.random() * (stage.width-380))
  while(Math.abs(x-tmp) < minDistance)
  {
    tmp = Math.floor(Math.random() * (stage.width-380))
  }
  var one = Math.floor(Math.random()*2) == 0
  var two = Math.floor(Math.random()*2) == 0

  pl.push(new wall(tmp, y,one,two))

}
function draw()
{
  if(frameCount > 120)
  {
    dif = 3
  }
  background(72,188,214)
  mee2.update()
  mee2.show()
  mee.update()
  mee.show()
  if(frameCount%100 == 0 && frameCount > 120)
  {
    makePlat();
  }
  for (var i =0; i<pl.length; i++)
  {
    pl[i].y += dif
    pl[i].show()
  }

  //handling keyboard input
  if(keyIsDown(LEFT_ARROW))
  {
    mee.velx = -5
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    mee.velx = 5
  }
  if(keyIsDown(65))
  {
    mee2.velx = -5
  }
  if(keyIsDown(68))
  {
    mee2.velx = 5
  }
}

function keyPressed()
{
  if (keyCode == UP_ARROW)
  {
    //do the jump
    if (mee.jumpCount >0)
    {
      mee.vely = -20
      mee.jumpCount --
    }
  }
  if (keyCode == 87)
  {
    //do the jump
    if (mee2.jumpCount >0)
    {
      mee2.vely = -20
      mee2.jumpCount --
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
  if (keyCode != 87)
  {
    mee2.velx = 0
  }
}
