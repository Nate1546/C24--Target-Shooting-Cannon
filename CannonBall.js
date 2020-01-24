class CannonBall extends BaseBall{
    constructor(_x,_y,_radius){
      super(_x,_y,_radius);
      var options = {
      density :   1.5,
      friction : 1.0,
      restitution : 1.2,
      frictionAir:0.06,
      isStatic:false
      }
      this.body=Bodies.circle(_x,_y,_radius,options);
      World.add(world,this.body);  
    }
    display() {
      var pos=this.body.position;
    // imageMode(CENTER);
    //  image(this.image,pos.x,pos.y,);
      fill ("red");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
    }
}
