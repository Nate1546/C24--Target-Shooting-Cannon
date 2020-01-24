class Ground {
  constructor(_x, _y, _width, _height) {
    var options ={
      isStatic : true
    }
    this.body=Bodies.rectangle (_x,_y,_width,_height,options); 
    this.width=_width;
    this.height=_height;
    World.add(world,this.body);
  }

  display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
  }
}