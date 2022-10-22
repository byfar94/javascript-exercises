const leapYears = function(a) {
    let byFour = a % 4;
    let byHundred = a % 100;
    let byFourHundred = a % 400;

    if (byFour === 0 && byHundred !== 0){
        return true;
    }
    else if (byFourHundred === 0){
        return true;
    }
    else if ((byHundred === 0 && byFourHundred !== 0) || byFour !== 0){
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
