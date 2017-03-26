function wall(x,y,w,h)
{
  this.x=x
  this.y=y
  this.width=w
  this.height=h

  this.show = function()
  {
    fill(100,200,100)
    rect(this.x,this.y,this.width,this.height)
  }

  return this
}
