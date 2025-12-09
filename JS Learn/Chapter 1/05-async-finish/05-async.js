// event Looop
// const timeout = setTimeout(() => {
//     console.log('after 2 secs')
// }, 2000)

// clearTimeout(timeout)

// setTimeout(() => {
//     console.log('Good boy~')
// },3000)
// let count = '0'
// // setInterval(() => {
// //     console.log('Good boy~', count++)
// // },500)
// setInterval(() => {
//     console.log('Good boy~', ++count)
// },3000)

// function delay(callBack, time = 1000) {
//     setTimeout(callBack,time)
// }

// delay(() =>{
//     console.log('712389127893')
// },90000)

const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            reject();
        }, time);
    });
    return promise;
};

// delay(5)
//     .then((data) => {
//         console.log("uiqeuiqweuioiuqwuidadadaddd", data);
//         return data.map((x) => x ** 2);
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => console.log("finally"));


const getData = () => new Promise((resolve) => resolve([2,2,3]))
// getData().then((array) => console.log(array))


async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('finally')
    }
}

asyncExample()