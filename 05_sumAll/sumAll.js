const sumAll = function(start, finish) {

    if (start < 0 || finish < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(start) || !Number.isInteger(finish)){
        return "ERROR";
    }

    let sum = 0;
    if (start < finish){
    for (let i = start; i <= finish; i++){
        sum += i;
        }
    return sum;
    }

    if (start > finish){
        for (let i = finish; i <= start; i++){
            sum += i;
        }
    return sum;
    } 
}

// Do not edit below this line
module.exports = sumAll;