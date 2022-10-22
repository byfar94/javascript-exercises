const removeFromArray = function(...removal) {
    const arrayOne = removal[0];
    const newArray = [];

    arrayOne.forEach((item) => {
        if (!removal.includes(item)) {
            newArray.push(item);
          }
        });

return newArray;
};

console.log(removeFromArray([1,2,3,4]), 3);

// Do not edit below this line
/*module.exports = removeFromArray;*/
