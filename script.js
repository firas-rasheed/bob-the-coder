'use strict'


function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}


console.log(fruitProcessor(5, 0));


function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);


const calcAge2 = function(birhtYear) {
    return 2037 - birhtYear;
}


const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1857));



function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));




// 



const friends = [`firas`, `aamer`, `ameen`, `rehan`];

friends.push(`ahmed`);

friends.unshift(`rasheed`);
console.log(friends)



function caclcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44];
const tips = [caclcTip(bills[0]) + bills[0], caclcTip(bills[1]) + bills[1], caclcTip(bills[2]) + bills[2]]


console.log(tips)



if (bill <= 300) {
    return bill * 0.15
} else if (bill >= 50) {
    return bill * 0.15
} else {
    return bill * 0.2
}

// hello lorem //



// objects

const array = [
    `firas`,
    `rasheed`,
    2000 - 2023,
    `student`
    [`firas`, `rasheed`, `hello`]
];

const array2 = {
    firstName: `firas`,
    lastName: `rasheed`,
    age: 2000 - 2023,
    occupation: `student`,
    friends: [`firas`, `rasheed`, `hello`]
};

// object literal syntax of objects

console.log(array2);



