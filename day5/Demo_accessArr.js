// 索引访问数组中的每个元素,数组索引从0开始。
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // 我们使用索引访问第一项

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// 最后一个索引可以如下计算

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon


const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // 数字集合

console.log(numbers.length)  // => 知道数组的大小，即6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex_2 = numbers.length - 1;
console.log(numbers[lastIndex_2]) // -> 100


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // 网络技术列表

console.log(webTechs)        // 所有数组项
console.log(webTechs.length) // => 知道数组的大小，即7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex_3 = webTechs.length - 1
console.log(webTechs[lastIndex_3]) // -> MongoDB


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // 国家列表

console.log(countries)      // -> 数组中的所有国家
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex_4 = countries.length - 1;
console.log(countries[lastIndex_4]) //  -> Kenya


const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // 食品列表

console.log(shoppingCart) // -> 数组中的所有购物车项
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex_5 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex_5]) //  -> Sugar