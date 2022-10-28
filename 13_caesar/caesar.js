
const caesar = function(string, delta) {
    let newAr = [];

    for (i=0; i < string.length; i++){
        let code = string.charCodeAt(i);
        console.log(code);
        let newCode = code + delta;
        console.log(newCode);
        newAr.push(String.fromCharCode(newCode));
    }
    console.log(newAr);
    newString = newAr.join("");
    console.log(newString);
        
        
};

console.log(caesar("hello, world!", 5));

//console.log(string.codePointAt());



// Do not edit below this line
//module.exports = caesar;
