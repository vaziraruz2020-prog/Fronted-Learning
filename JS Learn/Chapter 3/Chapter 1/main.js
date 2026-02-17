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

const list = document.querySelector('#list');
list.addEventListener('click', function (e) {
    // console.log(this);
    // console.log(e)
    // console.log(e.target
    if (!removed) {
        e.target.style.textDecoration = 'line-through';
        removed = true;
    } else {
        e.target.style.textDecoration = 'none';
        removed = false;
    }
})

// Работа сэлементами
const cont = document.querySelector('#elementsContainer');
const h = document.querySelector('header')
let htmlCode = '<div class ="school-name">Хуй сосать</div>'
let title = 'fjdpjsfisfidsjoi'

// Создание элементов
// document.createElement( 'tag-name ' )
const h1 = document.createElement('h1')


// Клонирование элемента
// node.cloneNode() / / true с Внутренним содержимым (текст и теги), faLse - без Внутреннего содержимого
const hC = h.cloneNode(false)
const h1_2 = h1.cloneNode(true)

// Изменить HTML содержимое Внутри элемента
// element.innerHTML = ''
h1.innerHTML = 'Hello World!'

//  Изменить Текстовое содержимое Внутри элемента
// node.innerText = ' '
h1_2.innerText = 'Supp!'

// Вставить элемент Внутрь Другого элемента
// element.append(nodesOrDOMStrings) - в самый зад
cont.append(hC)
hC.insertAdjacentHTML("beforeend", htmlCode)

htmlCode = `<h2>${title}</h2>`

hC.insertAdjacentHTML("afterend", htmlCode)

// element.prepend(nodesOrDOMStrings) - в самый перед
cont.prepend(h1);
hC.prepend(h1_2);

// Todo list
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

// функция добавления кнопки
function addDeleteButton(li) {
    const btn = document.createElement('button');
    btn.textContent = 'Удалить';
    btn.classList.add('delete-btn');
    btn.style.marginLeft = '15px';
    li.append(btn);
}

// 1. добавляем кнопку к уже существующим задачам
document.querySelectorAll('#todo-list li').forEach(li => {
    addDeleteButton(li);
});

// 2. добавление новой задачи
todoForm.addEventListener('submit', e => {
    e.preventDefault();

    const value = todoInput.value.trim();

    if (!value) {
        todoInput.focus();
        return false;
    }

    const li = document.createElement('li');
    li.textContent = value;

    addDeleteButton(li);
    todoList.append(li);

    todoInput.value = '';
    todoInput.focus();
});


// 3. обработка кликов
todoList.addEventListener('click', e => {

    // если нажали на кнопку "Удалить"
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        return;
    }

    // если нажали на задачу
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
});

const qq = setInterval(function () {
    // console.log(w)
}, 1000)

setTimeout(function () {

    clearInterval(qq);
}, 12000)

let counter = document.querySelector('#counter');
let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let resetBtn = document.querySelector('#reset');
let i = 0
let count

startBtn.addEventListener('click', () => {
    count = setInterval(function () {
        i += 1
        counter.innerHTML = i.toString()
    }, 1000)
})

pauseBtn.addEventListener('click', () => {
    setTimeout(function () {
        clearInterval(count)
    }, 1)
})

resetBtn.addEventListener('click', () => {
    setTimeout(function () {
        clearInterval(count)
        count = undefined
        i = 0
        counter.innerHTML = i.toString()
    }, 1)
})

function checkRooms(success, failed) {
    setTimeout(function () {
        console.log('Проверяем номера в отеле...')
        const available = true

        setTimeout(function () {
            if (available) {
                let message = 'Номера есть'
                // submitVac(message)
                success(message)
            } else {
                let message = "МЕСТ НЕ ОСТАЛОСЬ ЛОШАРА ХПАХПАХАПХ"
                // cancelVac(message)
                failed(message)
            }
        }, 1000)
    }, 12500)
}

function checkTickets(message, success, failed) {
    setTimeout(function () {
        console.log('==== Function checkTickets ====')
        console.log('Ответ на предыдущем шаге: ', message)

        console.log('Проверяем билеты....')
        const available = true

        setTimeout(function () {
            if (available) {
                let message = 'Билеты есть'
                // submitVac(message)
                success(message)
            } else {
                let message = "МЕСТ НЕ ОСТАЛОСЬ ЛОШАРА ХПАХПАХАПХ"
                // cancelVac(message)
                failed(message)
            }
        }, 1000)
    }, 2000)
}

function submitVac(message) {
    console.log('---- submitVacation ----')
    console.log('Ответ на предыдущем шаге: ', message)
    console.log("YAAAAY EPSTEIN's ISLAND IS ALREADY COMING")
}

function cancelVac(message) {
    console.log('---- cancelVac ----')
    console.log('Ответ на предыдущем шаге: ', message)
    console.log('БЛЯЯЯЯ ЕБАТЬ МЫ ЛОХИ ((((')
}

