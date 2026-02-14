// 创建时间对象
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (东欧标准时间)

// 获取完整年份
console.log(now.getFullYear()) // 2020

// 获取月份
console.log(now.getMonth()) // 0, 因为月份是1月，月份(0-11)

// 获取星期
console.log(now.getDay()) // 6, 因为那天是星期六，是第7天
// 星期日是0，星期一是1，星期六是6
// 获取星期几作为数字(0-6)

// 获取小时
console.log(now.getHours()) // 0, 因为时间是00:56:41

// 获取分钟
console.log(now.getMinutes()) // 56, 因为时间是00:56:41

// 获取秒数
console.log(now.getSeconds()) // 41, 因为时间是00:56:41

// 获取时间
// 此方法给出从1970年1月1日开始的毫秒数。它也被称为Unix时间。我们可以通过两种方式获取Unix时间：

// 使用 _getTime()_

console.log(now.getTime()) // 1578092201341, 这是从1970年1月1日到2020年1月4日00:56:41经过的秒数


// 使用 _Date.now()_

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, 这是从1970年1月1日到2020年1月4日00:56:41经过的秒数

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

// 让我们将这些值格式化为人类可读的时间格式。
const year = now.getFullYear() // 返回年份
const month = now.getMonth() + 1 // 返回月份(0 - 11)
const date = now.getDate() // 返回日期(1 - 31)
const hours = now.getHours() // 返回数字(0 - 23)
const minutes = now.getMinutes() // 返回数字(0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56