// 在我们的日常生活中，我们每天都要做决定。我们不是通过检查一个或两个条件来做决定，而是基于多个条件做决定。与我们的日常生活类似，编程也充满了条件。当我们有多个条件时，我们使用*else if*。
/*语法
if (condition) {
    代码
} else if (condition) {
   代码
} else {
    代码
} */

// 示例1
let a = 0
if (a > 0) {
  console.log(`${a} 是正数`)
} else if (a < 0) {
  console.log(`${a} 是负数`)
} else if (a == 0) {
  console.log(`${a} 是零`)
} else {
  console.log(`${a} 不是数字`)
}

// 示例2
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('你需要一件雨衣。')
} else if (weather === 'cloudy') {
  console.log('可能很冷，你需要一件夹克。')
} else if (weather === 'sunny') {
  console.log('自由外出。')
} else {
  console.log('不需要雨衣。')
}
