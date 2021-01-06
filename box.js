class Box
{

    constructor(xpos,ypos, width1, height1)
  {

    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0};
   this.body = Bodies.rectangle(xpos,ypos,width1,height1, options);
   this.width = width1;
   this.height = height1;

   World.add(world,this.body);


  }
    

display()
{
    // var position = this.body.position;

    rectMode(CENTER)    
    rect(this.body.position.x,this.body.position.y,this.width,this.height)



}
}
