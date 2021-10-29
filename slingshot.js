class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    /*display(){       
        if(this.slingshot.bodyA){
             var pointA = this.slingshot.bodyA.position;
             var pointB = this.pointB;

        push();

        stroke(48,22,8);
             
        if(pointA.x < 220){
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            }
        else{
            strokeWeight(3);
            line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
            }
        pop();
        }
    }*/
}
