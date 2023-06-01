// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celcius`,

    // C) FIX
    // value: Number(prompt(`Degrees celcius:`)),
    value: 10,
  };

  console.log(measurement);

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperatures.

Example: [17, 21, 23] will print "... 17℃ in 1 days
... 21℃ in 2 days .. 23℃ in 3 days ..."

Create a function `printForecast` which takes in an
array `arr` and logs a string like the above to the
console.

Use the problem-solving framework: Understand the
problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
const maxTempData1 = [17, 21, 23];
const maxTempData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    console.log(`The weather forecast shows that it will be about ${arr[0]}℃ in 1 day, ${arr[1]}℃ in 2 days, and ${arr[2]}℃ in 3 days.`)
};

printForecast(maxTempData1);
printForecast(maxTempData2);
*/