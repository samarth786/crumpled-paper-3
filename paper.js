class Paper{
    constructor(x, y, width ,height){

        var options={
            'restitution': 0.3 ,
            'density' : 10.2,
            'friction' : 0.5 
         
        }
     this.body = Bodies.rectangle(x, y, width, height,options);
this.width =width;
 this.height = height;
 this.image = loadImage("download.jpg");
  World.add(world, this.body);

    }
 display(){
     strokeWeight(0);
     fill("cyan");
   var pos = this.body.position; 
  imageMode(CENTER);
//ellipse(pos.x, pos.y, this.width, this.height);
image(this.image, pos.x, pos.y, this.width, this.height);
}

     
} 
