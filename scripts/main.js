let blocks=[[0,0,0],
            [0,0,0],
            [0,0,0]];
class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this._width = width;
        this._height = height;
        this._ctx = canvas.getContext('2d'); // store context to draw something
    }
    _createBlocks() {
        blocks.forEach(function (row,i){
            row.forEach(function (column,j){
                blocks[i][j] = new Block(i,j);
                console.log(blocks[i][j]);
            });
        });
    }
    _play() {
        this._clear(); // clear the whole canvas to draw something new
        this._drawBorder(); // draw a game area border
        this._drawBlocks();
        requestAnimationFrame(this._play.bind(this)); // run play again ~60 times per sec    
    }
    _drawBlocks() {
        blocks.forEach(function (row,i){
            row.forEach(function (column,j){
                blocks[i][j]._draw();
            });
        });
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
    constructor(row,column) {
        this._game = game;
        this._row = row;
        this._column = column;
        this._blockWidth = game._width/3;
        this._blockHeight = game._height/3;
        this._isSet = false;
        this._state = 'X';
        this._x = this._column*this._blockWidth;
        this._y = this._row*this._blockHeight;
    }
    _draw() {
        this._game._ctx.beginPath();
        this._game._ctx.rect(this._x, this._y, this._blockWidth, this._blockHeight);
        this._game._ctx.stroke();
        this._game._ctx.font = "30px Arial";
        if(this._state=='X'){
            this._game._ctx.fillStyle = "red";
        }else{
            this._game._ctx.fillStyle = "blue";
        }

        this._game._ctx.fillText(this._state, this._x+(this._blockWidth / 2)-9, this._y+(this._blockHeight / 2)+9);
    }
}
var game = new Game(document.getElementsByTagName('canvas')[0], 300, 300); // create an instance of the game
game._createBlocks();
game._play(); // start it