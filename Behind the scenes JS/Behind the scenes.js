`use strict`;
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = `Billiam`;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //reassigning outer scope's variable
      output = `NEW OUTPUT!`;
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = `Will`;
calcAge(1991);
// console.log(age);
// printAge();
*/
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = `Will`;
let job = `programmer`;
const year = 1999;

//functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(this);
const calcAge = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

console.log(this);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const will = {
  year: 1999,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  }
}
Will.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = will.calcAge;
matilda.calcAge();

const f = will.calcAge;
f();
*/

// var firstName = `Matilda`;

const will = {
  firstName: `Will`,
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`)
};
will.greet();
will.calcAge();