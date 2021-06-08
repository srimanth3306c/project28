class Boy{
    constructor(bodyA, pointB){
        var Options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     
        // this.Boy = Constraint.create(Options);
        this.image = loadImage('Pliucking mangoes/boy.png');
        this.pointB = pointB
        World.add(world, this.bodyA);
    }

    // fly(){
    //     this.Boy.bodyA = null;
    // }

    display(){

      
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(38,22,8);
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
           
            
           

            
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
           
          
        }
    }
    
}