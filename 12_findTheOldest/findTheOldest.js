const findTheOldest = function(people) {

    let peopleAge;
    let date = new Date();
    let fullYear = date.getFullYear();

    peopleAge = people.map(person => {
        if (person["yearOfDeath"] === undefined) {
            person["yearOfDeath"] = fullYear;
        }
        return person["yearOfDeath"] - person["yearOfBirth"];
    })

    peopleAge.sort((a,b) => a -b);
    let oldestAge = peopleAge[peopleAge.length-1];
    
    let oldestPerson = people.filter(person => {
        return (person["yearOfDeath"] - person["yearOfBirth"]) == oldestAge;
    })

    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
