
//we create an object drop first and the create an array of those objects
//So, a class Drop is cretaed

class EnemyFire{
  constructor(_x){
    this.x  =_x||0;// random x position ie width because anywhere along the width of screen
    this.y = random(-height/2,-10);//negative values so that drop begins off screen to give a realistic effect
    this.yspeed=.01;
    this.z  = random(0, 20);// to give a perspective view , farther and nearer drops effect
    this.dropLen = 10;
    this.thick = 1;
    this.gravity=0.1;
  }

  reset (){
    this.x = random(600,width);// x postion of drop
    this.y = random(-height/2,-10);// y position of drop
    this.yspeed = random(2,4);// speed of the drop
    this.z  = random(0, 20); // determines whether the drop is far or near, (closer, higher z)
    this.dropLen = map(this.z, 4,20,3,10);// if z is near then drop is longer 
    this.thick = map(this.dropLen,0,20,3,5);//
  }

  fall() { // function  to determine the speed and shape of the drop 
    this.y = this.y + this.yspeed; // increment y position to give the effect of falling 
    this.gravity=map(this.z,0,20,0,0.5);//if z is near then gravity on drop is more
    this.yspeed += 0.01;
    this.yspeed = this.yspeed + this.gravity; // speed increases as gravity acts on the drop
    
    if (this.y > height) { // repositions the drop after it has 'disappeared' from screen
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 2, 4);
    }
  }

  show() { // function to render the drop onto the screen
    push();
    strokeWeight(this.thick); // weight of the drop
    //fill(255, 0, 26); // purple color
    stroke(200,0,40);
    //rect(this.x, this.y, 1, this.y+this.dropLen);
    //ellipse(this.x,this.y,this.dropLen);
    line(this.x, this.y, this.x, this.y+this.dropLen); // draws the line with two points 
    pop();
  }
}
