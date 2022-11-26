const sumAll = function(...arg) {

  let sum = 0;

  for (i = 0; i < Math.abs(arg[0] - arg[1]) + 1; ++i){
    if(arg[0] > arg[1]){
      sum += (arg[1] + i);  
       
    } else if ( arg[0] < arg[1]){
      sum += (arg[0] + i);         
    } 
  }
  
  if (typeof (arg[0] + arg[1]) !== 'number' || sum < 0) {
    return "ERROR"
    
  } else {
    return sum;
  }
}





// Do not edit below this line
module.exports = sumAll;
