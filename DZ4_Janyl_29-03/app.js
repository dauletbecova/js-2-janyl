// DZ1
function invert(text) {
    let newText = ''
    for (let letter of text) {
        newText = letter + newText
    }
    console.log(newText)
}

invert('hello')

// DZ2
function quantity(...numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    console.log(sum / numbers.length)
}

quantity(0, 1, 5, 100)

// DZ3,
let arrey = ['name', 'John', 'lastname', 'Black', 'age', '23']
let object = {}
for (let i = 0; i < arrey.length; i++) {
    object[arrey[i]] = arrey[i+1]; i++
}
console.log(object)

// DZ4
let work = [null , 123, undefined, null, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo']
let numberArr = []
let undefinedArr = []
let stringArr = []
let objectArr= []
for (let element of work) {
    let type = typeof element
    switch (type) {
        case "number":
            numberArr.push(element)
            break
        case "undefined":
            undefinedArr.push(element)
            break
        case "string":
            stringArr.push(element)
            break
        case "object":
            objectArr.push(element)
            break

        default:
            console.error('Ошибка')
    }
}
console.log(numberArr)
console.log(objectArr)
console.log(stringArr)
console.log(undefinedArr)