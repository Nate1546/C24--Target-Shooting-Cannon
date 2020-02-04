class Cannon extends BaseClass{
  constructor(_x, _y, _width,_height,_angle) {
    super(_x,_y,_width,_height);  
    this.angle=_angle;
    Matter.Body.setAngle(this.body, this.angle);
  }
 
  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    fill("red");
    translate(pos.x,pos.y);
    rectMode(CORNERS);
    rotate(angle);
    rect(0,0,this.width,this.height);
    pop();
  } 
}   
