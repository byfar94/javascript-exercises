let fibAr = [1,1];
let a = 1;
let b = 1;
let result;

const fibonacci = function(num) {
    if (num > 0 && num < 100){
        for (let i = 1; i < 25; i++)
        {
        result = a + b;
        a = b;
        b = result;
        fibAr.push(result);
        }
    }
    else if (Number(num) < 0) {
        return "OOPS"
    }

    return fibAr[(Number(num)-1)]
}


// Do not edit below this line
module.exports = fibonacci;
