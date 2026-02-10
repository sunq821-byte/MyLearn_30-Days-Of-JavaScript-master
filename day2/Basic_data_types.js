// 基本数据类型是不可变（不可修改）的数据类型。一旦创建了基本数据类型，我们就无法修改它。
let word = 'JavaScript'
word[0] = 'Y'
console.log(word)


// 基本数据类型通过其值进行比较
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false