let num = 42;
let num0 = num + 10;
let num1 = (num + 10 * 2) / (5 - 1);
let firstName = "Suharik";
const isProgrammer = true;

// debugger;
/* Can do:
let $ = 'test'
let fff_$num$_fff42 = 32 
let first_name = 'invalid' // pretty bad
let firstName = 'invalid' // pretty good
*/

/* Resticted
let 42num = 42
let my-name = 'Dinch'
let let/const/false/true = 3
*/

// num = 10
// isProgrammer = false // error because of const
// alert(num)

// console.log( 'Test:',num, 'FN:', firstName)
// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log(num ,num0)
// num = num0 - num
// num0 = 1 + num0
// console.log(num ,num0)
// console.log(num1)

// const fullname = firstName + ' Djum'
// const fullname = firstName + ' ' + 'Djum'
// console.log(fullname)
// console.log(resultElem.textContent)
// resultElem.textContent = (42 - 2) / num
// console.log(input1.value)
// console.log(input2.value)
// console.log(typeof sum)

const resultElem = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submit = document.getElementById("submit");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const devide = document.getElementById("devide");
let action = "+";

plus.onclick = function () {
  action = "+";
};

minus.onclick = function () {
  action = "-";
};

multiply.onclick = function () {
  action = "*";
};

devide.onclick = function () {
  action = "/";
};

function colorResult(result) {
  console.log("Result to print", result);
  if (result < 0) {
    resultElem.style.color = "red";
  } else {
    resultElem.style.color = "green";
  }
  resultElem.textContent = result;
}


function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const inpNum1 = +inp1.value;
  const inpNum2 = +inp2.value;
  // if (actionSymbol == '+') {
  //     return inpNum1 + inpNum2
  // } else if (actionSymbol == '-') {
  //     return inpNum1 - inpNum2
  // } else if (actionSymbol == '*') {
  //     return inpNum1 * inpNum2
  // } else {
  //     return inpNum1 / inpNum2
  // }
  // console.log( typeof inpNum1, typeof inpNum2)

  const result = actionSymbol == "+" ? inpNum1 + inpNum2 : inpNum1 - inpNum2;
  return result;
}

submit.onclick = function () {
    debugger
  // if (action == '-') {
  //     const sum = Number(input1.value) - Number(input2.value)
  //     colorResult(sum)
  // } else {
  //     const sum = Number(input1.value) + Number(input2.value)
  //     colorResult(sum)
  // }

  const result = computeNumbersWithAction(input1, input2, action);
  colorResult(result);
};
