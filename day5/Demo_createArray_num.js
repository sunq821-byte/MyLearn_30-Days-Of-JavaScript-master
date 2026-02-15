// 带有初始值的数组。我们使用_length_属性来查找数组的长度。
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // 数字数组
const fruits = ['banana', 'orange', 'mango', 'lemon'] // 字符串数组，水果
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // 字符串数组，蔬菜
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // 字符串数组，产品
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // 网络技术数组
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // 字符串数组，国家

// 打印数组及其长度

console.log('数字:', numbers)
console.log('数字数量:', numbers.length)

console.log('水果:', fruits)
console.log('水果数量:', fruits.length)

console.log('蔬菜:', vegetables)
console.log('蔬菜数量:', vegetables.length)

console.log('动物产品:', animalProducts)
console.log('动物产品数量:', animalProducts.length)

console.log('网络技术:', webTechs)
console.log('网络技术数量:', webTechs.length)

console.log('国家:', countries)
console.log('国家数量:', countries.length)

// 数组可以包含不同数据类型的项
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // 包含不同数据类型的arr
console.log(arr)