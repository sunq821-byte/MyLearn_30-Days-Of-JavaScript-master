// indexOf：检查项是否存在于数组中。如果存在，它返回索引，否则返回-1
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1

// 检查元素是否存在于数组中
// - 检查列表中的项

// 让我们检查数组中是否存在香蕉

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('这个水果不存在于数组中')  
} else {
    console.log('这个水果存在于数组中')
}
// 这个水果存在于数组中

// 我们也可以在这里使用三元运算符
index === -1 ? console.log('这个水果不存在于数组中'): console.log('这个水果存在于数组中')

// 让我们检查数组中是否存在鳄梨
let indexOfAvocado = fruits.indexOf('avocado')  // -1，如果未找到元素，索引为-1
if(indexOfAvocado === -1){
   console.log('这个水果不存在于数组中')  
} else {
    console.log('这个水果存在于数组中')
}
// 这个水果不存在于数组中