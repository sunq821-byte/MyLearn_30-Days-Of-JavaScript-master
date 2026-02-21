// 我们使用for of循环来处理数组。如果我们对数组中每个元素的索引不感兴趣，这是一种非常方便的遍历数组的方式。
/* 
for (const element of arr) {
  // 代码放在这里
} 
*/
const numbers = [1,2,3,4,5]

for (const num of numbers) {
    console.log(num)
}
// 1 2 3 4 5

console.log('-------------')
for (const num of numbers){
    console.log(num * num)
}
// 1 4 9 16 25

console.log('-------------')
// 添加数组中的所有数字
let sum = 0
for (const num of numbers) {
    sum = sum + num
    // 也可以这样简写，sum += num
   // 之后我们将使用更短的语法(+=, -=, *=, /= 等)
}
console.log(sum) // 15

console.log('-------------')
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}
// HTML CSS JAVASCRIPT REACT NODE MONGODB

console.log('-------------')
for (const tech of webTechs) {
    console.log(tech[0])
}
// 只获取每个元素的第一个字母，H C J R N M

console.log('-------------')
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]