const reverseString = function(text) {
  let arrayToReverse = text.split('');
  let reversedArray = arrayToReverse.reverse();
  let string = reversedArray.join('');
  
  return string 
};


// Do not edit below this line
module.exports = reverseString;
