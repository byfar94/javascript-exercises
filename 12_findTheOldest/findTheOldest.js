//array of objects
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

//console.log(people[0].yearOfDeath === undefined)

function getAge (death, birth){
  if (death === undefined){
    death = 2022;
  } else {
    return death - birth;
  }
}

const findTheOldest = function(people) {
    let yLived = people.sort(function (a, b) {
       let in1 = getAge(a.yearOfDeath, a.yearOfBirth);
       let in2 = getAge(b.yearOfDeath, b.yearOfBirth);
      if (in1 > in2){
        return -1;
      } else {
        return 1;
      }
      })
    return yLived[0];
}


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
