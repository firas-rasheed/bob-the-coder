'use strict'

//coding challenge....




let bmi = function(mass, height) {
    (mass / height ** 2)
    return bmi;
}

let user1 = {
    fullName: `mark miller`,
    mass: 78,
    height: 1.69,
    calcBmi: function(mass, height) {
        return (this.mass / this.height ** 2);


    },
}




const user2 = {
    fullName: `john smith`,
    mass: 92,
    height: 1.95,
    calcBmi: function(mass, height) {
        return (this.mass / this.height ** 2);


    },
}

if (user1.calcBmi() > user2.calcBmi()) {
    return `marks BMI (${user1.calcBmi()}) is higher than johns BMI(${user2.calcBmi()})`
} else {
    return `johns BMI (${user2.calcBmi()}) is higher than marks BMI(${user1.calcBmi()})`
}




// for loop ^_^..../

for (let rep = 1; rep <= 10; rep++)
    console.log(`lifting weights rep${rep}`)