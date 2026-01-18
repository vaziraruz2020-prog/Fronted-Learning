// Операторы

// 'use strict' // Строгий режим 



// Объекты - набор свойств:
// "имя: значение"

const name = {
    visssible: true,
    colorDepth: 24,
    title: 'My Image',
    orientation: {
        anglel: 0,
        type: 'landscape'
    },
}

// console.log('HelloWorld')
// console - объект \\ | .  - точечечная запись | // log - метод \\
// (.....) - вызов метода \\ 'HelloWorld' - значение типа "String"
// dir - отображает все свойтсва объекта 
// table - отображает свойства в виде таблицы

let a = 20
// Выражение присваивания

let l = 1
l++
// Оператор "++" увеличивает значение b на 1

let myFunction = (a, b) => {
    console.log(a, b)
}
myFunction(a, l)
// Это выражение не только возращает значения, но и выполняет саму функцию


// PascalCase;          DB_PASSWORD;
// // Типы и Классы    // Значения известны до запуска приложения, не меняются
//             camelCase
//     // все остальные переменные



// Тип переменной определяется типом присвоенного значения
const h = 10
// h - число(Number)
const b = 'abc'
// b - строка(String)

// Типы:
// Примитивные типы:
// ПАМЯТЬ
undefined; 'abc';
25; true;


// Ссылочный тип
// ПАМЯТЬ
const myFullName = { name: 'bogd', lastName: 'bogdyt' }
const array = [1, 2, 3]

const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

copyOfA.a = 20
copyOfA.c = 'abc'

// objectA.a -> 20
// objectA.c -> 'abc'




// Cтатическаая и Динамическая типизации
// Cтатическая:
// String a = 'abc'
// int b = 10
// b = 'xyz' // error
// ЭТО НЕ ОТНОСИТСЯ К JS

// Динамическая:
a = 10 // Number
a = 'abc' // String

function p() {
    console.log('Hey there')
}
p()
// // 'Hey there'
p = 10
// a() // Uncaught TypeError: a is not a function



// Const для объявления переменных
const s = () => {
    console.log('Hey therex')
}

s()

// s = 10 // TypeError: Assignment to constant variable

s()

// Объекты

const myCity = {
    city: 'New York',
    info: {
        isPpular: true,
        counrwepo: 12891289
    }
}
// console.log(myCity)
myCity.city = 'werorwe'
// console.log(myCity)
myCity.popular = true
// console.log(myCity)
myCity.country = 'USA'
// console.log(myCity)
delete myCity.popular
// console.log(myCity)
myCity['popular'] = false
// console.log(myCity)
const urewriopeqwropweiruqwerpqoweiruqweoripqweroqweipru = 'HUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUY'
myCity[urewriopeqwropweiruqwerpqoweiruqweoripqweroqweipru] = false
// console.log(myCity)
delete myCity.info['isPpular']
// console.log(myCity)

// city;popular;country - свойства
// то что внутри city;popular;country - значения свойств

const naMe = 'hefwui'
const postQty = 23

const userProfile = {
    name: naMe,
    postQty: postQty,
    signedAgrement: false
}
// console.log(userProfile)

// Coкpaщeнo
const userProfilIY = {
    naMe,
    postQty,
    signedAgrement: false
}
// console.log(userProfilIY)

const myCityx = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!! ')
    }
}
myCityx.cityGreeting()
// cityGreeting - метод

// Конвертация JSON в Объект
// JSON.parse()
// Конвертация Объект в JSON
// JSON.stringify()

// Мутация в JS
const gh = 10
let tty = gh // copy by value
tty = 1470347103
// console.log(gh)
// console.log(tty)

const person = {
    asdjpo: 81309,
    ewfho: 'qwrqr'
}
const person2 = person // copy by reference
person2.asdjpo = 248301772956
person2.ewfho = 'yfe888wf'

// console.log(person.asdjpo)
// console.log(person.ewfho)

// Как избежать мутации?
// Вариант 1
const person3 = {
    name: 'Bob',
    age: 1234
}

const person4 = Object.assign({}, person3)
person4.age = 26
person4.uowfh = 1273
// console.log(person4) // 26
// console.log(person3.age) // 25

// Вариант 2
const person5 = {
    name: 'Bob',
    age: 1e-24
}

const person6 = { ...person5 } // Оператор разделения объекта на свойства
person6.age = 26
// console.log(person6) // 26
// console.log(person5.age) // 25

// Вариант 3
const person7 = {
    name: 'Bob',
    age: Math.PI
}

