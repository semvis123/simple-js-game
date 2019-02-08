var humanPlayer, aiPlayer;
humanPlayer = 'x';
aiPlayer = 'o';
var cells = document.querySelectorAll(".cell");

/** Tic Tac Toe game object **/
var TicTacToe = {
  checkWinner : function(arr, player){
    if(
      (arr[0] === player && arr[1] === player && arr[2] === player)||
      (arr[3] === player && arr[4] === player && arr[5] === player)||
      (arr[6] === player && arr[7] === player && arr[8] === player)||
      (arr[0] === player && arr[3] === player && arr[6] === player)||
      (arr[1] === player && arr[4] === player && arr[7] === player)||
      (arr[2] === player && arr[5] === player && arr[8] === player)||
      (arr[0] === player && arr[4] === player && arr[8] === player)||
      (arr[2] === player && arr[4] === player && arr[6] === player)
    ){
      return true;
    }
    else{
      return false;
    }
  },//checkWinner function.

  getAvailableSpots : function(arr){
    var spots = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== "x" && arr[i] !== "o"){
        spots.push(i);
      }
    }
    return spots;
  },// getAvailableSpots function.

  minimax : function(newBoard, player){
    newBoard = Array.from(newBoard);
    var availSpots = this.getAvailableSpots(newBoard);
    if(this.checkWinner(newBoard, aiPlayer)){
      return {score: 10};
    }
    else if(this.checkWinner(newBoard, humanPlayer)){
      return {score: -10};
    }
    else if(availSpots.length === 0){
      return {score: 0};
    }

    var moves = [];

    for(var j = 0; j < availSpots.length; j++){
      var move = {};
      move.index = availSpots[j];
      newBoard[availSpots[j]] = player;//[0,2]
      if(player === aiPlayer){
        var result1 = this.minimax(newBoard, humanPlayer);
        move.score = result1.score;
      }
      else{
        var result2 = this.minimax(newBoard, aiPlayer);
        move.score = result2.score;
      }

      newBoard[availSpots[j]] = move.index; //
      moves.push(move);
    }

    var bestMove;
    if(player === aiPlayer){
      var bestScore1 = -100000;
      for(var k = 0; k < moves.length; k++){
        if(moves[k].score > bestScore1){
          bestScore1 = moves[k].score;
          bestMove = k;
        }
      }
    }
    else{
      var bestScore2 = 100000;
      for(var l = 0; l < moves.length; l++){
        if(moves[l].score < bestScore2){
          bestScore2 = moves[l].score;
          bestMove = l;
        }
      }
    }

    return moves[bestMove];
  }// minimax function.


};//TicTacToe object literal.

function move(e){
  if(e.target.className === "cell" && e.target.textContent === ""){
    e.target.textContent = humanPlayer;
    var result = TicTacToe.minimax(domBoardToArray(cells), aiPlayer);
    cells[result.index].textContent = aiPlayer;
  }
}

function domBoardToArray(cells){
  return Array.prototype.slice.call(cells).map(function (cell){
    return cell.textContent
  })
}


document.querySelector('.cells').addEventListener('click', move);