// console.log(new Date())

// const now = new Date()
// const start = new Date(1000 * 60 * 60 * 24 * 365)
// const date = new Date(2026, 5, -1, 14, 0, 34)

// console.log(now.getDate())
// now.setFullYear(2055)
// console.log(now)

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())
// console.log(now.toLocaleString())

// ===============

let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

setInterval(update, 1)
update()

function update() {
    output.textContent = format(mode)
}

// Pure funcion
function format(formatMode) {
    const now = new Date()
    switch(formatMode) {
        case 'time':
            return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleString()
        default: return now.toLocaleString()
    }
}