checkRooms(function (messageFromCheckRooms) {
        checkTickets(messageFromCheckRooms, function (messageFromCheckTickets) {
            submitVac(messageFromCheckTickets)
        }, function (messageFromCheckTickets) {
            cancelVac(messageFromCheckTickets)
        })
    },
    function (messageFromCheckRooms) {
        checkTickets(messageFromCheckRooms, function (messageFromCheckTickets) {
            submitVac(messageFromCheckTickets)
        }, function (messageFromCheckTickets) {
            cancelVac(messageFromCheckTickets)
        })
    })


const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const response = true
        if (response) {
            let message = 'SUCCESS'
            resolve(message)
        } else {
            let message = 'FAILED'
            reject(message)
        }
    }, 10)
})

myPromise
    .then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log("Then 1")
                console.log(data)
                const response = true
                if (response) {
                    resolve('Data from then 1')
                } else {
                    reject("Data from then 1")
                }
            }, 20)
        })

    })
    .then(data => {
        setTimeout(() => {
            console.log('Then 2')
            console.log(data)
        }, 500)
    })
    .catch((data) => {
        console.log('Caught err: ', data)
        console.log(data)
    })

const checkingRooms = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Проверяем номера в отеле...')
        const available = true

        setTimeout(function () {
            if (available) {
                let message = 'Номерв есть'
                // submitVac(message)
                resolve(message)
            } else {
                let message = "МЕСТ НЕ ОСТАЛОСЬ ЛОШАРА ХПАХПАХАПХ"
                // cancelVac(message)
                reject(message)
            }
        }, 2000)
    }, 1500)
})

checkingRooms
    .then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('Проверяем билеты...')
                console.log('Ответ на предыдущем шаге: ', data)
                const available = true

                setTimeout(function () {
                    if (available) {
                        let message = 'Билеты есть'
                        // submitVac(message)
                        resolve(message)
                    } else {
                        let message = "МЕСТ НЕ ОСТАЛОСЬ ЛОШАРА ХПАХПАХАПХ"
                        // cancelVac(message)
                        reject(message)
                    }
                }, 2000)
            }, 1000)
        })
    })
    .then(data => {
        console.log('Ответ на предыдущем шаге: ', data)
        console.log('---- submitVac ----')
        console.log("YAAAAY EPSTEIN's ISLAND IS ALREADY COMING")
    })
    .catch((data) => {
        console.log('Ответ на предыдущем шаге: ', data)
        console.log('---- catch. cancelVac ----')
        console.log('БЛЯЯЯЯ ЕБАТЬ МЫ ЛОХИ ((((')
    })

function checkRoom() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Проверяем номера в отеле...')
            const available = false

            setTimeout(function () {
                if (available) {
                    let message = 'Номерв есть'
                    // submitVac(message)
                    resolve(message)
                } else {
                    let message = "МЕСТ НЕ ОСТАЛОСЬ ЛОШАРА ХПАХПАХАПХ"
                    // cancelVac(message)
                    reject(message)
                }
            }, 1000)
        }, 8500)
    })
}

function checkTicket(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Ответ на предыдущем шаге: ', data)
            console.log('Проверяем билеты...')
            const available = true

            setTimeout(function () {
                if (available) {
                    let message = 'Билеты есть'
                    // submitVac(message)
                    resolve(message)
                } else {
                    let message = "МЕСТ НЕ ОСТАЛОСЬ ЛОШАРА ХПАХПАХАПХ"
                    // cancelVac(message)
                    reject(message)
                }
            }, 1000)
        }, 9000)
    })
}

function submitVacation(data) {
    console.log('Ответ на предыдущем шаге: ', data)
    console.log('---- submitVacation ----')
    console.log("YAAAAY EPSTEIN's ISLAND IS ALREADY COMING")
}

function cancelVacation(data) {
    console.log('Ответ на предыдущем шаге: ', data)
    console.log('---- cancelVac ----')
    console.log('БЛЯЯЯЯ ЕБАТЬ МЫ ЛОХИ ((((')
}

async function checkVacation() {
    try {
        const resultRooms = await checkRoom()
        const resultTickets = await checkTicket(resultRooms)
        submitVacation(resultTickets)

    } catch (e) {
        cancelVacation(e)
    }
}

checkVacation()

async function getData(url) {
    const res = await fetch(url)
    let json = await res.json()
    return json
}

getData('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(json => {
    const Value1 = json.Valute.USD.Value
    const Value2 = json.Valute.EUR.Value
    const usd = Number(Value1.toFixed(1))
    const eur = Number(Value2.toFixed(1))

    const usdEl = document.querySelector('#usd')
    const eurEl = document.querySelector('#eur')

    usdEl.innerHTML = usd;
    eurEl.innerHTML = eur;
}).catch(e => console.log(e))

