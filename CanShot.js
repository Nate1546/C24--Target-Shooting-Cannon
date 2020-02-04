class CanShot{
    constructor(bodyA, pointB){
  
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.7,
            damping:0.1,
            length: 0
        }
      
        this.pointB=pointB;
        this. sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    shoot(){
        this.sling.bodyA = null;
    }

    display(){
      
    }
    
}