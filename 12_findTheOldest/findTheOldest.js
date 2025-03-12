const findTheOldest = function(people) {

let ages = [];

for (person in people) {
    if (people[person]['yearOfDeath'] == undefined)
        people[person]['yearOfDeath'] = 2024;
    let n = (people[person]['yearOfDeath'] - people[person]['yearOfBirth']);
    ages.push(n);
}

let agesLength = ages.length;
let largest = 0;
let position = 0;

for (let i = 0; i < agesLength; i++){
    if (ages[i] > largest){
        largest = ages[i];
        position = i;
    }
}

return( people[position]);

};

// Do not edit below this line
module.exports = findTheOldest;
