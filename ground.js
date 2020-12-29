class Ground{
    constructor(){
    
        var groundOptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,390,1200,20,groundOptions);
        this.width=1200;
        this.height=20;
        World.add(world,this.body);
    }
    
       display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
       }
    }