const reverseString = function(str) {
    let Arr = str.split('');

    let revArr = Arr.reverse();

    let revString = revArr.join("");

    return revString;
};



// Do not edit below this line
module.exports = reverseString;
