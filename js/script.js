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

// Source for below code: CHRIS COYIER https://css-tricks.com/snippets/javascript/shuffle-array/
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};// Source for above code: CHRIS COYIER https://css-tricks.com/license/

//what is a better way to organzie all your functions...

$(document).ready(function() {

function displayImg(){//Should be a protoype???
  var imgArrayOne = randomArray;

  for(var i = 0; i < imgArrayOne.length; i++){
    $('<div>').addClass('new-img').appendTo('#main-img').prepend('<img src="' + imgArrayOne[i] + '"/>').addClass([i]);
  }

  function hideImg(){
    setTimeout(function(){
      $('#main-img').empty();
    }, 4000);
  }//end hideImg
  hideImg();

  function shuffleArray(){
    setTimeout(function(){

    var shuffledArray = Shuffle(imgArrayOne);

    for(var i = 0; i < shuffledArray.length; i++){
      $('<div>').addClass('choice-img').appendTo('#main-img').prepend('<img src="' + shuffledArray[i] + '"/>');
      //$('img').attr('class', [i]);
    }
    }, 6000);
  }
  shuffleArray();
}//end displayImg

displayImg();



function playerMove(){
  //should check user's onclicks and match against source array
  //should return true if a match, and false if not a match
}

function checkWin(){
  //should check results of playerMove function

  //if user clicks are === to a particular array (arrayLibrary[2], then return true/win message)
  //if win, player receives 1 point
  //else, alert user they are wrong
  var playerScore;
}




});// end document ready
