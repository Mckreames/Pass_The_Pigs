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
/*
const will = {
  firstName: `Will`,
  year: 1999,
  calcAge: function () {
    console.log(2037 - this.year);
*/
    // solution 1
    //   const self = this; //self or that
    //   const isMillenial = function () {
    //     console.log(self)
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //     // console.log(this.year >= 1981 && this.year <= 1996);
    //   };
    //   isMillenial();
    // },

    // Solution 2
    //     const self = this; //self or that
    //     const isMillenial = () => {
    //       console.log(this)
    //       console.log(this.year >= 1981 && this.year <= 1996);
    //     isMillenial();
    //   },

    //   greet: () => {
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`);
    //   },
    // };
    // will.greet();
    // will.calcAge();

    //     const addExpr = function (a, b) {
    //       console.log(arguments);
    //       return a + b;
    //     };
    //     addExpr(2, 5);
    //     addExpr(2, 5, 8, 12);

    //     var addArrow = (a, b) => {
    //       console.llog(arguments);
    //       return a + b;
    //     };
    //     addArrow(2, 5, 8);
    //   },
    // };
/*
    let age = 30;
    let oldAge = age;
    age = 31;
    console.log(age);
    console.log(oldAge);

    const me = {
      name: `Will`,
      age: 24,
    };
    const friend = me;
    friend.age = 27;
    console.log(`Friends:`, friend);
    console.log('Me', me);
  },
};
*/
/*
// Primitive Types
let lastName = `Dukes`;
let oldLastName = lastName;
lastName = `Butler`;

// Reference Types
const daejah = {
  firstName: `DaeJah`,
  lastName: `Dukes`,
  age: 21,
};
const marriedDaeJah = daejah;
marriedDaeJah.lastName = `Butler`;

// Copying objects
const daejah2 = {
  firstName: `DaeJah`,
  lastName: `Dukes`,
  age: 21,
};

const daejahCopy = Object.assign({}, daejah2);
daejahCopy.lastName = `Butler`;
*/