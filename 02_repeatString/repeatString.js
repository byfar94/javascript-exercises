const repeatString = function(string,num) {
    if (num > 0){
        let newAr = [string];
        for (let i = 1; i <= (num-1); i++){
            newAr.push(string);
        }
        let newString = newAr.join("");
        return newString;
    }
    else if (num === 0 || string === ""){
        return "";
    }
    else {
        return "ERROR";
    }
};
const number = Math.floor(Math.random() * 1000);




// Do not edit below this line
module.exports = repeatString;
