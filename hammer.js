class Hammer {

    constructor(x,y){

    var options = {

        'restitution': 0.5,
        'friction': 1,
        'density' : 2,
    }

    this.body = Bodies.rectangle(x,y,50,50, options)
    this.width = 100
    this.height = 50

    World.add(world,this.body)

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        pos.x = mouseX
        pos.y = mouseY
        rectMode(CENTER)
        fill("yellow")
        strokeWeight(5)
        stroke("white")
        rect(0,0,this.width,this.height)
        pop();

    }

}