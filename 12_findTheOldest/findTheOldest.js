const findTheOldest = function() {
    let people = arguments[0];
    let oldest = people.reduce(getOldest)

    return oldest; 

    function getOldest(current, candidate) {
        let currentAge = getAge(current);
        let candidateAge = getAge(candidate);

        return candidateAge > currentAge ? candidate : current;
    }

    function getAge(person) {
        let maxLivingAge = new Date().getFullYear();
        if (person.yearOfDeath != null) {
            maxLivingAge = person.yearOfDeath;
        } 

        return maxLivingAge - person.yearOfBirth;
    }

};

// Do not edit below this line
module.exports = findTheOldest;
