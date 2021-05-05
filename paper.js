class Paper{
    constructor(x, y){
       this.x=x;
       this.y=y; 
       this.image=loadImage("paper.png"); 
       this.body=Bodies.circle(x, y, 25, {restitution: 0.5});
       World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.image, 0, -20, 50, 50);    
        pop();
    }

}