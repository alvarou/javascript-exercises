//function to find the oldest person in the array 
//the oldest person is the greatest difference between their year of birth and death
//if someone is still alive, their year of death is set to the current year
const findTheOldest = function(people) {
    let oldest = people[0];
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = people[i];
        }
    }
    return oldest;
}

//array function to find the oldest person in the array
const findTheOldest2 = function(people) {
    const ordered = people.sort((a, b) => ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) ? -1 : 1);
    return ordered[0];
}

// Do not edit below this line
module.exports = findTheOldest;
