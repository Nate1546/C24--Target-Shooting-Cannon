class BaseBall {
  constructor(_x,_y,_radius) {
    var options ={
   //     frictionAir: 0.1,
   //     friction: 0.1,
   //     frictionStatic: 1,
        inertia: 5,
   //     restitution: 0.5,
        isStatic :true
    }
     
    this.body=Bodies.circle(_x,_y,_radius,options);
    this.radius=_radius;
    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
    //imageMode(CENTER);
    //image(this.image,pos.x,pos.y,);
    push();
    fill ("black");
    push();
    translate(pos.x,pos.y);
    // rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    pop();
  }
}
