var gravity = 10
var speed = 8
var mee

function setup()
{
  createCanvas(800,600)
  mee = player()
}
function draw()
{


  mee.draw ()
}
function player()
{
  //player variables
  this.x = 100
  this.y = 100
  this.diam = 50
  this.velx=0
  this.vely= gravity
  this.jumpCount=2

  //draws the circle
  this.draw = function()
  {
    background(72,188,214)
    fill(250,150,100)
    ellipse(this.x,this.y,this.diam,this.diam)
    this.update()
  }
  //moves the circle
  this.update = function()
  {
    this.x += this.velx
    this.y += this.vely

    //happens when u hit the floor
    if(this.y+this.diam >= 500)
    {
        this.jumpCount =2
        this.y-= this.vely
    }
    if(this.vely != gravity)
    {
      this.vely ++
    }

  }
  return this

}
function keyPressed()
{
  if (keyCode == LEFT_ARROW)
  {
    //move left
    mee.velx = -5
  }
  else if (keyCode == RIGHT_ARROW)
  {
    //move right
    mee.velx = 5
  }
  else if (keyCode == UP_ARROW)
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
    mee.velx = 0
}
