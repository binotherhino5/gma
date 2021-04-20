class Paper{
    constructor(){  
        var options = {
            restitution:0.3,
            friction:0,
            density: 1.2
        }
    this.image = loadImage("paper.png")
    this.body = Bodies.circle(30,30,20,options)
    World.add(world,this.body)
    this.r =  20
    }
display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop()
}
}