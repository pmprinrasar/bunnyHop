function wall(x,y,small, vertical)
{
  this.x=x
  this.y=y
  this.width = 0
  this.height = 0
  this.small = small
  this.vertical = vertical
  this.image = 0
  if(vertical)
  {
    this.image += 2
  }
  if(small)
  {
    this.image++

  }
  this.show = function()
  {
    //fill(100,200,100)
    this.width = earth[this.image].width/2
    this.height = earth[this.image].height/2
    imageMode(CORNER)
    image(earth[this.image],this.x,this.y,this.width,this.height)
  }

  return this
}
