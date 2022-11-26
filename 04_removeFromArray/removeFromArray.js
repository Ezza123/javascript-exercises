
  const removeFromArray = function (...arg){

    let newArray = [];
    let array = [arg[0]];

    array.forEach((item) => {
        if (!arg[0].includes(item)){
        newArray.push(item);
        }
    })
}
  


// Do not edit below this line
module.exports = removeFromArray;
