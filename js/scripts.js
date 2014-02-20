var factorial = function(input) {
  var result = input;

  if (input === 0) {
    result++;  
  } else {
    for (var i = input; i > 1; i--){
      result *= (i - 1);
    }
  }

  return result;
};
