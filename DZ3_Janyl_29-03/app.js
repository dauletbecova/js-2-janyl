// задача - 1
let arrNumber = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
let newArray = []
for (let i = 0; i < arrNumber.length; i++){
    let array = arrNumber[i].toString()
    if (array[0] === '2' || array[0] === '5'){
        newArray.push(array)
    }
}
console.log(newArray)

// задача 2
function getDataType(item){
    console.log(typeof item)
}
getDataType('Im so tired i want to cry :(')   //тип данный "string"

// Задача 3
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol']
const tagNumber = {}
for (const tag of tags) {
    if (tagNumber[tag]){
        tagNumber[tag]++
    }else {
        tagNumber[tag] = 1
    }
    console.log(tagNumber[tag])
}
console.log(tagNumber)