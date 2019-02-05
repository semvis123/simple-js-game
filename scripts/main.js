        /*globals blocks */
        /*eslint-disable no-unused-params, no-use-before-define, no-undef-expression, no-unused-vars, no-extra-parens*/
        let blocks = [['x','x','x'],
                      ['o','o','o'],
                      ['x','x','o']];
class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this._currentPlayer = 0;
        this._width = width;
        this._height = height;
        this._playing = true;
        this._ctx = canvas.getContext('2d'); // store context to draw something
        canvas.addEventListener('click', this._onClick, false);
    }
    _createBlocks() {
        blocks.forEach(function (row,i){
            row.forEach(function (block,j){
                blocks[i][j] = new Block(i,j);
                console.log(blocks[i][j]);
            });
        });
    }
    _winning(blocks,x, d) {
        var a=true;
        if (x=="X"){
            this._ctx.strokeStyle = "#FF0000";
        }else{
            this._ctx.strokeStyle = "#0000FF";
        }
        switch (true){
            case (blocks[0][0]._state === x && blocks[0][1]._state === x && blocks[0][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[0][0]._x+game._width / 6 - 10,blocks[0][0]._y+game._height/6);
                    this._ctx.lineTo(blocks[0][2]._x+game._width / 6 + 10,blocks[0][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[1][0]._state === x && blocks[1][1]._state === x && blocks[1][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[1][0]._x+game._width / 6 - 10,blocks[1][0]._y+game._height/6);
                    this._ctx.lineTo(blocks[1][2]._x+game._width / 6 + 10,blocks[1][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[2][0]._state === x && blocks[2][1]._state === x && blocks[2][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[2][0]._x+game._width / 6 - 10,blocks[2][0]._y+game._height/6);
                    this._ctx.lineTo(blocks[2][2]._x+game._width / 6 + 10,blocks[2][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[0][0]._state === x && blocks[1][0]._state === x && blocks[2][0]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[0][0]._x+game._width / 6 - 10,blocks[0][0]._y+game._height/6);
                    this._ctx.lineTo(blocks[2][0]._x+game._width / 6 + 10,blocks[2][0]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[0][1]._state === x && blocks[1][1]._state === x && blocks[2][1]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[0][1]._x+game._width / 6 - 10,blocks[0][1]._y+game._height/6);
                    this._ctx.lineTo(blocks[2][1]._x+game._width / 6 + 10,blocks[2][1]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[0][2]._state === x && blocks[1][2]._state === x && blocks[2][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[0][2]._x+game._width / 6 - 10,blocks[0][2]._y+game._height/6);
                    this._ctx.lineTo(blocks[2][2]._x+game._width / 6 + 10,blocks[2][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[0][0]._state === x && blocks[1][1]._state === x && blocks[2][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[0][0]._x+game._width / 6 - 10,blocks[0][0]._y+game._height/6);
                    this._ctx.lineTo(blocks[2][2]._x+game._width / 6 + 10,blocks[2][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (blocks[0][2]._state === x && blocks[1][1]._state === x && blocks[2][0]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(blocks[0][2]._x+game._width / 6 - 10,blocks[0][2]._y+game._height/6);
                    this._ctx.lineTo(blocks[2][0]._x+game._width / 6 + 10,blocks[2][0]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            default:
                a=false;
        }
        return a;
    }
    _onClick(click) {
        if(game._playing){
            blocks.forEach(function (row,i){
                row.forEach(function (column,j){
                    if (click.x-10 > blocks[i][j]._x && click.x-10 < blocks[i][j]._x+blocks[i][j]._blockWidth){
                        if (click.y-10 > blocks[i][j]._y && click.y-10 < blocks[i][j]._y+blocks[i][j]._blockHeight){
                            blocks[i][j]._click();
                        }
                    }
                });
                
            });
        }

    }
    _play() {
        this._clear(); // clear the whole canvas to draw something new
        this._ctx.lineWidth = 3;
        this._ctx.strokeStyle = "#000";
        this._drawBorder(); // draw a game area border
        this._drawBlocks(); // draw the blocks for the 'X' or 'O'
        if (this._playing){
        if(this._winning(blocks,"X",true)){
           alert("X won!!");
           this._playing=false;
        }
        if(this._winning(blocks,"O",true)){
            alert("AI won!!");
            this._playing=false;
        }
        }else{
            this._winning(blocks,"X",true)
            this._winning(blocks,"X",true)
        }
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
    _ai(){
        var emptySpots = [];
        console.log(emptySpots);
        blocks.forEach(function (row,i){
            row.forEach(function (column,j){
                if(blocks[i][j]._state==''){
                    emptySpots.push([i,j]);
                }
            })
        });
        console.log(emptySpots);
        if(emptySpots.length==0){
            console.log("tie");
            alert("tie!");
            this._playing=false;
        }
        var topScore = -10;
        var bestSet = [];
        emptySpots.forEach(function (emptySpot){
           var score=0;
           var blocksAfterSet = JSON.parse(JSON.stringify(blocks));
           blocksAfterSet[emptySpot[0]][emptySpot[1]]._state = 'O';
           if(game._winning(blocksAfterSet,'O',false)){
               score+=100;
           }
           blocksAfterSet[emptySpot[0]][emptySpot[1]]._state = 'X';
           if(game._winning(blocksAfterSet,'X',false)){
               score+=10;
           }
           if (score>topScore){
                topScore=score;
                bestSet=[emptySpot[0],emptySpot[1]];
            }
        })
        if(topScore!=0){
            blocks[bestSet[0]][bestSet[1]]._click();
        }else if(!blocks[1][1]._isSet){
            blocks[1][1]._click();
        }else if(!blocks[0][0]._isSet){
            blocks[0][0]._click();
        }else if(!blocks[2][0]._isSet){
            blocks[2][0]._click();
        }
        else if(!blocks[2][2]._isSet){
            blocks[2][2]._click();
        }
        else if(!blocks[0][2]._isSet){
            blocks[0][2]._click();
        }

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
        this._state = '';
        this._x = this._column*this._blockWidth;
        this._y = this._row*this._blockHeight;
    }
    _draw() {
        this._game._ctx.beginPath();
        this._game._ctx.rect(this._x, this._y, this._blockWidth, this._blockHeight);
        this._game._ctx.stroke();
        this._game._ctx.font = "30px Arial";
        if(this._state==='X'){
            this._game._ctx.fillStyle = "red";
        }
        else{
            this._game._ctx.fillStyle = "blue";
        }

        this._game._ctx.fillText(this._state, this._x+(this._blockWidth / 2)-9, this._y+(this._blockHeight / 2)+9);
    }
    _click(){
        if(!this._isSet){
            if (this._game._currentPlayer===0){
                this._state = 'X';
                this._isSet = true;
                this._game._currentPlayer = 1;
                game._ai();
            }
            else{
                this._isSet = true;
                this._state = 'O';
                this._game._currentPlayer = 0;
            }
        }
    }

}
var game = new Game(document.getElementsByTagName('canvas')[0], 300, 300); // create an instance of the game
game._createBlocks();
game._play(); // start it