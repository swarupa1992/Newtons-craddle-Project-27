class Rope {
    constructor(bodyA,bodyB,xoffset){ //bodyA = bob,bodyB = roof

        
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB :  {x:xoffset,y:0}
            
        }
        this.xoffset = xoffset;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {

        var pointA = this.rope.bodyA.position;//bob
        var pointB = this.rope.bodyB.position;//roof
        console.log(pointA);
        console.log(pointB);
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x +  this.xoffset,pointB.y);
    }
}

