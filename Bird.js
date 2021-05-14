class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.trajetory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
   
    //console.log(this.trajetory.length);
    console.log(pos);
    if(this.body.velocity.x>1 && this.body.position.x>200){
      var pos=[this.body.position.x,this.body.position.y];
      this.trajetory.push(pos);

    }



    for(var i=0;i<this.trajetory.length;i++){
      image(this.smoke,this.trajetory[i][0],this.trajetory[i][1]);
    }
  }
}
