let firstName = 'JunHui'
let lastName = 'Tao'
let country = 'China'
let city = 'Suining'
let age = 20
let isMarried = false
let year = 2026

console.log('firstName 的类型:', typeof firstName) // string
console.log('lastName 的类型:', typeof lastName)   // string
console.log('country 的类型:', typeof country)     // string
console.log('city 的类型:', typeof city)           // string
console.log('age 的类型:', typeof age)             // number
console.log('isMarried 的类型:', typeof isMarried) // boolean
console.log('year 的类型:', typeof year)           // number

console.log(typeof '10' === 10)
console.log(typeof parseInt('9.8') === 10)

console.log('--------------\n提供真值的JavaScript语句')
console.log(5 > 3) // true, 因为5大于3
console.log(true && true) // true, 因为两个操作数都是true
console.log(Boolean('Hello')) // true, 因为非空字符串会被转换为true

console.log('--------------\n提供假值的JavaScript语句')
console.log(5 < 3) // false, 因为5不大于3
console.log(true && false) // false, 因为两个操作数不都是true
console.log(Boolean('')) // false, 因为空字符串会被转换为false

console.log(3 != 3)


console.log('--------------\n使用Date对象执行以下活动');

const today = new Date();

1. // 今天是什么年份？
const year2 = today.getFullYear();
console.log('今天是:', year2, '年');

2. // 今天是什么月份（作为数字）？
const month = today.getMonth() + 1; // getMonth() 返回0-11，所以需要加1
console.log('今天是:', month, '月');

3. // 今天是什么日期？
const date = today.getDate();
console.log('今天是:', date, '日');

4. // 今天是什么星期几（作为数字）？
const dayOfWeek = today.getDay(); // getDay() 返回0-6，0 表示星期日
console.log('今天是星期:', dayOfWeek);

5. // 现在是什么小时？
const hours = today.getHours();
console.log('现在是:', hours, '时');

6. // 现在是什么分钟？
const minutes = today.getMinutes();
console.log('现在是:', minutes, '分');

7. // 找出从1970年1月1日到现在经过的秒数。
const secondsSinceEpoch = Math.floor(today.getTime() / 1000);
console.log('从1970年1月1日到现在经过的秒数:', secondsSinceEpoch);
