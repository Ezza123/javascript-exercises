
  const removeFromArray = function (...arg) {
    let array = arg[0];
    let newArray = [];
  
    array.forEach((item) => {
      if (!arg.includes(item)){
        newArray.push(item);
      }
    })
    return newArray;
  }


// store the index of the items to be removed in new array. 
// loop the splice method to remove it for each element in the new array. 


// Do not edit below this line
module.exports = removeFromArray;
