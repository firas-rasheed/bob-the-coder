// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';


//coding challenge>>>>>

const array1 = [17, 21, 23]
const array2 = [12, 5, -5, 0, 4]

const printForecast = function(arr) {
    let t = ``
    for (let i = 0; i < arr.length; i++) {
        t += `${arr[i]}^C in ${i + 1} days ...`

    }
    console.log(`... ` + t)
}

printForecast(array1);


printForecast(array2);