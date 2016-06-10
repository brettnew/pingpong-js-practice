// User-Interface Logic
$(document).ready(function(){
  $("#button-submit").click(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    // var result = numbersList(numberInput);
    // $("#result").text(result);



debugger;
  // var numbersList = function(numberInput){
    var numbersArray = [];
    for(var index = 1; index <= numberInput; index++){
     if (index%15 === 0){
        numbersArray.push("pingpong");
      }
      else if (index%5 === 0){
        numbersArray.push("pong");
      }
      else if (index%3 === 0){
        numbersArray.push("ping");
      }
      else {
        numbersArray.push(index);
      }
      var numbersString = numbersArray.toString();
      // return "<li>" + numbersString + "</li>"
    }
  // };
  alert(numbersString);



  // var result = numbersList(numberInput);
  // $("#result").text(result);
//
//     // for (var index = 0; index <= numbersArray.length-1; index++){
//     // var numbersString = numbersArray.toString("<li>" + index +"</li>");
//     // };
// alert (numbersString);
//   });
// });





  });
});
