const person = {
  name: "jkj",
  age: 19 + 20,
  marry: false,
  langueges: ["ru", "en"],
  isProgramer: true,
  address: {
    city: "Toshkent",
    home: 1,
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
// console.log(person);
// person.address = undefined;
// delete person.address;
// person.greet("bitch");
// person.arrow();
// person.info();
// console.log(person.address);
// const addressKey = "address";
// console.log(person[addressKey]);
// console.log(person["complex key"]);
// person.age++;
// person.isLanguege.push("de");
// console.log(person.isLanguege);

// const name = person.name;
// const age = person.age;
// const langueges = person.langueges;

// const name = "petr";
// const { age, name: firstName = "test", langueges } = person;

// console.log(firstName, age, langueges);

// for (let key in person) {
//   // console.log(key);
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

// console.log([1, 2]);
// console.dir(Object)
// Object.keys(person).forEach((key) => {
//   console.log(person[key])
// })
const logger = {
  keys(withKey = true) {
    if (withKey) {
      console.log("Object keys:", Object.keys(this));
    } else {
      console.log(Object.keys(this));
    }
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key:", key);
      console.log("Value:", this[key]);
    });
  },
};
// logger.keysAndValues(person);
// logger.keys(person);
// const bound = logger.keys.bind(person)(false);
// logger.keys.call(person, false);
// logger.keys.apply(person, [false]);

class Human {
  static isHuman = true

  humanGreet() {
    console.log('GREET FROM HUMANS')
    return `Remeber if You aren't from a race of human
          YOU WILL DIE YOU PIECE OF SHIT
                  good luck boy/girl`
  }
  toString() {
    console.log('FUCK YOU')
    return 'FUCK YOU'
  }
}

class Person extends Human {
  constructor(name, age, country){
    super()
    this.name = name ?? '{)*&*7%&?//.|'
    this.age = age ?? '??????'
    this.country = country ?? '*&?#№%:^}'
  }

  sayHeLLO() {
    console.log('hello from', this.country)
  }
}


const newPerson = new Person('eww',0,':(Uzbekiston):')
const newPerson1 = new Person('wewe',0,'AMERICA')
const newPerson2 = new Person('wehrou',0,'CHINA-_-CHINA')
console.log(Person)
console.log(newPerson)
console.log(newPerson1)
console.log(newPerson2)
console.log(newPerson2.toString())
console.log(newPerson.humanGreet())
newPerson.humanGreet()
newPerson.sayHeLLO()
newPerson1.sayHeLLO()
newPerson2.sayHeLLO()