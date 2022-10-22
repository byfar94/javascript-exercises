const palindromes = function (string) {
    //replaced all non-letter (/\W), case insensitive (i), globally (g). Then replaced these with "" and creates a new string.
    let newStr = string.replace(/\W/ig, "");

    let lowStr = newStr.toLowerCase();
    let newArr = lowStr.split("");
    let revArr = newArr.reverse();
    let finalStr = revArr.join("");

    /*console.log(lowStr);
    console.log(newArr);
    console.log(revArr);
    console.log(finalStr);*/

    if (lowStr == finalStr){
        return true;
    }
    else if (lowStr != finalStr){
        return false;
    }
};

//console.log(palindromes("Racecar!"));



// Do not edit below this line
module.exports = palindromes;
