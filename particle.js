class particle{
    constructor(x,y){
        var options={
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,10,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill(this.color)
        circle(pos.x,pos.y,20)
    }
}