       /*globals blocks */
        /*eslint-disable no-unused-params, no-use-before-define, no-undef-expression, no-unused-vars, no-extra-parens, no-invalid-this, no-param-reassign, no-redeclare*/
        let blocks = [['x','x','x'],
                      ['o','o','o'],
                      ['x','x','o']];
var choice;
class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this._currentPlayer = 0;
        this._width = width;
        this._height = height;
        this._playing = true;
        this._ctx = canvas.getContext('2d'); // store context to draw something
        this._gameNum = 0 ; //counter for game turns
        canvas.addEventListener('click', this._onClick, false);
    }
    _createBlocks() {
        blocks.forEach(function (row,i){
            row.forEach(function (block,j){
                blocks[i][j] = new Block(i,j); //create blocks
                console.log(blocks[i][j]);
            });
        });
    }
    _winning(_blocks, x, d) {// the winning function used for drawing lines
        var a=true;
        if (x==="X"){
            this._ctx.strokeStyle = "#FF0000";//red
        }else{
            this._ctx.strokeStyle = "#0000FF";//blue
        }
        switch (true){
            case (_blocks[0][0]._state === x && _blocks[0][1]._state === x && _blocks[0][2]._state === x):
                if(d){ // use d for enabling drawing
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[0][0]._x+game._width / 6 - 10,_blocks[0][0]._y+game._height/6);
                    this._ctx.lineTo(_blocks[0][2]._x+game._width / 6 + 10,_blocks[0][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[1][0]._state === x && _blocks[1][1]._state === x && _blocks[1][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[1][0]._x+game._width / 6 - 10,_blocks[1][0]._y+game._height/6);
                    this._ctx.lineTo(_blocks[1][2]._x+game._width / 6 + 10,_blocks[1][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[2][0]._state === x && _blocks[2][1]._state === x && _blocks[2][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[2][0]._x+game._width / 6 - 10,_blocks[2][0]._y+game._height/6);
                    this._ctx.lineTo(_blocks[2][2]._x+game._width / 6 + 10,_blocks[2][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[0][0]._state === x && _blocks[1][0]._state === x && _blocks[2][0]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[0][0]._x+game._width / 6 - 10,_blocks[0][0]._y+game._height/6);
                    this._ctx.lineTo(_blocks[2][0]._x+game._width / 6 + 10,_blocks[2][0]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[0][1]._state === x && _blocks[1][1]._state === x && _blocks[2][1]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[0][1]._x+game._width / 6 - 10,_blocks[0][1]._y+game._height/6);
                    this._ctx.lineTo(_blocks[2][1]._x+game._width / 6 + 10,_blocks[2][1]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[0][2]._state === x && _blocks[1][2]._state === x && _blocks[2][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[0][2]._x+game._width / 6 - 10,_blocks[0][2]._y+game._height/6);
                    this._ctx.lineTo(_blocks[2][2]._x+game._width / 6 + 10,_blocks[2][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[0][0]._state === x && _blocks[1][1]._state === x && _blocks[2][2]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[0][0]._x+game._width / 6 - 10,_blocks[0][0]._y+game._height/6);
                    this._ctx.lineTo(_blocks[2][2]._x+game._width / 6 + 10,_blocks[2][2]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            case (_blocks[0][2]._state === x && _blocks[1][1]._state === x && _blocks[2][0]._state === x):
                if(d){
                    this._ctx.beginPath();
                    this._ctx.lineWidth = 5;
                    this._ctx.moveTo(_blocks[0][2]._x+game._width / 6 - 10,_blocks[0][2]._y+game._height/6);
                    this._ctx.lineTo(_blocks[2][0]._x+game._width / 6 + 10,_blocks[2][0]._y+game._height/6);
                    this._ctx.stroke();
                }
                break;
            default:
                a=false;
        }
        return a;
    }
    _onClick(click) {
        console.log(click);
        if(game._playing){
            var rect = document.getElementsByTagName('canvas')[0].getBoundingClientRect();
            var x = click.clientX - rect.left;
            var y = click.clientY - rect.top;
            blocks.forEach(function (row,i){
                row.forEach(function (column,j){
                    if (x > blocks[i][j]._x && x < blocks[i][j]._x+blocks[i][j]._blockWidth){
                        if (y > blocks[i][j]._y && y < blocks[i][j]._y+blocks[i][j]._blockHeight){
                            blocks[i][j]._click(); //call the click funtion of the object which has the cursor/click in it
                        }
                    }
                });
                
            });
        }else{
            game._createBlocks();
            game._currentPlayer = 0;
            game._playing = true;
            game._gameNum = 0;
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
           this._playing = false;
        }else if(this._winning(blocks,"O",true)){
            alert("AI won!!");
            this._playing = false;
        }
        }else{
             if(this._winning(blocks,"X",true)){
               this._playing = false;
            }else if(this._winning(blocks,"O",true)){
                this._playing = false;
            }
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
    _isSimpleWinning(_blocks,x){
        /** a simpler version to check if game state is winning**/
        var a=false;
        if (_blocks[0][0] === x && _blocks[0][1] === x && _blocks[0][2] === x||
            _blocks[1][0] === x && _blocks[1][1] === x && _blocks[1][2] === x||
            _blocks[2][0] === x && _blocks[2][1] === x && _blocks[2][2] === x||
            _blocks[0][0] === x && _blocks[1][0] === x && _blocks[2][0] === x||
            _blocks[0][1] === x && _blocks[1][1] === x && _blocks[2][1] === x||
            _blocks[0][2] === x && _blocks[1][2] === x && _blocks[2][2] === x||
            _blocks[0][0] === x && _blocks[1][1] === x && _blocks[2][2] === x||
            _blocks[0][2] === x && _blocks[1][1] === x && _blocks[2][0] === x){
                a=true;
        }
        return a;
    }
    _clear() {
        this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
    }
    _ai(_game,depth,isAiTurn){// also known as minimax algorithm 
    //restarted from the beginning :)
    var _game = JSON.parse(JSON.stringify(_game)); // deep clone array
    var player = isAiTurn ? 'O' : 'X';
    console.log(_game,depth,isAiTurn);
    if(this._isSimpleWinning(_game,'x')){
        return {score: 10-depth};
    }else if(this._isSimpleWinning(_game,'O')){
        return {score: depth-10};
    }else if(depth>=8){
        return {score: 0};
    }
    var possibleMoves = [];
    _game.forEach(function(row,i){
        row.forEach(function(column,j){
            if(_game[i][j]===''){
                _game[i][j] = player;
                var newBoard = game._ai(_game,depth++,!isAiTurn);
                var score = newBoard.score;
                possibleMoves.push({index: [i,j], score: score});
            }
        })
    });
    possibleMoves.sort(function (a,b) {return a.score - b.score});
    console.log(possibleMoves);
    if(possibleMoves==0){
        return{score:0}
    }
    return(possibleMoves[0]);
    }

}
class Block{ //every block has 'X' or 'O' or ''
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
        this._game._ctx.font = String(parseInt(this._game._height/10, 10))+"px Arial";
        if(this._state==='X'){
            this._game._ctx.fillStyle = "red";
        }
        else{
            this._game._ctx.fillStyle = "blue";
        }

        this._game._ctx.fillText(this._state, this._x+(this._blockWidth / 2)-parseInt(this._game._height / 20, 10), this._y+(this._blockHeight / 2)+9);
    }
    _click(){
        if(!this._isSet){
            this._game._gameNum++;
            console.log(this._game._gameNum);
            if (this._game._currentPlayer===0){
                this._state = 'X';
                this._isSet = true;
                this._game._currentPlayer = 1;
                
                if(this._game._playing){
                    if(this._game._winning(blocks,"X",false)){
                       alert("X won!!");
                       this._game._playing=false;
                    }
                    if(this._game._winning(blocks,"O",false)){
                        this._game._playing=false;
                        alert("AI won!!");
                    }
                    if(this._game._gameNum>=9){
                        this._game._playing=false;
                        alert("tie!!");
                    }
                    else{
                         var simpleGame = [[],[],[]]; // create a simple array which only stores text
                         blocks.forEach(function (row,i){
                             row.forEach(function (column,j){
                                 simpleGame[i][j] = blocks[i][j]._state;
                             });
                         });
                         console.log(simpleGame);
                         let bestChoice = this._game._ai(simpleGame,0,true);
                         console.log(bestChoice);
                         blocks[bestChoice.index[0]][bestChoice.index[1]]._click();
                     
                 }}

            }
            else{
                this._isSet = true;
                this._state = 'O';
                this._game._currentPlayer = 0;
            }
        }
    }

}
var gameWidth = Math.min(window.innerWidth,window.innerHeight)-4;
var game = new Game(document.getElementsByTagName('canvas')[0], gameWidth, gameWidth); // create an instance of the game
game._createBlocks();// create the blocks for the 'X' or 'O' or ''
game._play(); // start it