class Paper {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 55, 55,options);
        this.width = 55;
        this.height = 55;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.position;

        Push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight=3
        fill=("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}