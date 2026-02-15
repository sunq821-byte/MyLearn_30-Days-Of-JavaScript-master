// concat：连接两个数组。

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const fruits = ['banana', 'orange', 'mango', 'lemon']                 // 水果数组
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // 蔬菜数组
const fruitsAndVegetables = fruits.concat(vegetables)                 // 连接两个数组

console.log(fruitsAndVegetables)