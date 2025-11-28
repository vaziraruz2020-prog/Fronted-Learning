const person = {
  name: "jkj",
  age: 21,
  marry: false,
  langueges: ["ru", "en"],
  isProgramer: true,
  address: {
    city: "Toshkent",
    scope: "Sergilya",
    street: "aircity",
    home: 1,
    floor: 2,
    apartaments: 21,
  },
  "complex key": "key",
  [10 + 20]: "computed value",
  [new Date().getUTCFullYear()]: "loh",
  ["key_" + 200 * 2]: "loshara",
  greet(name) {
    console.log("Hello " + name);
  },
  arrow: () => {
    console.log("Hey bitch", this);
  },
  info() {
    console.log("Person name -  " + this.name);
  },
};
console.log(person);
// person.address = undefined
delete person.address;
// person.greet('bitch')
// person.arrow()
// person.info()
// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])
// person.age++
// person.isLanguege.push('de')
// console.log(person.isLanguege)

// const name = person.name
// const age = person.age
// const langueges = person.langueges

const { age, name, langueges } = person;

console.log(name, age, langueges);
