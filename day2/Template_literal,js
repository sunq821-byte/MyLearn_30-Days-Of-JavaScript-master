
// 要创建模板字符串，我们使用两个反引号。我们可以在模板字符串中将数据作为表达式注入。要注入数据，我们用花括号({})括起表达式，前面加上$符号。看下面的语法。

/* 语法
`字符串字面文本`
`字符串字面文本 ${表达式}` */

// 示例1
console.log(`The sum of 2 and 3 is 5`)              // 静态写入数据
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // 动态注入数据

// 示例2
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - 字符串插值方法
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

// 示例3
let a1 = 2
let b1 = 3
console.log(`${a1} is greater than ${b1}: ${a1 > b1}`)