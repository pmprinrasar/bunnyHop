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
  this.show = function()
  {
    fill(250,150,100)
    ellipse(this.x,this.y,this.diam,this.diam)
    //this.update()
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
    this.collideX(pl1)
    this.collideY(pl1)
  }
  this.collideX = function(wally)
  {
    //collision left side
    if(this.x+(this.diam/2) >= wally.x && this.x+(this.diam/2) <= wally.x+wally.width && this.y >wally.y && this.y< wally.y+ wally.height)
    {
      this.x = wally.x-(this.diam/2)
      this.jumpCount = 2
    }
    if(this.x-(this.diam/2) <= wally.x +wally.width && this.x+(this.diam/2) >= wally.x+wally.width && this.y >wally.y && this.y< wally.y+ wally.height)
    {
      this.x = wally.x+wally.width+(this.diam/2)
      this.jumpCount = 2
    }
  }
  this.collideY = function(wally)
  {
    if(this.y-(this.diam/2) <= wally.y +wally.height && this.y+(this.diam/2) >= wally.y+ wally.height && this.x >wally.x && this.x <wally.x+wally.width)
    {
      this.y =wally.y+wally.height+(this.diam/2)
    }
    if(this.y+(this.diam/2) >= wally.y && this.y+(this.diam/2) <= wally.y+wally.height && this.x >wally.x && this.x< wally.x+ wally.width)
    {
      this.y =wally.y-(this.diam/2)
      this.jumpCount = 2
    }
  }
  return this
}
