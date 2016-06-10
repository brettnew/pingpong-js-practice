//
//
// if (!numberInput) {
//   alert ("Please enter a valid integer!");
// }
// else if {
//   for (var i = 0; i < numberInput; i ++){
//     var numberDisplay = i;
//   }
// }








// User-Interface Logic
$(document).ready(function(){
  $("#button-submit").click(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

debugger;
    if (!numberInput) {
      alert ("Please enter a valid integer!");
    }
    else {
      for (var i = 1; i <= numberInput; i ++){
        var numberDisplay = i;

        $("ul").append("<li>" + numberDisplay  +"</li>")
      }
    }

  });
});
