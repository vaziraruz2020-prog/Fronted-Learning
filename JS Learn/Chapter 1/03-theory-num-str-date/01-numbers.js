const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;
const big = 1_000_000_000;
const neg = -10;

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Math.pow(2, 53) - 1)
// console.log(1 / 0)
// console.log(Number.isFinite(Infinity))
// console.log(23 / undefined)
// const weird  = 23 / undefined
// console.log(Number.isNaN(3 / weird))

const strInt = "42";
const strFloat = "42.42";

// console.log(Number(strInt))
// console.log(Number(strFloat))
// console.log(Number.parseInt(strInt))
// console.log(Number.parseFloat(strFloat))
// console.log(+strInt, +strFloat )

const fsjk = (0.1 + 0.2).toFixed(17);
// console.log(parseFloat(fsjk));

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 24891237523489647923476n);
// console.log(parseInt(73n) + 27);
// console.log(52367n - BigInt(212));
// console.log(5n / BigInt(2));


// console.log(Math.max(3737, 232342, 32, 232,  3.21312, 323232312313123))
// console.log(Math.min(3737, 32342, 32, 232,  3.21312, 323232312313123))
// console.log(Math.pow(2, 5))
// console.log(Math.sqrt(400))
// console.log(Math.floor(400.93123123))
// console.log(Math.round(400.53123123))
// console.log(Math.ceil(400.9))
// console.log(Math.trunc(400.9))
// console.log(Math.abs(-400.9))
// console.log(Math.random())

function getRandonNumber(min,max) {
    return Math.round(Math.random() * (max - min + 1) + min)
}

const i2 = getRandonNumber(1, 100)
// console.log(i2ф)











