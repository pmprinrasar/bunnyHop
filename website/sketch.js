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
var bg = []
var bgImage = []
var earth = []
var rektPlayer = 0
var img
var started = false

function setup()
{
  imageMode(CENTER)
  bg.push(loadImage("img/bg1.png"))
  bg.push(loadImage("img/bg2.png"))
  bg.push(loadImage("img/bg3.png"))
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
  img = loadImage("img/intro.png")

  createCanvas(stage.width,stage.height-30)
  mee = new player(1);
  mee2 = new player(2)
  imageMode(CORNER)
  bgImage.push(new backG(2))
  bgImage.push(new backG(1))
  bgImage.push(new backG(0))

  pl.push(new wall(stage.width/2-50,500,false,false));
  pl.push(new wall(200,500,false,false));
  pl.push(new wall(stage.width-70,300,true,false));
  pl.push(new wall(stage.width/2-50,150,false,true));

  makePlat();
}
function makePlat()
{
  var x = Math.floor(Math.random() * (stage.width-380))
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
  background(72,188,214)


  if(mee.y > stage.height)
  {
    gameOver(1)
  }
  if(mee2.y > stage.height)
  {
    gameOver(2)
  }
  if(frameCount > 80)
  {
    dif = 3
  }

  for (var i = 0; i<bgImage.length; i++)
  {
    bgImage[i].y += dif/10*(i+2)
    bgImage[i].show()
  }
  mee2.update()
  mee2.show()
  mee.update()
  mee.show()
  if(frameCount%100 == 0 && frameCount > 120)
  {
    makePlat();
  }
  for (var i = 0; i<pl.length; i++)
  {
    pl[i].y += dif
    pl[i].show()
  }

  if(!started)
  {
    frameRate(1)
    imageMode(CENTER)
    image(img,stage.width/2,stage.height/2)
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
function gameOver(player)
{
  text("hello", 0, 0);
  console.log("RIP")
  var s = "Game Over, Player "+ player +"\n GOT REKT";
  console.log(s)
  fill(255,130,130)
  textAlign(CENTER)
  textSize(50)
  var t = text(s,stage.width/2,300)
  //t.show()

  throw("Hello")

  noLoop()
}
function mouseClicked()
{
  if(started)
  {
    location.reload()
  }
  console.log("Game started")
  started =true
  frameRate(60)
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
