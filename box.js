class Box {
    constructor(x,y,width,height){

        var ball_options ={

            restitution: 1.0,
            fiction:0.3,
            density:1.0
        }
    
        this.ball = Bodies.rectangle(x,y,width,height, ball_options);
        this.width = width
        this.height = height
        World.add(world,this.ball);
    }
    display(){
        var pose = this.ball.position
        var angle = this.ball.angle
        push ()
        translate(pose.x,pose.y)
        rotate(angle)
        rectMode(CENTER);
        fill(255)
    rect(0,0,this.width,this.height);
    pop ()
    }
}