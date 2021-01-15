class Sand {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 10;
      this.height = 10;
      
      Matter.Bodies.circle(200,200,10,10)

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  