// Function Declaration
// function greet(name) {
//     console.log('HELLO BITCH -- ', name)
// }

// Function Experession
// const greet2 = function (name) {
//     console.log('HELLO BITCH -- ', name)
// }

// greet2('dsds')
// greet('LOX')

// setTimeout(function () {
//     greet('fdd')
// }, 1500)

// let cooo = 0

// const interval = setInterval(function () {
//     if (cooo === 100) {
//         clearInterval(interval)
//     } else {
//         console.log(++cooo)
//     }
// }, 0)

// Arrow functions
function greet(name) {
  console.log("HELLO BITCH -- ", name);
}

const arrow1 = (name, age) => {
  console.log("hi -", name, age);
};

const arrow2 = (name) => console.log("hi hi -", name);

// arrow1('shit')
// arrow2('13123123123312')

function pow1(num, exp) {
  return Math.pow(num, exp);
}

const pow2 = (num, exp) => console.log(Math.pow(num, exp));

const pow3 = (num, exp) => {
  return Math.pow(num, exp);
};

const pow4 = (num, exp) => Math.pow(num, exp);

// console.log(pow1(2, 10))
// pow2(2,10)
// console.log(pow3(3, 4))
// console.log(pow4(65, 2))

// Default Parameters
const sum = (a = 0, b = 0) => console.log(a + b);

// sum(1)
// sum()

function sumAll(...numbers) {
  // let res = 0
  // for (let num of numbers) {
  // res += num
  // }
  // return res
  return numbers.reduce((acc, cur) => (acc += cur), 0);
  // console.log(numbers)
}
// console.log(sumAll(2,3,34,6,3,3))

// Clousers

function createPerson(name) {
  return function (lastName) {
    console.log(name + " " + lastName);
  };
}

const addLastName = createPerson("Valdilen");
// addLastName('BigDick')
// addLastName('DickMaster')
