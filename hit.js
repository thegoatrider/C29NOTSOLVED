class Hit{
    constructor(x,y,width,height){
    var options = {
      isStatic = false, 
      restitution : 0,
      density : 1
     }
   }

   display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
}

}