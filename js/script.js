//Nested array loop—worked on with Ari
// var arrayLibrary = [[1,2,3],[4,5,6]];
//
// for(var i = 0; i < complexArray.length; i++){
//   var otherArray = complexArray[i];
//
//   for(var j = 0; j < otherArray.length; j++){
//     console.log(otherArray[j]);
//   }
// }

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

//$('.new-img').click(function(event){console.log($(event.target).children());});
//$(this).click(function(e){console.log(e.toElement)});

var winState = [];
var compare = [];

$(document).ready(function() {

function displayImg(){
  var imgArrayOne = arrayLibrary[0];
  for(var i = 0; i < imgArrayOne.length; i++){
    $('<div>').addClass('new-img').appendTo('#main-img').prepend('<img src="' + imgArrayOne[i] + '"/>').attr('data-value', i);
    winState.push(imgArrayOne[i]);
  };
  compare.push(winState);
  console.log(compare);
};//end displayImg

function hideImg(){
  setTimeout(function(){
    $('.new-img').hide();
  }, 4000);//needs to be less than shuffleShowImg
  //debugger;
};//end hideImg
hideImg();

function shuffleShowImg(){
  setTimeout(function(){
    var $newImg = $('.new-img');
    var shuffled = Shuffle($newImg);
    for(var i = 0; i < shuffled.length; i++){
      $('#main-img').prepend(shuffled[i]);
      $(shuffled[i]).click(function(event) { //moved click event here, to include in loop
        playerMove(event.target)
      });
    }
    $($newImg).show();
  }, 6000);
};//end shuffleShowImg
shuffleShowImg();


function playerMove(target){
  var playerInput = [];

  playerInput.push(event.target);

  //console.log(playerInput);


  //grab input by on click
  //push into an array for users input
  //empty array outside of while loop

  //should also call a timer function
};
playerMove();

function checkWin(){
  //should check results of playerMove function

  //if user clicks are === to a particular array (arrayLibrary[2], then return true/win message)
  //if win, player receives 1 point
  //else, alert user they are wrong
  var playerScore;
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
//Razaik Boparai's timer code


function startGame(){
  $('.start').on('click', displayImg());
};
startGame();

});// end document ready
