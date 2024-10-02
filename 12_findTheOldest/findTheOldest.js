const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    return people
        .map(person => {
            if (person.yearOfDeath === undefined) person.yearOfDeath = currentYear;
            return person;
        })
        .sort((a, b) => {
            return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
