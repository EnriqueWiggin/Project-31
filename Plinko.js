class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r)
      this.color=color(random(0,225),random(0,225),random(0,225));
      World.add(world, this.body);
    }
    display(){
      var pos =this.Body.Position;
      circle(pos.x, pos.y, this.r);
    }
  }