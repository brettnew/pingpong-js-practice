// Back-end Logic
var numbersList = function(numberInput){
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
  }
  return numbersArray;
};


// User-Interface Logic
$(document).ready(function(){
  $("#button-submit").click(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var result = numbersList(numberInput);
    result.forEach(function(result)
     { $("ul#result").append("<li>" + result +"</li>");
    });
  });
});
