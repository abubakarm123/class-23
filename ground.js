class Ground {
constructor(x,y,width,height,){
    var ground_options ={
        isStatic: true
    }

    this.ground = Bodies.rectangle(x,y,width,height,ground_options);
    this.width = width
    this.height = height
    World.add(world,this.ground);
}
display(){
    var pose = this.ground.position
    rectMode(CENTER);
    fill(255)
rect(pose.x,pose.y,this.width,this.height);
}
}