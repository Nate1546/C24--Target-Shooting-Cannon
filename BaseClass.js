class BaseClass{
    constructor(_x, _y, _width, _height,) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true
        }
        this.width= _width;
        this.height= _height;
        this.x=_x;
        this.y=_y;
        this.body = Bodies.rectangle(this.x,this. y,this.width,this.height, options);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        fill("green");
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
      //  image(this.image, 0, 0, this.width, this.height);
        rect(0,0,this.width,this.height);
        pop();
    }
}