class Cannon extends BaseClass{
  constructor(_x, _y, _width,_height,_angle) {
    super(_x,_y,_width,_height);  
    this.angle=_angle;
  
    Matter.Body.setAngle(this.body, this.angle);
  }
 
  display(){
  var pos=this.body.position;
    var angle=this.angle;
    push();
    fill("red");
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CORNERS);
    //  image(this.image, 0, 0, this.width, this.height);
    rect(0,0,this.width,this.height);
    pop();
  }

//  align(){
 // incline1=map(mouseX,0,800,10,50);
 // return incline1;  
 // }





}


