var factorial = function(input) {
  var result = input;

  for (var i = input; i > 1; i--){
    result *= (i - 1);
  } 

  if (result === 0) {
    result++;  
  }

  return result
};
