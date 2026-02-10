const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// 四舍五入到最接近的数字
// 如果大于.5向上舍入，如果小于0.5向下舍入

console.log(Math.round(PI))                // 3，将值四舍五入到最接近的数字

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3，向下舍入

console.log(Math.ceil(PI))                 // 4，向上舍入

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5，返回最小值

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20，返回最大值

const randNum = Math.random() // 创建0到0.999999之间的随机数
console.log(randNum)

// 让我们创建0到10之间的随机数

const num = Math.floor(Math.random () * 11) // 创建0到10之间的随机数
console.log(num)

//绝对值
console.log(Math.abs(-10))      // 10

//平方根
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// 幂
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// 对数
// 返回以E为底的x的自然对数，Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// 分别返回2和10的自然对数
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// 三角函数
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)