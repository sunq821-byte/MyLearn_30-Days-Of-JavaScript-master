/* for循环结构
for(初始化, 条件, 递增/递减){
  // 代码放在这里
} */

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// 5 4 3 2 1 0

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// 添加数组中的所有元素
const numbers_add = [1, 2, 3, 4, 5]
let sum_add = 0
for(let i_add = 0; i_add < numbers_add.length; i_add++){
  sum_add  = sum_add + numbers_add[i_add]  // 可以简写为 sum_add += numbers_add[i_add]
}
console.log(sum_add)  // 15

// 基于现有数组创建新数组
const numbers_cre = [1, 2, 3, 4, 5]
const newArr_cre = []
let sum_cre = 0
for(let i_cre = 0; i_cre < numbers_cre.length; i_cre++){
  newArr_cre.push( numbers_cre[i_cre] ** 2)
}
console.log(newArr_cre)  // [1, 4, 9, 16, 25]

const countries_cre = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr_cre1 = []
for(let i_cre = 0; i_cre < countries_cre.length; i_cre++){
  newArr_cre1.push(countries_cre[i_cre].toUpperCase())
}

console.log(newArr_cre1)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
