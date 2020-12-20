class box(){
    constructor(){
        var options = {
            restitution : 2
        }
        this.body = Bodies.rectangle(200,200,50,50,options);

        World.add(world,this.body);

        display(){
            var pos = this.body.position;

            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height)
        }
    }
}