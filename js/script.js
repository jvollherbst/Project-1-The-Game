$(document).ready(function() {
//Nested array loop—worked on with Ari
// var complexArray = [[1,2,3],[4,5,6]];
//
// for(var i = 0; i < complexArray.length; i++){
//   var otherArray = complexArray[i];
//
//   for(var j = 0; j < otherArray.length; j++){
//     console.log(otherArray[j]);
//   }
// }


// This interferes with my displayImg funcion...why?
// var arrayLibrary = {
//   [arrayOne: ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg']],
//   [arrayTwo: ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg']],
// }

function displayImg(){//Should be a constructor function
  var imgArrayOne = ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg'];

  for(var i = 0; i < imgArrayOne.length; i++){
    $('<div>').addClass('new-img').appendTo('#main-img').prepend('<img src="' + imgArrayOne[i] + '"/>');
  }
}//end displayImg

//displayImg();

function hideImg(){
  setTimeout(function(){
    $('.new-img').hide();
  }, 4000);
}//end hideImg

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};// Source: https://css-tricks.com/snippets/javascript/shuffle-array/

function shuffleArray(){
  var imgArrayOne = ['images/blue-square.svg', 'images/red-circle.svg', 'images/yellow-triangle.svg'];

  var shuffledArray = imgArrayOne.sort(function() { return 0.5 - Math.random() });

  //var shuffledArray = Shuffle(imgArrayOne);

  for(var i = 0; i < shuffledArray.length; i++){
    $('<div>').addClass('new-img').appendTo('#main-img').prepend('<img src="' + shuffledArray[i] + '"/>');
  }
}
shuffleArray();

function playerMove(){
  //should check user's onclicks and match against source array 
}




});// end document ready
