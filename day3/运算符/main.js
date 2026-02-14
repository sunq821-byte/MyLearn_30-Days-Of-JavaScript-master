console.log('--------------\n赋值运算符')
// JavaScript中的等号是赋值运算符。它用于给变量赋值。
// =、+=、-=、*=、/=、%=、**=
let firstName = 'Asabeneh'
let country = 'Finland'

console.log('--------------\n算术运算符')
/* 算术运算符是数学运算符。
- 加法(+): a + b
- 减法(-): a - b
- 乘法(*): a * b
- 除法(/): a / b
- 模数(%): a % b
- 指数(**): a ** b
 */
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // 长度，单位米

//让我们计算圆的面积
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m

const gravity = 9.81      // 单位m/s²
let mass = 72             // 单位千克
// 让我们计算物体的重量
const weight = mass * gravity
console.log(weight)        // 706.32 N(牛顿)
const boilingPoint = 100  // 温度，单位°C，水的沸点
const bodyTemp = 37       // 体温，单位°C
// 使用字符串插值连接字符串和数字
/*
 水的沸点是100°C。
 人体体温是37°C。
 地球重力是9.81 m/s²。
 */
console.log(
  `水的沸点是${boilingPoint}°C。\n人体体温是${bodyTemp}°C。\n地球重力是${gravity} m/s²。`
)

console.log('--------------\n比较运算符')

console.log(3 > 2)              // true, 因为3大于2
console.log(3 >= 2)             // true, 因为3大于等于2
console.log(3 < 2)              // false,  因为3大于2
console.log(2 < 3)              // true, 因为2小于3
console.log(2 <= 3)             // true, 因为2小于等于3
console.log(3 == 2)             // false, 因为3不等于2
console.log(3 != 2)             // true, 因为3不等于2
console.log(3 == '3')           // true, 只比较值
console.log(3 === '3')          // false, 比较值和数据类型
console.log(3 !== '3')          // true, 比较值和数据类型
console.log(3 != 3)             // false, 只比较值
console.log(3 !== 3)            // false, 比较值和数据类型
console.log(0 == false)         // true, 等价
console.log(0 === false)        // false, 不完全相同
console.log(0 == '')            // true, 等价
console.log(0 == ' ')           // true, 等价
console.log(0 === '')           // false, 不完全相同
console.log(1 == true)          // true, 等价
console.log(1 === true)         // false, 不完全相同
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, 不相等
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

console.log('--------------\n逻辑运算符')
/* 以下符号是常见的逻辑运算符：
&&(与) , ||(或) 和 !(非)。
&&运算符只有在两个操作数都为true时才为true。
||运算符在任一操作数为true时为true。
!运算符将true否定为false，将false否定为true。 */

// && 与运算符示例
console.log(4 > 3 && 10 > 5)         // true && true -> true
console.log(4 > 3 && 10 < 5)         // true && false -> false
console.log(4 < 3 && 10 < 5)         // false && false -> false

// || 或运算符示例
console.log(4 > 3 || 10 > 5)         // true  || true -> true
console.log(4 > 3 || 10 < 5)         // true  || false -> true
console.log(4 < 3 || 10 < 5)         // false || false -> false

// ! 非运算符示例
console.log(!(4 > 3))                // false
const isLightOn = true
const isLightOff = !isLightOn       // false
const isMarried = !false              // true

// 输出结果
console.log(isLightOff)               // 输出: false
console.log(isMarried)                // 输出: true

console.log('--------------\n递增运算符')
// 在JavaScript中，我们使用递增运算符来增加存储在变量中的值。递增可以是前递增或后递增。

// 前递增
let qian_count = 0
console.log(++qian_count)        // 1
console.log(qian_count)          // 1

// 后递增(多使用)
let hou_count = 0
console.log(hou_count++)        // 0
console.log(hou_count)          // 1

console.log('--------------\n三元运算符')
let isRaining = true
isRaining
  ? console.log('你需要一件雨衣。')
  : console.log('不需要雨衣。')
isRaining = false

isRaining
  ? console.log('你需要一件雨衣。')
  : console.log('不需要雨衣。')

let number = 5
number > 0
  ? console.log(`${number} 是正数`)
  : console.log(`${number} 是负数`)
number = -5

number > 0
  ? console.log(`${number} 是正数`)
  : console.log(`${number} 是负数`)