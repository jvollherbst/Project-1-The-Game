var arrayLibrary = [
  ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg'],
  // ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg', 'images/green-diamond.svg'],
  // ['images/green-diamond.svg', 'images/yellow-triangle.svg','images/red-circle.svg','images/blue-square.svg']
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

$(document).ready(function() {

function displayImg(){
  var imgArrayOne = randomArray;
  for(var i = 0; i < imgArrayOne.length; i++){
    var x =  $('<div>').addClass('new-img').prepend('<img src="' + imgArrayOne[i] + '"/>').attr('data-value', i);
    winState.push(x.attr('data-value'));
    x.appendTo('#main-img');
  };
  hideImg()
  shuffleShowImg()
};//end displayImg

function hideImg(){
  setTimeout(function(){
    $('.new-img').hide();
  }, 3000);//needs to be less than shuffleShowImg
};//end hideImg
// hideImg();

function shuffleShowImg(){
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
};//end shuffleShowImg
// shuffleShowImg();

function playerMove(target){
  $('.new-img').click(function(e){
    playerInput.push($(this).attr('data-value'));

    if(playerInput.length === winState.length){
      return checkWin()
    }
  });
};
// playerMove();

function checkWin(){

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

  if(playerOneScore === 1 || playerTwoScore === 1){
    alert('Game Over')
    if(playerOneScore > playerTwoScore){
      alert('Player One Wins')
    }
    else if(playerTwoScore > playerOneScore){
      alert('Player Two Wins')
    }
    else if(playerOneScore === playerTwoScore){
      alert('It\'s a tie')
    }
    $('#main-img').remove();
  }
  newPlayer()
};
// checkWin()

function newPlayer(){
  if(currentPlayer === 'Player One'){
    currentPlayer = 'Player Two';
    alert('Player Two\'s turn')
  }
  else{
    currentPlayer = 'Player One';
    alert('Player One\'s turn')
  }
  nextRound();
};

function nextRound(){
  $('#main-img').empty();
  displayImg()
  playerMove()
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
  displayImg()
  playerMove()
};

function start(){
  $('.start').on('click', function(e){return startGame()});
};
start()

});// end document ready
