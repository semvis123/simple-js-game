let blocks=[[],[],[]];
class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this._width = width;
        this._height = height;
        this._ctx = canvas.getContext('2d'); // store context to draw something
    }

    play() {
        this._clear(); // clear the whole canvas to draw something new
        this._drawBorder(); // draw a game area border
        this._drawBlocks();
        requestAnimationFrame(this.play.bind(this)); // run play again ~60 times per sec    
    }
    _drawBlocks(){
        blocks.forEach(function (row){
            row.forEach(function (block));
        })
    }
    _drawBorder() {
        this._ctx.beginPath();
        this._ctx.rect(0, 0, this._width, this._height);
        this._ctx.stroke();
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
    }
}
class Block{
    constructor(){
        this.isSet=false;
    }
    
}
var game = new Game(document.getElementsByTagName('canvas')[0], 300, 300); // create an instance of the game
game.play(); // start it