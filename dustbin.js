class Dustbin{
    constructor(x, y, width ,height){

        var options={
            'restitution': 0.3 ,
            'density' : 5.5,
            'friction' : 1 ,
            isStatic : true
        }
     this.body = Bodies.rectangle(x, y, width, height,options);
this.width =width;
 this.height = height;
 this.image = loadImage("downloa.png");
  World.add(world, this.body);

    }
 display (){
     strokeWeight(1);
     fill("red");
   var pos = this.body.position; 
  imageMode(CENTER);

//rect(pos.x, pos.y, this.width, this.height);
      image(this.image, pos.x, pos.y, this.width, this.height);

} 
 } 
