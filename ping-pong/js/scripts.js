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
    // var numberList = $("ul").append("<li>" + numberInput + "</li>");
debugger;

var numbersArray = [];
for(var index = 1; index <= numberInput; index++){
  if (index%3 === 0){
    numbersArray.push("ping")
  }
}
//   numbersArray.push(index);
// }
alert(numbersArray);
var numbersList = function (number){
  var newArray = numbersArray.map(function(value){
  if (value%15 === "0"){
    return "pingpong"
  }
});
}



    // var result = function(numberInput){
    //   for (var i = 1; i <= numberInput; i++){
    //     if (isNaN(numberInput) || (numberInput%1 != 0)) {
    //       alert("Please enter a valid integer!");
    //     }
    //
    //   }
    // }









//
// debugger;
//
//   var numbersArray = [];
//   var numbersList = function(numberInput){
//    for (var i=0; i <= numberInput; i++){
//     if(i%15===0){
//       numbersArray.push("pingpong");
//     }
//     else {
//       numbersArray.push(i);
//     }
//   };
//   return numbersArray;
// };
// alert(numbersArray);







    // var result = numbersArray
    // $("ul").append("<li>" + result  +"</li>")
//   });
// });


// STring
// debugger;
// for (var i = 1; i <= numberInput; i++){
//   var numberList = i
//   // $("ul").append("<li>" + numberList +"</li>");
//   var replaceNumber = function (numberInput){
//     if (i%3===0) {
//       return numberList.replace(i, "ping");
//     }
//   $("ul").append("<li>" + numberList +"</li>");
// alert (numberList);
//   }
// }




//
// var numbersArray = [];
// for (var i = 1; i <= numberInput; i++){
//   numbersArray.push(i);
// }

// for (var i =0; i < numbersArray.length; i++){
//   var indexNumbers = numbersArray[i];
//   if (parseInt(indexNumbers)%3===0){
//     indexNumbers = 'ping';
//     alert(numbersArray);
//   }
// }





// alert(numbersArray);
// // var numberList = function(numberInput){
// // var numbersArray = [];
// // for (var i = 1; i <= numberInput; i++){
// //
// // }
// //   // if (!numberInput) {
//   //   alert ("Please enter a valid integer!");
//   //   }
// //     else if (numberInput ){}
// //       for (var i = 1; i <= numberInput; i ++){
// //         var numberDisplay = i;
// //     }
// //   }
// // }
//
//
});
});