const person8 = JSON.parse(JSON.stringify(person7)) // ссылки на вложеннные обЪекты не сохраняются
person8.qpery = 480391
// console.log(person8)
// console.log(person7.age)


// Функции
let v = 5
let g = 3

let kkl

kkl = v + g
console.log(kkl)

v = 8
g = 12

function summa(a, b) {
    console.log(a + b)
}
summa(v, g)

console.log(summa)

function myFn(a, b) {
    //            | | 
    //          Параметры
    let c
    a = a + 1
    c = a + b
    return c
}
myFn(10, 3) // Вызов Функци
//    |  | 
//  Аргументы


// Передача значения по ссылкее
const pruo = {
    name: 90,
    age: 12389,
}

function IPA(person) {
    person.age += 1
    return person
}

IPA(pruo)
console.log(pruo.age)
// ТАКОЕ НЕ РЕКОМЕНДУЕТСЯ

// Правильный способ
const qweiop = {
    wep: 123490,
    age: 213789
}

function IQA(person) {
    const new_patch = { ...person }
    new_patch.age += 1
    return new_patch
}
const new_patchUI = IQA(qweiop)
console.log(qweiop.age)
console.log(new_patchUI.age)
// Объект qweiop не изменился



// CallBack Fns
function fnw() {
    console.log(1 + 2)
}
function callbBack1(callBack) {
    callBack()
}
callbBack1(fnw)


function printMyName() {
    console.log('Bogdan')
}
setTimeout(printMyName, 1000)




// Области видимости

let yuw  // Объявлена пременная yuw
let huii // Объявлена пременная huii
// Глобальные переменные

function MUYDH() {
    let huii // Локальная переменная создана в рамках функции
    yuw = 10 // Изменяется значение глобальной переменной т.к переменной yuw нету в рамках функции
    huii = true // Изменяется значение переменной в рамках функции
    console.log(huii) // Выводим переменную, которая была объявлена в рамках фунциии 
}
MUYDH()
console.log(yuw) // У глобальной переменной остаются изменения с функции
console.log(huii) // Глобальная переменная оставила все то же значение что и было при глобальном объявлении 

// Цепочка областей видимости
const gjh = 5
function qwui() {
    function eruio() {
        console.log(gjh) // 5
        function fdjis() {
            let gjh = 123
            function adsh() {
                function hs() {
                    console.log(gjh) // 123
                }
                hs()
            }
            adsh()
        }
        fdjis()
    }
    eruio()
}
qwui()

// function sdhfpi() {
//     ppqaf = 10 // Переменаая "ppqaf" будет автоматически объявлена в глобальной видимости
//     console.log(ppqaf)
// }
// sdhfpi()
// console.log(ppqaf)
// // НЕ РЕКОМЕНДУЕТСЯ

// Унарные операторы
a++
    + a
delete name.title
typeof a
new Object()

// Бинарные операторы
a = 5
a + b
a += 5
a === b
a && b

// Инфиксная запись
let y = true
a + b
a += 5
a || b
a > b

// Префиксная запись
++a
delete name.title
typeof a

// Постфиксная запись
a++
myFunction()

// Логические операторы
!10        // false
!0         // true
!'abc'     // false
!''        // true
!true      // false
!undefined // true

!!10        // true
!!0         // false
!!'abc'     // true
!!''        // false
!!true      // true
!!undefined // false

let ruif = {}
console.log(Boolean(!!ruif))

// && и ||
console.log(0 && 8) // будет 0 т.к оно false + первое
console.log(0 || 8) // будет 8 т.к оно true

console.log(7 && 8) // будет 8 т.к оно последнее
console.log(7 || 8) // будет 7 т.к оно первое для ||

console.log(null || '' || 0 || 1) // будет 1 т.к оно последняя + true
console.log(1 && 'sd' && true && undefined) // будет undefined т.к оно последняя + false 
// ЭТО ЦЕПОЧКИ ЭТИХ ОПЕРАТОРОВ

// Оператор ...
const sdfjio = {
    wdkop: 2,
    color: 'black'
}

const wefjp = {
    ...sdfjio,
    color: 'red',
    23: 23,
    text: 'jddj'
}

const wfeui = {
    ...sdfjio,
    ...wefjp
}

console.table(wefjp)
console.table(sdfjio)
console.table(wefjp)

// Конкатенция строк
const hello = 'hello'
const world = 'world'

const greeting0 = hello + ' ' + world

// Шаблоные строки
const greeting1 = `${hello} ${world}`

const myName = 'Suharik'
const myCityy = 'Toshkent'

