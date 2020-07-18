class Ground{
    constructor(x, y, width ,height){

        var options={
            'restitution': 0.3 ,
            'density' : 1.2 ,
            'friction' : 0.2,
            isStatic : true
        }
     this.body = Bodies.rectangle(x, y, width, height,options);
this.width =width;
 this.height = height;
  World.add(world, this.body);

    }
 display (){
     strokeWeight(2);
     fill("grey");
   var pos = this.body.position; 
    rect(pos.x, pos.y, this.width, this.height);
  rectMode(CENTER);

      
      
}
 }
