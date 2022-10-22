const ftoc = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  let tempCRound = Math.round(tempC * 10)/10;
  return tempCRound;
};

console.log(ftoc(32));

const ctof = function(tempC) {
  let tempF = (tempC * (9/5)) + 32;
  let tempFRound = Math.round(tempF * 10)/10;
  return tempFRound;
}

console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
