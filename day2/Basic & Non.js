/* 法则，我们不比较非基本数据类型。不要比较数组、函数或对象。
非基本值被称为引用类型，因为它们是通过引用而不是值进行比较的。只有当两个对象引用同一个底层对象时，它们才是严格相等的。 */

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

/* let 对象名 = {
  属性名1: 值1,
  属性名2: 值2,
  属性名3: 值3
  // ... 可以继续添加更多属性
}; */

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true