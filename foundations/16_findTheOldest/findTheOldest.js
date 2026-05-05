const findTheOldest = function(array) {
  let currentOldest = {
    age: 0,
    name: null,
  };

  for (person of array) {
    let thisPersonAge = person.yearOfDeath - person.yearOfBirth;

    if (thisPersonAge > currentOldest.age) {
      currentOldest.age = thisPersonAge;
      currentOldest.name = person.name
    }
  };

  return currentOldest
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
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
    ];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
