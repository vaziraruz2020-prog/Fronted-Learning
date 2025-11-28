const names = ['hui', 'pizda', 'her', 'kiska']

// names.push('HAHAHAHAHH')
// names.unshift('poka')
// names.shift()
// names.pop()
// const firstName = names.shift()
// const lastName = names.pop()

// console.log('Names: ', names, ' ', firstName, ' ', lastName )

// console.log(names.reverse())
// console.log(names.toReversed())
// console.log(names.reverse())
// console.log(names.toSpliced())
// console.log(names.splice(0,4))
// console.log(names)

// const letters = ['e','c','d','b', 'a']
// console.log(letters.toSorted())
// console.log(letters)

// const greatWoman = 'her'
// const index = names.indexOf(greatWoman)
// console.log(index)
// names[index] = 'HER'
// console.log(names[index])
// const newName = names.with(index, 'hufdufh')
// console.log(names)
// console.log(newName)

// const ggg = names.map(function (name, index) {
//     // const hhh = name + '!'
//     // return name.toUpperCase()
//     if (index === 0) {
//         return 'TKKKKFF'
//     }
//     return name
// })

// console.log(ggg)
// console.log(names)
// console.log(names.indexOf('her') !== -1)

const people = [
    {name: 'hui', solary: 99999999999999},
    {name: 'pizda', solary: 0},
    {name: 'her', solary: 20000},
    {name: 'kiska', solary: 200}
]

// let findedPerson 
// for (let person of people) {
//     if (person.solary === 0) {
//         findedPerson = person
//     }
// }

// const findedPerson = people.find(function(person) {
//     return person.solary === 200
// })

// const findedPerson = people.findIndex(function (person) {
//     return person.solary === 200
// })

// const findedPerson = people.find((p) => p.solary === 200)

// console.log(people.with(findedPerson, 42))

// let richBithes = 0
// const filtered = people.filter((p) => p.solary >= 20000)

// console.log(filtered)
// filtered.forEach((p) => richBithes += p.solary)

// const bySolary = (p) => p.solary > 10000
// const pickSolary = (p) => p.solary 

// const richBithes = people
//     .filter(bySolary)
//     .map(pickSolary)
//     .reduce((acc, p) => acc + p, 0)
// console.log(richBithes)

const srting = 'Эй лох, подошел сюда хуйло ебанное'
const reversed = srting.split('').toReversed().join('!').split('').filter((c) => c !== '!').join('')
console.log(reversed)

























