// Операторы

'use strict' // Строгий режим



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

function summa(a,b) {
    console.log(a + b)
}
summa(v,g)

console.log(summa)

function myFn(a,b) {
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
    age:12389,
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
    age:213789
}

function IQA(person) {
    const new_patch = {...person}
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
console.log(huii) // Глобальная переменная оставила все то же значение 

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