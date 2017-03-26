function player(player)
{
  //player variables
  this.x = window.innerWidth/2
  this.y = 400
  this.diam = 50
  this.height = 50 * 5/3
  this.velx=0
  this.vely= gravity
  this.jumpCount=2
  this.dir=0


  //draws the circle
  this.show = function()
  {
    imageMode(CENTER)
    fill(250,150,100)
    //ellipse(this.x,this.y,this.diam,this.diam)
    if(this.velx > 0)
    {
      this.dir = 0
    }
    if(this.velx < 0)
    {
      this.dir = 1
    }
    if(this.velx != 0)
    {
      //walking
      var sprite = (Math.floor(frameCount/7))%2
      if(player == 1)
      {
        image(bunny1[this.dir][sprite], this.x, this.y, this.diam, this.diam*5/3)
      }else{
        image(bunny2[this.dir][sprite], this.x, this.y, this.diam, this.diam*5/3)
      }
    }else{
      //standing
      if(player == 1)
      {
        image(bunny1[this.dir][0], this.x, this.y, this.diam, this.diam*5/3)
      }else {
        image(bunny2[this.dir][0], this.x, this.y, this.diam, this.diam*5/3)
      }
    }
    //this.update()
  }
  //moves the circle
  this.update = function()
  {
    this.x += this.velx
    this.y += this.vely

    //happens when u hit the floor
    /*if(this.y+this.diam >= 500)
    {
        this.jumpCount =2
        this.y-= this.vely
    }*/

    if(this.vely != gravity)
    {
      this.vely ++
    }
    for (var i =0; i<pl.length; i++)
    {
      this.collideX(pl[i])
      this.collideY(pl[i])
    }

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
    if(this.y-(this.height/2) <= wally.y +wally.height && this.y+(this.height/2) >= wally.y+ wally.height && this.x >wally.x && this.x <wally.x+wally.width)
    {
      this.y =wally.y+wally.height+(this.height/2)
    }
    if(this.y+(this.height/2) >= wally.y && this.y+(this.height/2) <= wally.y+wally.height && this.x >wally.x && this.x< wally.x+ wally.width)
    {
      this.y =wally.y-(this.height/2)
      this.jumpCount = 2
    }
  }
  return this
}
