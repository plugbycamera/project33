class Snow{
constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.8,
        'frictionAir':0.05,
    }

    this.body = Bodies.circle(x, y, 25, options);
    this.image = loadImage("snow4.webp");
    World.add(world,this.body);
}

display(){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    /*rotate(angle);
    console.log(this.body);*/
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50)
    pop();
}


}