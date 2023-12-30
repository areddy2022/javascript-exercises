const findTheOldest = function(list) {
    const BASE_YEAR = 2023;
    let dead = list.filter(person => "yearOfDeath" in person);
    let alive = list.filter(person => !("yearOfDeath" in person));
    let unsortedDead = dead.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    let unsortedAlive = alive.sort((a, b) => b.yearOfBirth - a.yearOfBirth);
    let sortedDead = unsortedDead.reverse();
    let sortedAlive = unsortedAlive.reverse();
    const deadPerson = sortedDead[0];
    const alivePerson = sortedAlive[0];
    if(alivePerson == undefined){
        return deadPerson;
    }
    else if(deadPerson.yearOfDeath - deadPerson.yearOfBirth > 2023 - alivePerson.yearOfBirth){
        return deadPerson;
    }
    else{
        return alivePerson;
    }
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
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;