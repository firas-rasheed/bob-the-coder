'use strict'
// objects & literal notation


const array = [
    `firas`,
    `rasheed`,
]

const array2 = {
    firstName: `firas`,
    lastName: `rasheed`,
    age: 2023 - 2000,
    job: `student`,
    friends: [`a`, `b`, `c`],
};


//various object notations


console.log(array2);
console.log(array2.lastName);

console.log(array2[`lastName`]);

const nameKey = `Name`;
console.log(array2[`first` + nameKey])
console.log(array2[`last` + nameKey])


const interestedIn = prompt(`what do you want to know about firas? choose between firstName , lastName , age , job and friends`);

console.log(array2[interestedIn]);

if (array2[interestedIn]) {
    console.log(array2[interestedIn])
} else {
    console.log(`wrong request choose between firstName , lastName , age , job and friends`)
}

array2.location = `mars`
array2[`role`] = `supreme leader`

console.log(array2);

challenge: get the string "firas has 3 friends and his bestfriends name is a"
using objects

const num = array2[`friends`].length

console.log(`${array2.firstName} has ${num}  friends and his best friends name is ${array2.friends[0]}`);

// object methods

const firas = {
        firstName: `firas`,
        lastName: `rasheed`,
        birthYear: 2000,
        job: `student`,
        friends: `a , b , c`,
        hasDriversLicense: true,

        // calcAge: function(birthYear) {
        //     return 2023 - 2000


        //this keyword

        calcAge: function() {
                console.log(this);
                return 2023 - this.birthYear;

                calcAge: function() {
                        this.age = 2023 - this.birthYear;
                        return this.age


                    },

                    getSummary: function() {
                        return `${this.firstName} is a ${this.calcAge()}year old ${this.job} and he has ${this.hasDriversLicense = true ? `a` : `no`} driverslicense.`

        }

    }

//challenge : print "firas is a 23 year old student and he has a drivers license" using a method and this keywords

console.log(firas.getSummary());

 //console.log(firas.calcAge())
