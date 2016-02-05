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
  ['images/yellow-triangle.svg','images/red-circle.svg','images/blue-square.svg',  'images/green-diamond.svg'],
  ['images/green-diamond.svg', 'images/yellow-triangle.svg','images/red-circle.svg','images/blue-square.svg']
];

var randomArray = arrayLibrary[Math.floor(Math.random() * arrayLibrary.length)];

// standard shuffle array fn
// @see: CHRIS COYIER https://css-tricks.com/snippets/javascript/shuffle-array/
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};// Source for above code: CHRIS COYIER https://css-tricks.com/license/


// Array.protoype.shuffle = function() {
// 	return Shuffle(this);
// };// Source for above code: CHRIS COYIER https://css-tricks.com/license/


//$('.new-img').click(function(event){console.log($(event.target).children());});

//$(this).click(function(e){console.log(e.toElement)});

//what is a better way to organzie all your functions...

$(document).ready(function() {

function displayImg(){//Should be a protoype???
  var imgArrayOne = randomArray;
  for(var i = 0; i < imgArrayOne.length; i++){
    $('<div>').addClass('new-img').appendTo('#main-img').prepend('<img src="' + imgArrayOne[i] + '"/>').attr('data-value', i);
  };
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
    }
    $($newImg).show();
  }, 6000);
};//end shuffleShowImg
shuffleShowImg();


function playerMove(){
  //should check user's onclicks and match against source array
  //should return true if a match, and false if not a match
  var playerInput = [];
  //$(this).click(function(e){playerInput.push(e.toElement)});

  //grab input by on click
  //push into an array for users input
  //empty array outside of while loop
};

function checkWin(){
  //should check results of playerMove function

  //if user clicks are === to a particular array (arrayLibrary[2], then return true/win message)
  //if win, player receives 1 point
  //else, alert user they are wrong
  var playerScore;
};

function startGame(){
  $('.start').on('click', displayImg());
};
startGame();

});// end document ready
