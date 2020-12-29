class paper {
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.98,
          friction:1.0,
          density:0.80
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      this.image=loadImage("paper.png");
      this.image.scale=0.1;
      World.add(world,this.body);
      
    }

    display(){

        var pos=this.body.position
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}