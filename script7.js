'use strict';


// console.log(document.querySelector(`.message`).textContent);


// document.querySelector(`.message`).textContent = `correct number!!!😘`

// document.querySelector(`.number`).textContent = 13
// document.querySelector(`.score`).textContent = 10

// document.querySelector(`.guess`).value = 23
// console.log(document.querySelector(`.guess`).value = 23);


// const secretNumber = Math.trunc(Math.random() * 20) + 1
// document.querySelector(`.number`).textContent = number

// let score = 20
// document.querySelector(`.number`).textContent = secretNumber

// document.querySelector(`.check`).addEventListener(`click`, function() {



//     const guess = Number(document.querySelector(`.guess`).value)

//     if (!guess) {
//         document.querySelector(`.message`).textContent = ` ⛔ No Number!!`
//     } else if (guess === secretNumber) {
//         document.querySelector(`.message`).textContent = score

//     } else if (guess > secretNumber) {
//         if (score > 0) {
//             document.querySelector(`.message`).textContent = `too high`
//             score--;
//             document.querySelector(`.score`).textContent = score
//         } else {
//             document.querySelector(`.message`).textContent = `You Have Lost The Game!`
//         }
//     } else if (guess < secretNumber) {
//         document.querySelector(`.message`).textContent = `too low`
//         document.querySelector(`.score`).textContent = score--
//             document.querySelector(`.score`).textContent = score
//     }
// })



let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

//document.querySelector(`.number`).textContent = secretNumber
document.querySelector(`.check`).addEventListener(`click`, function() {
    const guess = Number(document.querySelector(`.guess`).value)

    //when there is no input
    if (!guess) {
        document.querySelector(`.message`).textContent = `no number!!`

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector(`.message`).textContent = `correct Number!!`
        document.querySelector(`.number`).textContent = secretNumber

        document.querySelector(`body`).style.backgroundColor = `#A020F0`
        document.querySelector(`.number`).style.width = `30rem`
        if (score > highscore) {
            highscore = score
            document.querySelector(`.highscore`).textContent = highscore
        }
    }
    //when guess is too wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(`.message`).textContent = guess > secretNumber ? `too high` : `too low`
            score--
            document.querySelector(`.score`).textContent = score
        } else {
            document.querySelector(`.message`).textContent = `you lost the game`
            document.querySelector(`.score`).textContent = 0
        }
    }
})

//     } else if (guess > secretNumber) {

//         if (score > 1) {
//             document.querySelector(`.message`).textContent = 'too high!!'
//             score--
//             document.querySelector(`.score`).textContent = score
//         } else {
//             document.querySelector(`.message`).textContent = `you lost the game`
//             document.querySelector(`.score`).textContent = 0
//         }
//     } else if (guess < secretNumber) {
//         document.querySelector(`.message`).textContent = `too low!!`
//         score--
//         document.querySelector(`.score`).textContent = score
//     }





document.querySelector(`.again`).addEventListener(`click`, function() {

    //resetting score
    document.querySelector(`.score`).textContent = 20
        //resetting message
    document.querySelector(`.message`).textContent = `Start guessing...`
        //resetting secretnumber
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector(`.number`).textContent = `?`
        //resetting bg color and number box size
    document.querySelector(`body`).style.backgroundColor = `#222`
    document.querySelector(`.number`).style.width = `15rem`

    document.querySelector(`.guess`).value = ``
})