class CannonBall extends BaseBall{
    constructor(_x,_y,_radius){
      super(_x,_y,_radius);
      var options = {
      //stiffness:1,
      isStatic:false   
      }
      this.radius=_radius;
      this.body=Bodies.circle(_x,_y,this.radius,options);
  //  this.ballImage=loadImage('./Images/cannonBall.png');
      World.add(world,this.body);  
    };
    
    display() {
      var pos=this.body.position;
    //  imageMode(CENTER);
    //  image(this.ballImage,0,0,25,25);
      fill ("red");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
      
    }
}