const greeting2 = `Hi my name is ${myName} and Ilive in ${myCityy}`

console.log(greeting2)
console.log(undefined + 'hsdkf')

// Функциональные выражения
// В чем разница между объявленная функция и функциональным выражением

// Объявленная функция

function myFn34(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

// Функциональное выражение

function withNoName(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

// Присваиванеи функционального ыражения переменной 
const myfunnny = function (a, b) {
    let c
    a = a + 1
    c = a + b
    console.log(c)
    return c
}
myfunnny(5, 3)

// Функциональное выражение при вызове другой функции

setTimeout(function () {
    console.log("FUCK YOU <3")
}, 9000)

// Стрелочные функции
const Nothing = (a, b) => {
    let c
    a += 1
    c = a + b
    console.log(c)
}

// Сокращение стрелочной функции 

const SMT = a => {  // Если один параметр, то круглые скобки можно опустить
    // Тело функции
}
// Желательно всегда добавлять скобки не учитывая кол-во парметров

const ST = (a, b) => a + b
// Фигурные скобки можно опустить если тело функции состоит из одного выражения
// В этом случае стрелочная функция автоматически возвращает результат выражения

// Значение парметров функции по умолчанию
function multiply(value, multiplier = 1) {
    console.log(value * multiplier)
}
multiply(5)
multiply(5 * 125)

function Addition(value, additioner = 1) {
    console.log(value + additioner)
}
Addition(1, 100)

let pizda = function (additioner, value = 1) {
    console.log(additioner + value)
}
pizda(1)

pizda = (additioner, value = 1) => console.log(additioner + value)
pizda(1)
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})
const firstPost = {
    id: 1,
    author: 'Bogdan I',
}
newPost(firstPost)

// Обработка ошибок

const fnwITHeROOR = () => {
    throw new Error('Some error')
}
try {
    fnwITHeROOR()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('finding error')

// Инструкции

let k;

const qwerty = 5;

if (a > b) {
    console.log('a is larger');
} else if (a < b) {
    console.log('a is smaller');
}
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// Выражение - Инструкция
'abc';
a += 3;
let c = a + b;
let d = 'Good' + 'Evening';
myFunction(c, d);
console.log('Hey');

// Массивы

const myArray1 = [1, 2, 3]
console.log(myArray1)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

console.log(myArray1 === myArray2)

const myArray3 = myArray2

console.log(myArray3 === myArray2)


// Структура Массива
// (3) [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3
// [[Prototype]]: Array(0) // Указывает то что это объект

// Массив vs Объект

const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
}
console.log(myObject)

const myArray4 = [1, 2, 3]
console.log(myArray4)

// Чтение значений массива

const myArray = [1, true, 'a']
console.log(myArray) // [1, true, 'a']

console.log(myArray[0]) // 1
console.log(myArray[1]) // true

console.log(myArray.length) // 3

myArray.length = 7
console.log(myArray.length) // 7
console.log(myArray)

myArray.length = 3

// Добавление/Изменение свойтсв массива

const myArray5 = [1, 2, 3, 4]
console.log(myArray5) // [1, 2, 3, 4]
console.log(myArray5.length) // 4

myArray5[2] = 'abc'

console.log(myArray5) // [1, 2, 'abc', 4]
console.log(myArray5[2]) // 'abc'

myArray5[4] = true

console.log(myArray5) // [1, 2, 'abc', 4, true]
console.log(myArray5.length) // 5

// Push
const myArray6 = [1, 2, 3]
console.log(myArray6) // [1, 2, 3]

myArray6.push(4)

console.log(myArray6) // [1, 2, 3, 4]

myArray6.push(true)

console.log(myArray6) // [1, 2, 3, 4, true]

// Pop
const myArray7 = [1, 2, 3]
console.log(myArray7) // [1, 2, 3]

myArray7.pop()

console.log(myArray7) // [1, 2]

const removedElement = myArray7.pop()

console.log(myArray7) // [1]
console.log(removedElement) // 2

// Unshift
const myArray8 = [1, 2, 3]
console.log(myArray8) // [1, 2, 3]

myArray8.unshift(4)

console.log(myArray8) // [4, 1, 2, 3]

myArray8.unshift(true)

console.log(myArray8) // [true, 4, 1, 2, 3]

// Shift
const myArray9 = [1, 2, 3]
console.log(myArray9) // [1, 2, 3]

myArray9.shift()

console.log(myArray9) // [2, 3]

const removedElement2 = myArray9.shift()

console.log(myArray9) // [3]
console.log(removedElement) // 2

