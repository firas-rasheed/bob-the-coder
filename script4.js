'use strict'







//using loops in arrays

const jonas = [
    `jonas`,
    `shmedtmann`,
    2037 - 1991,
    `teacher`, [`steve`, `michael`, `peter`],
    true,
    false
];

const types = []

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i])
};

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);


//continue and break statements



//printing an array backwards!!

const jonas = [
    `jonas`,
    `shmedtmann`,
    2037 - 1991,
    `teacher`, [`steve`, `michael`, `peter`],
    true,
    false
];

console.log(jonas.length)

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//loops inside loops @_@!

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`)
    }
}


//while loop

let rep = 1;
while (rep <= 10) {
    console.log(`lifting weight repetition ${rep}`)
    rep++
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`u have rolled a 6 so loop ended`);
}


//coding challenge:

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; calcTip(bills[i]); i++) {
    tips.push(calcTip(bills[i]))
    totals.push(calcTip(bills[i]) + bills[i])
}


console.log(tips)
console.log(totals)

const calcAverage = function(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}


console.log(calcAverage(totals))