var arrayLibrary = [
  ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg', 'images/green-diamond.svg'],
  ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg', 'images/green-diamond.svg'],
  ['images/green-diamond.svg', 'images/yellow-triangle.svg','images/red-circle.svg','images/blue-square.svg']
];

var randomArray = arrayLibrary[Math.floor(Math.random() * arrayLibrary.length)];

// standard shuffle array fn
// @see: CHRIS COYIER https://css-tricks.com/snippets/javascript/shuffle-array/
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};// Source for above code: CHRIS COYIER https://css-tricks.com/license/

var winState = [];
var playerInput = [];

var playerOneScore = 0;
var playerTwoScore = 0;

var currentPlayer = 'Player One';
var gameOver = false;

$(document).ready(function() {

var game = {
  displayImg: function(){
    var imgArrayOne = randomArray;
    for(var i = 0; i < imgArrayOne.length; i++){
      var x =  $('<div>').addClass('new-img').prepend('<img src="' + imgArrayOne[i] + '"/>').attr('data-value', i);
      winState.push(x.attr('data-value'));
      x.appendTo('#main-img');
    };
    game.hideImg()
    game.shuffleShowImg()
    game.playerMove();

  },//end displayImg

  hideImg: function(){
    setTimeout(function(){
      $('.new-img').hide();
    }, 3000);//needs to be less than shuffleShowImg
  },//end hideImg

  shuffleShowImg: function(){
    setTimeout(function(){
      var $newImg = $('.new-img');
      var shuffled = Shuffle($newImg);
      for(var i = 0; i < shuffled.length; i++){
        $('#main-img').prepend(shuffled[i]);
      //  $(shuffled[i]).click(function(event) { //this includes the #document as part of the array.stopPropagation not working...
      //     playerMove(event.target)
      //   });
      }
      $($newImg).show();
    }, 3000);
  },//end shuffleShowImg

  playerMove: function (target){
    $('.new-img').click(function(e){
      playerInput.push($(this).attr('data-value'));

      if(playerInput.length === winState.length){
        return game.checkWin()
      }
    });
  },

  checkWin: function (){

    var status = false;

    //Had help with this from Ari Ingber
    for(var i = 0; i < winState.length; i++){
      if(winState[i] === playerInput[i]){
      status = true;
    }
    else{
      status = false;
      break;
    }
    };

    winState = [];
    playerInput = [];

    if(status == true && currentPlayer === 'Player One'){
      playerOneScore ++
      $('.playerone-score').text(playerOneScore)
      // alert('Player One You Win')
    }
    else if(status == false && currentPlayer === 'Player One'){
      alert('That is incorrect Player One')
    }
    else if(status == true && currentPlayer === 'Player Two'){
      playerTwoScore ++
      $('.playertwo-score').text(playerTwoScore)
      // alert('Player Two You Win')
    }
    else if(status == false && currentPlayer === 'Player Two'){
      alert('That is incorrect Player Two')
    }
    game.newPlayer()
  },

  newPlayer: function(){
    if(currentPlayer === 'Player One'){
      currentPlayer = 'Player Two';
      alert('Player Two\'s turn')
    }
    else{
      currentPlayer = 'Player One';
      alert('Player One\'s turn')
    }
    game.nextRound();
  },

  nextRound: function(){
    if(playerOneScore === 3 || playerTwoScore === 3){
      game.finalWinner();
    }
    else{
      $('#main-img').empty();
      game.displayImg();
    }
  },

  finalWinner: function(){

    if(playerOneScore === 3 || playerTwoScore === 3){
      gameOver = true;
      alert('Game Over')
      $('#main-img').empty();

      if(playerOneScore > playerTwoScore){
        alert('Player One Wins')
      }
      else if(playerTwoScore > playerOneScore){
        alert('Player Two Wins')
      }
      else if(playerOneScore === playerTwoScore){
        alert('It\'s a tie')
      }
      game.resetGame();
    }
  },

  resetGame: function(){
    playerOneScore = 0;
    $('.playerone-score').text(playerOneScore)

    playerTwoScore = 0;
    $('.playertwo-score').text(playerTwoScore)

    currentPlayer = 'Player One';
  }
};

//Razaik Boparai's timer code
// function displayTime() {
//       counter = 0;
//       var timer = setInterval(gettime, 1000);
//       function gettime(){
//         counter++;
//         //i++;
//         $('.timer').text('Time: ' + counter);
//       }
//     }
// displayTime();

function startGame(){
  game.displayImg();
};

function start(){
  $('.start').on('click', function(e){return startGame()});
};
start()

});// end document ready
