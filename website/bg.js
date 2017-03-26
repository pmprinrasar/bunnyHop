function backG(i)
{
  this.x =stage.width/2
  this.y = stage.height/2 - 100*i

  this.show = function()
  {
    imageMode(CENTER)
    image(bg[i],this.x,this.y,stage.width,stage.height)
  }
  return this
}