// forEach
const myArray10 = [1, 2, 3]
console.log(myArray10) // [1,2,3]

myArray10.forEach(el => console.log(el ** 2))
const res = myArray10.forEach(el => console.log(el ** 2))

console.log(res) // undefined

console.log(myArray10) //  [1,2,3]
// Оригинал не изменился

// Map
const myArray11 = [1, 2, 3]
console.log(myArray11) // [1,2,3]

const newArraay = myArray11.map(el => el * 3)
let newArraay2 = myArray11.map((el) => {
    el * 3
})

console.log(newArraay) // [3,6,9]

console.log(newArraay2) // [undefined,undefined,undefined]
// Потому что функция ничего не возвращает

newArraay2 = myArray11.map((el) => {
    return el * 3
})

console.log(newArraay2) // [3,6,9]

console.log(myArray11) // [1,2,3]
// Оригинал не изменился

// Деструктуризация

// Деструктуризация объектов

const userProfile2 = {
    name1: 'Bogdan',
    userAge: 13,
    hasSignedAgreement: false,
}
const { name1, userAge } = userProfile2
const { hasSignedAgreement } = userProfile2

console.log(name1)
console.log(userAge)

// Деструктуризация массивов

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)
console.log(fruitTwo)

// Деструктуризация в функциях 

const userProfile3 = {
    name1: 'Bogdan',
    age: 11,
    hasSignedAgreement: false,
}

const userInfo = ({ name1, age }) => {
    if (!age) {
        return `User ${name1} has no comments`
    }
    return `User ${name1} has ${age} comments`
}


userInfo(userProfile3)

// Инструкции if

let val = 10

if (val > 5) {
    val += 20
}

console.log(val)

// Инструкция else

if (val < 5) {
    val += 20
} else {
    val -= 20
}

console.log(val)

val = 5
// Инструкция else if 

if (val < 5) {
    val += 20
} else if (val === 5) {
    val += 10
} else {
    val -= 20
}

console.log(val)

const ageCheck = (age) => {
    if (age > 21) {
        console.log('Is adult')
    } else if (age >= 16) {
        console.log('Is youth')
    } else if (age >= 12) {
        console.log('Is teen')
    } else {
        console.log('Is kid')
    }
}
let age1 = 23
let age2 = 19
let age3 = 14
let age4 = 7

ageCheck(age1)
ageCheck(age2)
ageCheck(age3)
ageCheck(age4)

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' && typeof b !== 'number') {
        console.log('Both arguments are not numbers')
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('One of the arguments is not a number')
    } else if (a <= 0 && b <= 0) {
        console.log('Numbers are not positive')
    } else if (a <= 0 || b <= 0) {
        console.log('One of the numbers is not positive')
    } else {
        console.log(a + b)
    }
}

sumPositiveNumbers('a', true)
sumPositiveNumbers('a', 1)
sumPositiveNumbers(23, '1')
sumPositiveNumbers(-656, -1)
sumPositiveNumbers(-656, 1)
sumPositiveNumbers(656, -1)
sumPositiveNumbers(656, 1)


// Инструкция switch 

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не зимний месяц')
}

// Тернарный оператор

let value = -11
console.log(value >= 0 ? value : 'Value is negative')

value = -5
const resu = value >= 0 ? value : 'Value is negative'
console.log(resu)

// Циклы

// Цикл for
for (let i = 0; i < 5; i++) {
    console.log(i)
}

let Array123 = ['guy', 34, true, null]

for (let i = 0; i < Array123.length; i++) {
    console.log(Array123[i])
}
// Не рекомендуется использовать циклы с массивами

Array123.forEach((element, index) => {
    console.log(element, index)
})
// Рекомендуется

// Цикл while
let Condition
while (Condition) {
    // Блок кода с выполнением какх-либо действий
}

// Цикл do ... while

do {
    // Блок кода с выполнением какх-либо действий
} while (Condition)

// Цикл for ... in ...
for (const key in Object) {
    // Блок кода с выполнением какх-либо действий
}

for (const key in Array) {
    // Блок кода с выполнением какх-либо действий
}


// Цикл for ... of ...

for (const element of myArray1) {
    // Блок кода с выполнением какх-либо действий
    console.log(element)
}

for (const letter of 'String') {
    // Блок кода с выполнением какх-либо действий
    console.log(letter)
}
// forof не используется длс объектов

// Модули

import sum_sum from './test.mjs'
sum_sum(5,6)

import {
    one as fuck,
    two
}
from './test.mjs'

console.log(fuck)
console.log(two)
