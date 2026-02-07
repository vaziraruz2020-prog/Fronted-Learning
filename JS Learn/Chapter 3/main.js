// Теория

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

y.splice(3, 2)
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

let xy = {...x}
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

const person = new Person('Амир', 13, 'student', false);

console.log(person);
person.fnc(Arr, y)


// Пример с выбором элементов. Селекторы. CSS классы

let htmlTitle2 = document.querySelector('h2');
htmlTitle2.classList.add('red')
console.log(htmlTitle2);

let htmlTitle3 = document.querySelector('h3');
console.log(htmlTitle3);

let headings = document.querySelectorAll('h2')
console.log(headings);

for (let item of headings) {
    item.classList.remove('red')
    item.classList.remove('green')
    item.classList.add('red-text')
    item.classList.add('green')
    item.classList.remove('red-text')
    item.classList.remove('green')

}

const p = document.querySelectorAll('p')
// for (let item of p) {
//     item.classList.add('red')
//     item.classList.add('green-text')
// }
p.forEach(element => element.classList.add('green-text'))
p.forEach(element => element.classList.remove('green-text'))


/*
    element.classList.add()
    .add() - добавить класс
    .remove() - убрать класс
    .toggle() - добавляет класс если его не было и убирает класс если он был
    .contains() - возвращает true или false в зависимости от того был класс или нет
 */

htmlTitle2.classList.add('green')
htmlTitle2.classList.remove('green')

htmlTitle2.classList.toggle('green')
console.log(htmlTitle2.classList.contains('green'))
htmlTitle2.classList.toggle('green')
console.log(htmlTitle2.classList.contains('green'))


// Работа с атрибутами. Прослушка событий. Изображение

/*
    getAttribute(attrName) - Возвращает значение указанного атрибута
    setAttribute(name, value) - Добавляет указанные атрибут и его значение к элементу
    hasAttribute(attrName) - Возвращает true при наличии у элемента указанного атрибута
    removeAttribute(attrName) - Удаляет указанный атрибут

    toggLeAttribute(name, force) — ДобаВляет новый атрибут при отсутствии или удаляет существующий атрибут.
    hasAttributes() — Возвращает true, если у элемента имеются какие-либо атрибуты
    getAttributesNames() — возвращает названия атрибутов элемента
 */

const img = document.querySelector('#logo')
const src = img.getAttribute('src')
console.log(src)

img.setAttribute('src', './img/php.png');
img.setAttribute('width', '500px');

const button = document.querySelector('#button')
button.value = 'Delete png'

const div = document.querySelector('.example-block')
let removed = false

button.addEventListener('click', () => {
    if (!removed) {
        img.remove();
        removed = true;
    } else {
        div.prepend(img);
        removed = false;
    }
});

// Прослушка событий 2. Форма
const inputtText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputtText.addEventListener('input', () => {
textBlock.innerHTML = inputtText.value;
})

// Прослушка событий 3. event

const list = document.querySelector( '#list');
list.addEventListener( 'click', function () {
    console.log(this);
})