var factorial = function(input) {
  var result = 0;
  for (var i = input; i > 0; i--){
    result += input * (i - 1);
  }
};
