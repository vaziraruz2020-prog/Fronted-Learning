/* // ----------------------------------------------- //


// const array = [1, 2, 3, 4, 5]
// array[0] = 'Hi!!!'
// array[array.length] = 'becon'
// const arrayStrings = ['Hi', 'Bye', 'JK', 'Idk_Idc', 'GO_FUCK_YOURSELF']
//const array = new Array(1,2,3,4,5,6,7,8,9,0)


// console.log(array.length)
// console.log(array[4])
// console.log(array[array.length - 1])
// console.log(array[array.length - 2])
// console.log(array) */

const INP1 = document.getElementById("title");
const btn = document.getElementById("create");
const list = document.getElementById("list");

// console.log(INP1.value)

// const notes = ["pfkjhkskjdfhksfhk", "hghasghasgfjsjag"];


// btn.onclick = function () {
//   if (INP1.value.length === 0) {
//     return;
//   }
//   list.insertAdjacentHTML("beforeend", getNoteTemplate(INP1.value));
//   INP1.value = '';
// };

// function getNoteTemplate(title) {
//   return `<li class="list-group-item d-flex justify-content-between align-items-center">
//   <span>${title}</span>
//   <span>
//   <span class="btn btn-small btn-success">&check;</span>
//   <span class="btn btn-small btn-danger">&times;</span>
//   </span>
//   </li>`;
// }

/*
console.log(typeof notes)

const person = {
  firstNAme: 'hfgfjghk',
  lasName: 'fldfhdk',
    birthDate: 9999,
    Married: true,
    languages: ['ru', 'en', 'chinese'],
    getFullName: function() {
      console.log(person.firstNAme + ' ' + person.lasName)
      },
      }
      
      console.log(person['languages'])
      const key = 'Married'
      console.log(person[key])
      person.getFullName()
*/
const notes = [
  {
    title: "hgdhgdghgjdfghjkfgh",
    completed: false,
  },
  {
    title: "hghasghasgfjsjag",
    completed: true,
  },
];

function render() {
  list.innerHTML = ''
  if (notes.length === 0) {
    list.innerHTML = '<p>Нет элементов</p>'
  }
  for (let i = 0; i < notes.length; i++) {
      list.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i],i));
  }
  // for (let note of notes) {
  //   list.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  // }
}

render();

btn.onclick = function () {
  if (INP1.value.length === 0) {
    return;
  }
  const newNote = {
    title: INP1.value,
    completed: false
  }
  notes.push(newNote)
  render()
  // list.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  INP1.value = '';
};

list.onclick = function (event) {
  console.log(event.target.dataset.index)
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
      notes[index].completed =  !notes[index].completed
      console.log('toggle', index)
    } else if (type === 'remove') {
      notes.splice(index, 1)
      console.log('remove', index)
    }
    render()
  }
}

function getNoteTemplate(note, index) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="${note.completed ? 'text-decoration-line-through': ''}">${note.title}</span>
  <span>
  <span class="btn btn-small btn-${note.completed ? 'warning': 'success'}" data-index="${index}" data-type="toggle">&check;</span>
  <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
  </span>
  </li>`;
}
