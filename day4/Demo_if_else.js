// 如果条件为真，将执行第一个块，如果不是，将执行else条件
/* 语法
if (condition) {
  // 这部分代码在条件为真时运行
} else {
  这部分代码在条件为假时运行
} */

// 示例1
let num = 3
if (num > 0) {
  console.log(`${num} 是正数`)
} else {
  console.log(`${num} 是负数`)
}
//  3 是正数

num = -3
if (num > 0) {
  console.log(`${num} 是正数`)
} else {
  console.log(`${num} 是负数`)
}
//  -3 是负数

// 示例2
let isRaining = true
if (isRaining) {
  console.log('你需要一件雨衣。')
} else {
  console.log('不需要雨衣。')
}
// 你需要一件雨衣。

isRaining = false
if (isRaining) {
  console.log('你需要一件雨衣。')
} else {
  console.log('不需要雨衣。')
}
// 不需要雨衣。