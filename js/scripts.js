var factorial = function(input) {

  if (input === 0) {
    input++;  
  } else {
      if (input > 1) {
        return input * (factorial(input - 1));
      }
    }
  return input;
};


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var input = parseInt($("input#input").val());
    var result = factorial(input);
    $(".input").html("<h1>"+result+"</h1>");
    event.preventDefault();
  });

});
