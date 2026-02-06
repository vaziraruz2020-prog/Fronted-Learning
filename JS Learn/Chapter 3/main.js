let w = '10'
let у = 1

w > у ? console.log('Верно пидорасик') : console.log('НЕВЕРНО ПИДОР ЕБАННЫЙ')
у > w ? console.log('Верно пидорасик') : console.log('НЕВЕРНО ПИДОР ЕБАННЫЙ')

console.log(`ueworiu ${w}`)

function let(a, b) {
    return a + b;
}

const Arr = arr => arr.map(el => el + 3);
    // arr.map(el => console.log(el + 2))
    // return arr



const res = (func, t) => {
    let reult = func(t);
    console.log(reult);
};
let y = [1, 3, 4, 5, 6, 8, 3, 5];

res(Arr, y);

(function (func, a, b) {
    let result = func(a, b)
    console.log(result)
})(let, 10, 22);
/*

arr.push(items) - Добавить элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива
arr.unshift(...items) - Добавить элемент в начало массива
arr.splice([startingIndex], deleteCount)
*/
console.log(y)

y.push(22)
console.log(y)
y.pop()
console.log(y)

y.unshift(22)
console.log(y)
y.shift()
console.log(y)

y.splice(3,2)
console.log(y)

for (let i = 0; i < y.length; i += 0.5) {
    console.log(y[i]);
}

for (const element of y) {
    console.log(Math.sqrt(element ** 6))
}

const huy = (item, index) => console.log(`${item} => ${index}`)

y.forEach(huy)

let x = {
    name: 'Kolya',
    age: 13,
    job: 'WebDevelopment'
}

console.log(x)
console.log(x.age)
console.log(x['name'])

const huyy = 'job'
x.age = 14
x.isMarried = false
x.fnc = (func, t) => {
    let reult = func(t);
    console.log(reult);
}

console.log(x[huyy])
console.log(x)
x.fnc(Arr, y)

// for (let key of x) {
//     console.log(key)
// } for_of is for iterable stuff

for (let key in x) {
    console.log(key)
    console.log(key, ':', x[key]);
}
// for_in is for not iterable stuff

let xy = { ...x }
xy.age = 1

console.log(xy)
console.log(x)

class Person {
    constructor(name, age, job, isMarried, fnc) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.isMarried = isMarried;
    }
     fnc(func, t) {
        let reult = func(t);
        console.log(reult);
    }
}

const person = new Person('Амир', 13,'student', false );

console.log(person);
person.fnc(Arr, y)
