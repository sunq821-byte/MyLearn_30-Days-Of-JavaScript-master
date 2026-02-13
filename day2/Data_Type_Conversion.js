/* #### 字符串转整数
我们可以将字符串数字转换为数字。引号内的任何数字都是字符串数字。字符串数字的示例：'10'、'5'等。
我们可以使用以下方法将字符串转换为数字：
- parseInt()
- Number()
- 加号(+) */
console.log('-------------------\n字符串转整数')
let num1 = '10'
let numInt1 = parseInt(num1)
console.log(numInt1) // 10

let num2 = '10'
let numInt2 = Number(num2)
console.log(numInt2) // 10

let num3 = '10'
let numInt3 = +num3
console.log(numInt3) // 10

console.log('-------------------\n字符串转浮点数')
/* #### 字符串转浮点数

我们可以将字符串浮点数转换为浮点数。引号内的任何浮点数都是字符串浮点数。字符串浮点数的示例：'9.81'、'3.14'、'1.44'等。
我们可以使用以下方法将字符串浮点数转换为数字：

- parseFloat()
- Number()
- 加号(+) */

let num21 = '9.81'
let numFloat21 = parseFloat(num21)
console.log(numFloat21) // 9.81

let num22 = '9.81'
let numFloat22 = Number(num22)
console.log(numFloat22) // 9.81

let num23 = '9.81'
let numFloat23 = +num23
console.log(numFloat23) // 9.81

console.log('-------------------\n浮点数转整数')
/* 我们可以将浮点数转换为整数。
我们使用以下方法将浮点数转换为整数：
- parseInt() */

let num31 = 9.81
let numInt31 = parseInt(num31)
console.log(numInt31) // 9