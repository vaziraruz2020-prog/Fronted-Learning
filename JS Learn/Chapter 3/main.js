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