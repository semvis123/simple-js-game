class Player{
    constructor(){
        this.x = 10;
        this.y = 10;
        this.width = 10;
        this.height = 10;
    }
    draw(){
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}
function update(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawAll();
}
function drawAll(){
    
}

c = document.getElementById("game");
ctx = c.getContext("2d");
player = new Player();
player.draw();
